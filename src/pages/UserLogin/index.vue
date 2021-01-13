<template>
  <div class="site-user-login">
    <h1>Sign In</h1>
    <UserLoginForm @handleSubmit="handleSubmit" />
    <div class="site-user-login-other__functions">
      <div class="other-functions__item">
        <router-link to="/user/forgetpassword">Forget password?</router-link>
      </div>
      <div class="other-functions__item">
        <router-link to="/user/reg">Create an account</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { setUserToken } from '@/utils/user.js';
import UserLoginForm from '@/components/UserLoginForm.vue';

const router = useRouter();

function handleSubmit(values) {
  Toast.loading({
    duration: 1000,
    forbidClick: true,
    message: 'Loading...',
  });
  setTimeout(() => {
    setUserToken(Date.now());
    Toast.success('Success');
    router.push('/user/center');
  }, 1000)
}
</script>

<style lang="scss" scoped>
.site-user-login {
  padding: 0 0.5rem;
  h1 {
    margin: 0;
    padding-top: .5rem;
    font-size: 20px;
  }
  .site-user-login-other__functions {
    margin-top: 2rem;
    a {
      color: #666;
      &:hover, &:active {
        color: #f00;
        text-decoration: underline;
      }
    }
    .other-functions__item {
       margin-bottom: .5rem;
    }
  }
}
</style>