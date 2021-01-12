<template>
  <!-- 商品尺码选择 -->
  <div></div>
  <!-- 商品数量选择 -->
  <div>
    <van-field class="product-qty" v-model="productQty" type="number" label="Qty" label-width="3em" />
  </div>
  <van-row gutter="20" class="product-form-functions">
    <van-col span="12">
      <van-button block type="primary" class="checkout-btn" @click="handleCheckoutClick">Checkout</van-button>
    </van-col>
    <van-col span="12">
      <van-button block type="default" class="add-cart-btn" @click="handleAddClick">Add To Cart</van-button>
    </van-col>
  </van-row>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let productQty = ref(1);
function handleAddClick() {
  router.push('/pay/cart')
}
function handleCheckoutClick() {
  router.push('/pay/checkout')
}
</script>

<style lang="scss" scoped>
.product-qty {
  padding: 0 .5rem;
}
.product-form-functions {
  margin-top: .5rem;
  padding: 1rem .5rem;
  .checkout-btn {
    background-color: #000;
    border: #000;
  }
}
</style>