<template>
  <van-swipe class="site-home-banner__swiper" :autoplay="3000" indicator-color="#000">
    <van-swipe-item v-for="item in swiperList" :key="item.url">
      <img v-lazy="item.url" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import { reactive } from 'vue';
import list from '../../../mock/home.json';
const swiperList = reactive(list);
</script>

<style lang="scss" scoped>
.site-home-banner__swiper {
  height: 200px;
  background-color: #f2f2f2;
  img {
    width: 100%;
  }
}
</style>