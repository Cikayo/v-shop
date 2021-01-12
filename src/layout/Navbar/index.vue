<template>
  <van-nav-bar class="site-nav-bar" fixed>
    <template #left>
      <router-link to="/home">
        <van-icon name="wap-nav" size="20" color="#000" />
      </router-link>
    </template>
    <template #right>
      <router-link to="/user/login">
        <van-icon name="contact" size="20" color="#000" />
      </router-link>
      <router-link to="/pay/cart">
        <van-icon class="site-cart-icon" name="shopping-cart-o" size="20" color="#000" />
      </router-link>
    </template>
    <template #title>
      <router-link to="/home">
        V-Shop
      </router-link>
    </template>
  </van-nav-bar>
</template>

<script setup>
function onClickLeft() {

}
function onClickRight() {
  console.log(1)
}
</script>

<style lang="scss" scoped>
.site-nav-bar {
  .site-cart-icon {
    margin-left: .5rem;
  }
}
</style>
<style lang="scss">
.van-nav-bar__right:active {
  opacity: 1;
}
</style>