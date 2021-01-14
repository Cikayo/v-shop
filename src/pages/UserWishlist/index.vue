<template>
  <div class="site-user-wishlist">
    <h3 class="wishlist-title">My Wishlist</h3>
    <van-swipe-cell v-for="item in productList" :key="item.name">
      <van-card
        class="wishlist-list__item"
      >
        <template #title>
          <router-link :to="`/product/detail/${item.id}`">{{item.name}}</router-link>
        </template>
        <template #thumb>
          <router-link :to="`/product/detail/${item.id}`">
            <van-image :src="item.url" />
          </router-link>
        </template>
      </van-card>
      <template #right>
        <van-button square text="Del" type="danger" class="del-btn" @click="handleDelClick(item)" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
let list = reactive([
  {
    id: '1001',
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-06-20200731.jpg',
    num: 1,
    price: 199.00,
    sku: '8(U.S.)\\18.2(mm)',
    name: 'Sunflower Ring Bridal Sets You Are1'
  },
])
let productList = reactive(list);
function handleDelClick(productItem) {
  let index = productList.findIndex((item) => item.id === productItem.id);
  productList.splice(index, 1);
}
</script>

<style lang="scss" scoped>
.site-user-wishlist {
  .wishlist-title {
    margin: 0;
    padding: .5rem;
    font-size: 18px;
  }
  .wishlist-list__item {
    margin-bottom: .5rem;
    a {
      color: #000;
      &:active {
        color: #f00;
      }
    }
  }
  .del-btn {
    height: 100%;
  }
}
</style>