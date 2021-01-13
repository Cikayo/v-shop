<template>
  <div class="site-user-avatar">
    <div class="user-img">
      <van-image
        round
        fit="cover"
        width="4rem"
        height="4rem"
        :src="userAvatar"
      />
    </div>
    <div class="user-name">Hi, Job</div>
  </div>
</template>

<script setup>
import userAvatar from '@/assets/user-avatar.jpg';
</script>

<style lang="scss" scoped>
.site-user-avatar {
  display: flex;
  padding: 1rem;
  .user-name {
    flex-grow: 1;
    padding: .5rem 1rem;
  }
}
</style>