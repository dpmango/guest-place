import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper';
import { Swiper as SwiperClass, Navigation, Pagination } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.css'
// import 'swiper/components/navigation/navigation.scss';

// Swiper modules
SwiperClass.use([Navigation, Pagination])

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
