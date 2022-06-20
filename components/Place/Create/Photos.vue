<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 5/5. <span class="c-primary">медиатека</span></h2>

    <UiError :error="error" />

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Загрузите видео (проморолик)</div>

      <div class="step__video">
        <UiUploader
          :file="video.file"
          :allowed-mime="['video']"
          :max-size="10"
          :include-reader="true"
          @onReader="(v) => (video.blob = v)"
          @onChange="(f) => (video.file = f)"
        >
          <template #preview="slotProps">
            <div class="uploader-trigger">
              <div class="uploader-trigger__box" @click="slotProps.trigger">
                <div v-if="!video.blob" class="uploader-trigger__plus">
                  <UiSvgIcon name="uploader-add" />
                </div>
                <div v-else class="uploader-trigger__img">
                  <img :src="video.blob" :alt="video.file.name" />
                </div>
              </div>
              <div class="uploader-trigger__details">
                <label :class="video.desc && video.desc.length && 'hidden'" for="">Добавить описание...</label>
                <div
                  class="uploader-trigger__contenteditable"
                  :contenteditable="true"
                  :value="video.desc"
                  @input="(e) => (video.desc = { ...video, desc: e.target.innerHTML })"
                />
              </div>
            </div>
          </template>
        </UiUploader>
      </div>
    </div>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Добавьте фото и/или видео вашей площадки</div>
      <p class="p-body c-gray tac">
        Каждое фото обязательно подписать (название зала, категория номера и т.д.). Первое фото будет главным. Вы можете
        перемещать фотографии, чтобы изменить их очередность.
      </p>

      <div class="step__media">
        <UiUploader
          v-for="(photo, idx) in photos"
          :key="idx"
          :file="photo.file"
          :allowed-mime="['image']"
          :max-size="1"
          :include-reader="true"
          @onReader="(img) => (photo.blob = img)"
          @onChange="(f) => (photo.file = f)"
        >
          <template #preview="slotProps">
            <div class="uploader-trigger">
              <div class="uploader-trigger__box" @click="slotProps.trigger">
                <div v-if="!photo.blob" class="uploader-trigger__plus">
                  <UiSvgIcon name="uploader-add" />
                </div>
                <div v-else class="uploader-trigger__img">
                  <img :src="photo.blob" :alt="photo.file.name" />
                </div>
              </div>
              <div class="uploader-trigger__details">
                <label :class="photo.desc && photo.desc.length && 'hidden'" for="">Добавить описание...</label>
                <div
                  class="uploader-trigger__contenteditable"
                  :contenteditable="true"
                  :value="photo.desc"
                  @input="(e) => handlePhotosDescChange({ photo, val: e })"
                />
              </div>
            </div>
          </template>
        </UiUploader>
      </div>
    </div>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Документы</div>

      <div class="step__docs">
        <UiUploader
          v-for="(photo, idx) in docs"
          :key="idx"
          :file="photo.file"
          :allowed-mime="['application', 'image']"
          :max-size="10"
          :include-reader="false"
          @onReader="(img) => (photo.blob = img)"
          @onChange="(f) => (photo.file = f)"
        >
          <template #preview="slotProps">
            <p v-if="photo.helper" class="p-body c-gray">{{ photo.helper }}</p>
            <div class="uploader-trigger">
              <div class="uploader-trigger__box" @click="slotProps.trigger">
                <div v-if="!photo.file" class="uploader-trigger__message">
                  <UiSvgIcon name="upload-cloud" />
                  <p>
                    Перетащите файл сюда
                    <br />
                    <span class="c-gray">или</span>
                  </p>

                  <UiButton size="extra-small" theme="system">
                    <UiSvgIcon name="paper-clip" />
                    <span>Выберите файл</span>
                  </UiButton>

                  <p class="p-label">Максимальный размер файла 10 MB</p>
                </div>
              </div>
            </div>
          </template>
        </UiUploader>
      </div>
    </div>

    <UiError :error="error" />

    <div class="step__cta">
      <UiButton theme="outline" @click="() => $emit('onBack')">Назад</UiButton>

      <UiButton @click="handleSubmit">Завершить</UiButton>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UiPage',
  data() {
    return {
      error: '',
      loading: false,
      video: {
        file: null,
        blob: null,
        desc: '',
      },
      photos: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        file: null,
        blob: null,
        desc: '',
      })),
      docs: [
        {
          id: 1,
          helper: 'По желанию можно прикрепить Презентацию, Банкетное меню, план рассадки, технический Райдер и т.д.',
          file: null,
          blob: null,
        },
        {
          id: 2,
          helper:
            'Прикрепите скан подписанного договора. Это также можно сделать позже, после заполнения формы, в личном кабинете',
          file: null,
          blob: null,
        },
      ],
    }
  },
  computed: {
    ...mapGetters('place', ['getSavedId']),
  },
  methods: {
    handlePhotosDescChange({ photo, e }) {
      this.photos = [...this.photos.map((x) => (x.id === photo.id ? { ...x, desc: e.target.innerHTML } : { ...x }))]
    },
    prepareFileList() {
      const files = []

      if (this.video.file) {
        files.push({
          description: this.video.desc,
          file: this.video.file,
          fileType: 'VIDEO',
        })
      }

      if (this.docs[0].file) {
        files.push({
          description: '',
          file: this.docs[0].file,
          fileType: 'DOCUMENT',
        })
      }

      if (this.docs[1].file) {
        files.push({
          description: '',
          file: this.docs[1].file,
          fileType: 'CONTRACT',
        })
      }

      const filledImages = this.photos.filter((x) => x.file)
      if (filledImages && filledImages.length) {
        filledImages.forEach((img) => {
          files.push({
            description: img.desc,
            file: img.file,
            fileType: 'IMAGE',
          })
        })
      }

      return files
    },
    async handleSubmit() {
      // const isValid = await this.$refs.form.validate()
      // if (!isValid) return

      const files = this.prepareFileList()
      this.loading = true

      await this.uploadMedia({ id: this.getSavedId, files })
        .then((_res) => {
          this.error = null
          this.$router.push('/success/create')
        })
        .catch((err) => {
          this.$toast.global.error({ message: 'Ошибка, проверьте поля' })

          this.error = err.message
        })

      this.loading = false
    },
    ...mapActions('place', ['uploadMedia']),
  },
}
</script>

