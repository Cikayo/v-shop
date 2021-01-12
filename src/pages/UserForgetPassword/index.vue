<template>
  <div class="site-forget-password">
    <h2 class="page-title">Forgot Password</h2>
    <van-form @submit="onSubmit">
      <van-field
        v-model="useremail"
        class="user-email"
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        :rules="[{ required: true, message: 'email!' }]"
      />
      <div class="forget-functions">
        <van-button
          block
          type="primary"
          native-type="submit"
          class="submit-btn"
          :loading="btnLoading"
        >Submit</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter();
let useremail = ref('');
let btnLoading = ref(false);
function onSubmit(values) {
  console.log(values);
  btnLoading.value = true;
  setTimeout(() => {
    Toast.success('The password has been sent to your mail.');
    btnLoading.value = false;
    setTimeout(() => {
      router.push('/user/login')
    }, 2000)
  }, 1000)
}
</script>

<style lang="scss" scoped>
.site-forget-password {
  padding: .5rem;
  .page-title {
    margin: 0 0 .5rem;
    font-size: 20px;
  }
  .forget-functions {
    margin-top: 1rem;
  }
  .submit-btn {
    border-color: #000;
    background-color: #000;
  }
}
</style>