<template>
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
    <van-field
      v-model="password"
      class="user-password"
      type="password"
      name="password"
      label="Password"
      placeholder="Password"
      :rules="[{ required: true, message: 'password!' }]"
    />
    <div class="login-functions">
      <van-button block type="primary" native-type="submit" class="login-submit-btn">Submit</van-button>
    </div>
  </van-form>
</template>

<script>
import { Notify } from 'vant';
import { ref } from "vue";
export default {
  // props 参数不能省略
  setup(props, { emit }) {
    let useremail = ref('');
    let password = ref('');
    function onSubmit(values) {
      emit('handleSubmit', values);
    }
    return { useremail, password, onSubmit }
  }
}
</script>

<style lang="scss" scoped>
.user-email, .user-password {
  padding: .5rem 0;
}
.login-functions {
  margin-top: 1rem;
}
.login-submit-btn {
  background-color: #000;
  border-color: #000;
}
</style>