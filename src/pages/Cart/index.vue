<template>
  <div class="site-cart">
    <h1 class="cart-title">SHOPPING CART</h1>
    <template v-if="productList.length > 0">
      <CartList :productList="productList" @handleDelProduct="handleDelProduct" />
    </template>
    <template v-else>
      <div class="cart-nothing">
        <p>😭 Your cart is empty. Do some shopping!</p>
      </div>
    </template>
    <van-divider />
    <YouMightLike />
    <van-submit-bar
      v-show="productList.length > 0"
      label="Total:"
      currency="$"
      :price="13050"
      button-text="Checkout"
      button-color="#000"
      @submit="onSubmit" 
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import CartList from './components/CartList.vue';
import YouMightLike from '../../components/YouMightLike.vue';

const router = useRouter();
let productList = reactive([
  {
    id: '1001',
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-06-20200731.jpg',
    num: 1,
    price: 199.00,
    sku: '8(U.S.)\\18.2(mm)',
    name: 'Sunflower Ring Bridal Sets You Are1'
  },
  {
    id: '1002',
    url: 'https://media.vancaro.com/product/image/n/r/nrc0706-06-20200731.jpg',
    num: 2,
    price: 89.00,
    sku: '7(U.S.)\\17.2(mm)',
    name: 'Sunflower Ring Bridal Sets You Are2'
  }
])
// 删除商品
function handleDelProduct(productItem) {
  let index = productList.findIndex((item) => item.id === productItem.id);
  productList.splice(index, 1);
}

function onSubmit() {
  router.push('/pay/checkout')
}
</script>

<style lang="scss" scoped>
.site-cart {
  .cart-title {
    margin: 0;
    padding: .5rem;
    font-size: 20px;
  }
  .cart-nothing {
    padding: .5rem;
  }
}
</style>