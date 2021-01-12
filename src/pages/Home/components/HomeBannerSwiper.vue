<template>
  <van-swipe class="site-home-banner__swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.site-home-banner__swiper {
  line-height: 240px;
  text-align: center;
  font-size: 20px;
  background-color: #f2f2f2;
}
</style>