<style lang="scss" scoped>
.step {
  &__title {
    margin-bottom: 50px;
  }
  &__section {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__section-label {
    font-weight: 500;
    text-align: center;
    margin-bottom: 25px;
  }
  &__cta {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .button {
      min-width: 190px;
    }
  }

  &__media,
  &__docs,
  &__video {
    .uploader {
      ::v-deep .uploader__file {
        display: none;
      }
    }
  }

  &__media {
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 30px;
  }

  &__video {
    max-width: 540px;
    margin: 0px auto 0;
    .uploader-trigger {
      &__box {
        padding-bottom: 30%;
      }
    }
  }

  &__docs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 30px;
    .uploader-trigger {
      &__box {
        padding-bottom: 45%;
      }
    }
  }
}

.form {
  position: relative;
  // .ui-group{}
}

p + .uploader-trigger {
  margin-top: 6px;
}

.uploader-trigger {
  position: relative;
  width: 100%;
  padding-bottom: 24px;

  &__box {
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 100%;
    justify-content: center;
    background: #ecf4fd;
    border: 1px dashed #aba7af;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.25s $ease, border 0.25s $ease;
    &:hover {
      border-color: $colorPrimary;
      background: white;
    }
  }
  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__details {
    position: relative;
    font-size: 14px;
    line-height: 1.3;
    label {
      position: absolute;
      top: 8px;
      left: 0;
      right: 0;
      text-align: center;
      color: $colorLight;
      pointer-events: none;
      transition: opacity 0.1s $ease;
      backface-visibility: hidden;
      &.hidden {
        opacity: 0;
      }
    }
  }

  &__message {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    > .svg-icon {
      font-size: 32px;
      color: $colorPrimary;
    }
    p {
      margin: 8px 0;
    }
  }

  &__contenteditable {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    line-height: 1.35;
    color: $colorGray;
    border: 0;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    transition: color 0.25s $ease;
    background-color: transparent;
    &::placeholder {
      color: $colorLight;
    }
  }
  &__plus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .svg-icon {
      font-size: 34px;
      color: $colorPrimary;
    }
  }
}

@include r($lg) {
  .step {
    &__media {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@include r($md) {
  .step {
    &__docs {
      grid-template-columns: 1fr;
    }
  }
}

@include r($sm) {
  .step {
    &__media {
      grid-template-columns: 1fr 1fr;
    }
    &__cta {
      flex-direction: column-reverse;
      gap: 15px;
    }
  }
}
</style>
