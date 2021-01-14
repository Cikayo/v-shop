<template>
  <div class="site-unpaid-list">
    <van-card
      class="unpaid-list__item"
      currency="$"
      v-for="item in productList"
      :key="item.url"
      :price="item.price"
      :desc="item.sku"
      :title="item.name"
      :thumb="item.url"
    >
      <template #footer>
        <van-button size="mini" class="footer-btn" round @click="handleCancelClick(item)">Cancel</van-button>
        <van-button size="mini" round type="danger" class="footer-btn" @click="handlePayClick(item)">Pay</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Toast } from 'vant';
import list from '@/mock/product.json';
let newList = list.slice(0, 2);
let productList = reactive(newList);
function handleCancelClick(item) {
  Toast('Cancel');
}
function handlePayClick(item) {
  Toast('Pay');
}
</script>

<style lang="scss" scoped>
.site-unpaid-list {
  .footer-btn {
    padding: 0 6px;
  }
}
</style>