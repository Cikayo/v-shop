<template>
  <van-form class="site-product-detail__form">
    <div>
      <van-field
        class="form-item"
        readonly
        clickable
        label-width="2em"
        name="size"
        v-model="form.size"
        label="Size"
        placeholder="Size"
        @click="showSku = true"
      />
      <van-popup v-model:show="showSku" position="bottom">
        <van-picker
          show-toolbar
          cancel-button-text="cancel"
          confirm-button-text="confirm"
          :columns="skuList"
          @confirm="handleSkuConfirm"
          @cancel="showSku = false"
        />
      </van-popup>
      <van-field class="form-item product-qty" label-width="2em" name="qty" label="Qty">
        <template #input>
          <van-stepper v-model="form.qty" button-size="22" disable-input />
        </template>
      </van-field>
    </div>
    <van-row gutter="20" class="product-form-functions">
      <van-col span="12">
        <van-button block type="primary" class="checkout-btn" @click="handleCheckoutClick">Checkout</van-button>
      </van-col>
      <van-col span="12">
        <van-button block type="default" class="add-cart-btn" @click="handleAddClick">Add To Cart</van-button>
      </van-col>
    </van-row>
  </van-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let form = reactive({
  size: '',
  qty: 1
})
let showSku = ref(false);
let skuList = reactive(['S', 'M', 'L', 'XL', 'XXL']);
function handleSkuConfirm(value) {
  console.log(value)
  form.sku = value;
  showSku.value = false;
}
function handleAddClick() {
  router.push('/pay/cart')
}
function handleCheckoutClick() {
  router.push('/pay/checkout')
}
</script>

<style lang="scss" scoped>
.site-product-detail__form {
  .form-item {
    padding: .5rem;
  }
  .product-form-functions {
    margin-top: .5rem;
    padding: 1rem .5rem;
    .checkout-btn {
      background-color: #000;
      border: #000;
    }
  }
}
</style>