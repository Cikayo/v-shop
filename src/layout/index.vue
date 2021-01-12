<template>
  <Navbar />
  <div class="site-content">
    <router-view></router-view>
  </div>
  <div class="site-footer">
    &copy;2021 All Rights Reserved
  </div>
</template>

<script setup>
import Navbar from './Navbar/index.vue'
</script>

<style lang="scss" scoped>
.site-content {
  margin-top: 46px;
}
.site-footer {
  padding: 1rem;
  text-align: center;
  font-size: 14px;
  
}
</style>