<template>
  <div class="map">
    <div class="map__searchbar">
      <div class="container">
        <PlaceSearchbar />
      </div>
    </div>

    <yandex-map
      :coords="map.coords"
      :zoom="map.zoom"
      :controls="map.controls"
      :scroll-zoom="false"
      @map-was-initialized="setMapInstance"
    >
      <ymap-marker
        v-for="marker in markers"
        :key="marker.id"
        :marker-id="marker.id"
        :coords="[marker.lat, marker.lng]"
        :icon="map.defaultMarker"
        :hint-content="marker.name"
        :options="{
          hideIconOnBalloonOpen: false,
        }"
        @balloonopen="() => bindListener(marker)"
        @balloonclose="() => unbindListener(marker)"
      >
        <MapBallon slot="balloon" :marker="marker" />
      </ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapBallon from './MapBallon'
import locations from '~/api/locations'

export default {
  components: { MapBallon },

  data() {
    return {
      locations,
      mapInstance: null,

      map: {
        coords: [55.75322, 37.622513],
        zoom: 12,
        controls: ['zoomControl'],
        defaultMarker: {
          layout: 'default#imageWithContent',
          imageSize: [48, 48],
          imageOffset: [0, 0],
          imageHref: 'https://koleso-widget.surge.sh/static/marker@2x.png',
        },
        // clusterOptions: {
        //   primary: {
        //     layout: "cluster#balloonCarousel",
        //     clusterDisableClickZoom: true,
        //     clusterOpenBalloononClickCta: true,
        //   },
        // },
      },
    }
  },
  computed: {
    markers() {
      return [...this.locations.map((x) => x.station)]
    },
  },

  methods: {
    bindListener(marker) {
      document.getElementById('marker').addEventListener('click', () => this.onClickCta(marker))
    },
    unbindListener(marker) {
      document.getElementById('marker').removeEventListener('click', () => this.onClickCta(marker))
    },
    onClickCta(marker) {
      // this.moveMapToCoords(marker)
      this.$router.push(`/place/${marker.id}`)
    },
    moveMapToCoords({ lat, lng, id }) {
      this.mapInstance.setCenter([lat, lng])
      this.mapInstance.setZoom(15)
      // this.mapInstance.objects.balloon.open(id)
    },
    setMapInstance(instance) {
      this.mapInstance = instance
    },
  },
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: calc(100vh - 146px);
  display: flex;
  flex-direction: column;
  background: $colorLightUltra;
  ::v-deep .ymap-container {
    flex: 1 1 auto;
  }
  ::v-deep ymaps[class$='balloon__close-button'] {
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 10.0016L1.00164 18L0 16.9984L7.99836 9L5.62878e-07 1.00164L1.00164 0L9 7.99836L16.9984 0L18 1.00164L10.0016 9L18 16.9984L16.9984 18L9 10.0016Z' fill='red'/%3E%3C/svg%3E%0A");
    opacity: 1;
    filter: grayscale(1);
    width: 40px;
    transition: filter 0.25s $ease;
    &:hover {
      filter: none;
    }
  }

  &__searchbar {
    position: absolute;
    z-index: 3;
    top: 16px;
    left: 0;
    right: 0;
    pointer-events: none;
    .bar {
      pointer-events: all;
    }
  }
}

// .marker-image {
//   opacity: 0;
//   visibility: hidden;
// }
</style>
