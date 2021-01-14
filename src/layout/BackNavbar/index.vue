<template>
  <van-nav-bar class="site-nav-bar" fixed>
    <template #left>
      <van-icon name="arrow-left" size="20" @click="handleBackClick" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function handleBackClick() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>

</style>