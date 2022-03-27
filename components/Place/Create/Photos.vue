<template>
  <div class="step">
    <h2 class="step__title h2-title tac">шаг 4/5. <span class="c-primary">медиатека</span></h2>

    <!--section -->
    <div class="step__section">
      <div class="step__section-label h4-title">Добавьте фото и/или видео вашей площадки</div>
      <p class="p-label tac">
        Первое фото будет главным. Вы можете перемещать фотографии, чтобы изменить их очередность.
      </p>

      <div class="step__grid">
        <UiUploader
          v-for="(photo, idx) in photos"
          :key="idx"
          :file="photo.file"
          :allowed-mime="['image']"
          :max-size="5"
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
              <div
                :contenteditable="true"
                :value="photo.desc"
                class="uploader-trigger__info"
                placeholder="Добавить описание.."
                @change="(e) => handleDescChange({ photo, val: e.target.value })"
              />
            </div>
          </template>
        </UiUploader>
      </div>
    </div>

    <div class="step__cta">
      <UiButton theme="outline" @click="() => $emit('onBack')">Назад</UiButton>

      <UiButton @click="handleSubmit">Далее</UiButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPage',
  data() {
    return {
      error: '',
      photos: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        file: null,
        blob: null,
        desc: '',
      })),
    }
  },
  methods: {
    handleDescChange({ photo, val }) {
      this.photos = [...this.photos.map((x) => (x.id === photo.id ? { ...x, desc: val } : { ...x }))]
    },
    handleSubmit() {
      // const isValid = await this.$refs.form.validate()
      // // if (!isValid) {
      // // }

      this.$emit('onNext')
      // await this.login({ step: 1 })
      //   .then((_res) => {
      //     this.error = null
      //   })
      //   .catch((err) => {
      //     const { data, code } = err

      //     if (data && code === 401) {
      //       Object.keys(data).forEach((key) => {
      //         this.error = data[key]
      //       })
      //     }
      //   })
    },
    // ...mapActions('auth', ['login']),
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

  &__grid {
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px 30px;
    .uploader {
      width: 100%;
      ::v-deep .uploader__file {
        display: none;
      }
    }
  }
}

.form {
  position: relative;
  // .ui-group{}
}

.uploader-trigger {
  position: relative;
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
  &__info {
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    line-height: 1.35;
    text-align: center;
    color: $colorLight;
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
    &__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

// @include r($md) {
//   .step {
//     padding: 40px 15px;

//   }
// }
@include r($sm) {
  .step {
    &__grid {
      grid-template-columns: 1fr 1fr;
    }
    &__cta {
      flex-direction: column-reverse;
      gap: 15px;
    }
  }
}
</style>
