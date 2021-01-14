<template>
  <van-grid>
    <van-grid-item icon="peer-pay" text="Unpaid" badge="2" @click="handleGoClick('unpaidlist')" />
    <van-grid-item icon="logistics" text="In Transit" badge="10" />
    <van-grid-item icon="after-sale" text="After Sale" badge="1" />
    <van-grid-item icon="orders-o" text="All Order" badge="99+" />
  </van-grid>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function handleGoClick(url) {
  router.push(`/pay/${url}`);
}
</script>

<style lang="scss" scoped>

</style>