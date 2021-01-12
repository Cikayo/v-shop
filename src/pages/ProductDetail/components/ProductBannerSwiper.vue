<template>
  <van-swipe class="site-product-banner__swiper" :autoplay="3000" indicator-color="#000">
    <van-swipe-item v-for="item in productBannerList" :key="item.url">
      <img class="product-banner-img" v-lazy="item.url" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
let productBannerList = [
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-06-20200731.jpg'
  },
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-07-20200731.jpg'
  },
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-01-20200731.jpg'
  },
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-02-20200509.jpg'
  },
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-05-20200731.jpg'
  },
  {
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-02-20200731.jpg'
  },
]
</script>

<style lang="scss" scoped>
.site-product-banner__swiper {
  .product-banner-img {
    width: 100%;
  }
}
</style>