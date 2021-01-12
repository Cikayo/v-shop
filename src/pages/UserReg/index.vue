<template>
  <div class="site-user-reg">
    <h1>Sign Up</h1>
    <UserRegForm @handleSubmit="handleSubmit" />
    <div class="site-user-reg-other__functions">
      <div class="other-functions__item">
        <router-link to="/user/login">Already have an account? Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserRegForm from '../../components/UserRegForm.vue';
function handleSubmit(values) {
  console.log(values)
}
</script>

<style lang="scss" scoped>
.site-user-reg {
  padding: 0 0.5rem;
  h1 {
    margin: 0;
    padding-top: .5rem;
    font-size: 20px;
  }
  .site-user-reg-other__functions {
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