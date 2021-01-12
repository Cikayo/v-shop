<template>
  <div class="site-home-banner__list">
    <router-link to="/product/list">
      <div v-for="item in bannerList" :key="item.url" class="banner-list__item">
        <img :src="item.url" :alt="item.name">
      </div>
    </router-link>
  </div>
</template>

<script setup>
let bannerList = [
  {
    url: 'https://media.vancaro.com/Homepageimage/20201201/banner2-pc-01-20201201.jpg',
    name: 'rings'
  },
  {
    url: 'https://media.vancaro.com/Homepageimage/20201201/banner3-pc-01-20201201.jpg',
    name: 'rings'
  },
  {
    url: 'https://media.vancaro.com/Homepageimage/20201201/banner3-pc-02-20201201.jpg',
    name: 'rings'
  },
  {
    url: 'https://media.vancaro.com/Homepageimage/20201201/banner4-pc-01-20201201.jpg',
    name: 'rings'
  }
]
</script>

<style lang="scss" scoped>
.site-home-banner__list {
  .banner-list__item {
    img {
      width: 100%;
      vertical-align: bottom;
    }
  }
}
</style>