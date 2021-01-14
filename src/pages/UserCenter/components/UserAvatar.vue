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
    <div class="user-name">
      <div>Hi, Job</div>
      <div>
        <span class="log-out" @click="handleLogoutClick">Log out ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Dialog, Toast } from 'vant'; 
import { useRouter } from 'vue-router';
import { removeUserToken } from '@/utils/user.js';
import userAvatar from '@/assets/user-avatar.jpg';
const router = useRouter();
function handleLogoutClick() {
  Dialog.confirm({
    title: 'Prompt',
    message: 'Are you sure to exit?',
  }).then(() => {
    removeUserToken();
    Toast.loading('Loading...');
    setTimeout(() => {
      Toast.success('Success');
      router.replace('/');
    }, 1000)
  }).catch(() => {
      // on cancel
    });  
}
</script>

<style lang="scss" scoped>
.site-user-avatar {
  display: flex;
  padding: 1rem;
  .user-name {
    flex-grow: 1;
    padding: 0 0 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  .log-out {
    font-size: 14px;
    &:active {
      color: #F57C00;
    }
  }
}
</style>