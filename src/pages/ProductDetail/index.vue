<template>
  <div class="site-product-detail">
    <ProductBannerSwiper />
    <div class="product-detail__info">
      <div class="product-price">$169</div>
      <div class="product-name">Sunflower Ring Bridal Sets You Are My Sunshine Daisy Inspired</div>
      <div class="product-sku">Item No.NRC0706</div>
    </div>
    <!-- 商品系列推荐 -->
    <div></div>
    <!-- 商品加购表单 -->
    <ProductForm />
    <ProductDescription />
  </div>
</template>

<script setup>
// vue-router4 中有 useRoute 和 useRouter 两个方法
import { useRoute } from "vue-router";
import ProductBannerSwiper from './components/ProductBannerSwiper.vue';
import ProductForm from './components/ProductForm.vue';
import ProductDescription from './components/ProductDescription.vue';
const route = useRoute();
let productId = route.params.id;
console.log(productId)
</script>

<style lang="scss" scoped>
.site-product-detail {
  .product-detail__info {
    padding: 0 .5rem;
    font-size: 14px;
    letter-spacing: 0.5px;
    div {
      margin-bottom: .5rem;
    }
  }
  .product-price {
    font-size: 18px;
    font-weight: bold;
  }
  .product-name, .product-sku {
    color: #333;
  }
}
</style>