<template>
  <div class="chat-submit">
    <template slot="placeholder">
      <UiLoader :loading="true" theme="block" />
    </template>

    <form class="chat-submit__form" @submit.prevent="handleSubmit">
      <div class="editor">
        <input :id="_uid" ref="uploadInput" type="file" @change="handleUpload" />

        <div v-if="reply.id" class="editor__reply">
          <div class="editor__reply-delete" @click="handleReplyDelete">
            <UiSvgIcon name="close-bold" />
          </div>
          <span class="editor__reply-title">{{ reply.text }}</span>
        </div>

        <div class="editor__body">
          <label :for="_uid" class="editor__attach">
            <UiSvgIcon name="paper-clip" />
          </label>

          <UiUnput v-model="text" preview-class="markdown-body" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { bytesToMegaBytes } from '~/helpers/FormatBytes'

export default {
  props: {},
  data() {
    return {
      text: '',
      uploader: {
        allowedMime: ['image'],
        maxSize: '5',
      },
    }
  },
  computed: {
    ...mapGetters('chat', ['activeDialog', 'reply']),
  },
  watch: {
    reply: {
      deep: true,
      handler(reply) {},
    },
  },
  mounted() {},
  methods: {
    handleSubmit() {
      if (this.text.trim().length >= 1) {
        const request = { body: this.text, dialog_id: this.activeDialog }

        // getting lesson id from url
        const loc = window.location.href.split('/')
        if (loc.includes('theme')) {
          request.lesson_id = parseInt(loc[loc.length - 1])
        }

        if (this.reply.id) {
          request.reply_id = this.reply.id
        }

        this.sendMessage(request)

        this.text = ''
        this.setReply({ id: null, text: null })
        this.$emit('onSubmit')
        // this.simplemde.codemirror.refresh();
      }
    },
    async handleUpload(e) {
      // cleanup

      const files = e.target.files

      if (files && files[0]) {
        const file = files[0]

        // limit size
        if (this.uploader.maxSize) {
          const sizeInMb = bytesToMegaBytes(file.size)

          if (sizeInMb > this.maxSize) {
            await this.$toast.global.error({ message: `Размер файла превышает ${this.maxSize}Мб` })
            e.target.value = ''
            return false
          }
        }

        if (file) {
          await this.createMessageGhost({ file })

          this.$emit('onSubmit')

          const res = await this.uploadFile(file).catch((err) => {
            this.$toast.global.error({ message: err.data })
          })

          this.sendMessage({ file_id: res.id, dialog_id: this.activeDialog })
        }

        // if (this.includeReader) {
        //   const reader = new FileReader();
        //   reader.onload = (ev) => {
        //     this.setFileReaderValue(ev.target.result);
        //   };
        //   reader.readAsDataURL(file);
        // }

        e.target.value = ''
      }
    },
    handleReplyDelete() {
      this.setReply({
        id: null,
        text: null,
      })
    },
    ...mapActions('chat', ['sendMessage', 'uploadFile', 'createMessageGhost']),
    ...mapMutations('chat', ['setReply']),
  },
}
</script>

<style lang="scss">
.chat-submit {
  .CodeMirror,
  .CodeMirror-scroll {
    min-height: 1px;
    height: 100%;
    max-height: 340px;
  }

  .CodeMirror {
    // padding: 8px 16px 8px 0;
    padding: 0 16px 0 0;
    border: 0;
    font-size: 15px;
    line-height: 1.5;
  }

  .CodeMirror-scroll {
    margin-bottom: -50px;
    padding-bottom: 50px;
  }
}
</style>

<style lang="scss" scoped>
.chat-submit {
  &__form {
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      visibility: hidden;
    }
  }
}

.editor {
  padding-left: 10px;
  &__reply {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    min-width: 1px;
    padding: 8px 10px 12px;
  }
  &__reply-title {
    display: inline-block;
    position: relative;
    font-size: 15px;
    padding: 2px 10px;
    @include text-overflow;
    &::before {
      display: inline-block;
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 26px;
      background: $colorPrimary;
      border-radius: 1px;
    }
  }
  &__reply-delete {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 20px;
    min-height: 20px;
    margin-right: 12px;
    padding: 4px;
    font-size: 0;
    border: 1px solid $colorGray;
    border-radius: 50%;
    color: $colorGray;
    cursor: pointer;
    transition: color 0.25s $ease, border 0.25s $ease;
    .svg-icon {
      font-size: 8.57px;
    }
    &:hover {
      color: $colorRed;
      border-color: $colorRed;
    }
  }
  &__attach {
    flex: 0 0 auto;
    padding: 10px;
    font-size: 0;
    color: $colorGray;
    cursor: pointer;
    transition: color 0.25s $ease;
    .svg-icon {
      font-size: 20px;
    }
    &:hover {
      color: $fontColor;
    }
  }
  &__body {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
  }
}

.vue-simplemde {
  flex: 1 1 auto;
  width: 100%;
  // .markdown-body {
  //   padding: 8px 16px 8px 8px !important;
  // }
}
</style>
