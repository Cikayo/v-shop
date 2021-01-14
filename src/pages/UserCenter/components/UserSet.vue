<template>
  <div class="site-user-set">
    <h3 class="set-title">User Set</h3>
    <van-grid>
      <van-grid-item icon="location-o" text="Address" />
      <van-grid-item icon="coupon-o" text="Coupon" />
      <van-grid-item icon="like-o" text="Wishlist" @click="handleGoClick('wishlist')" />
      <van-grid-item icon="setting-o" text="Info" />
    </van-grid>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function handleGoClick(url) {
  router.push(`/user/${url}`);
}
</script>

<style lang="scss" scoped>
.site-user-set {
  .set-title {
    margin: .5rem 0;
    padding: 0 .5rem;
    font-size: 18px;
    color: #333;
  }
}
</style>