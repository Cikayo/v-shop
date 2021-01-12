<template>
  <div class="site-you-might-like">
    <h3 class="you-might-like__title">You Might List</h3>
    <van-row class="you-might-like__content">
      <van-col v-for="item in productList" :key="item.url" span="12">
        <router-link to="/product/detail/6626">
          <div>
            <img alt="" v-lazy="item.url" />
          </div>
          <div class="product-info">
            <div class="product-info__name">
              {{item.name}}
            </div>
            <div class="product-info__price">
              ${{item.price}}
            </div>
          </div>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import list from '../mock/product.json';
let productList = reactive(list);
</script>

<style lang="scss" scoped>
.site-you-might-like {
  .you-might-like__title {
    font-size: 16px;
    padding-left: .5rem;
    color: #333;
  }
  .you-might-like__content {
    img {
      width: 100%;
    }
    .product-info {
      font-weight: bold;
      text-align: center;
      color: #333;
    }
  }
}
</style>