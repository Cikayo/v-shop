<template>
  <div class="site-product-list">
    <ProductFilter />
    <van-row class="site-product-list__content">
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
// 商品列表页
import ProductFilter from './components/ProductFilter.vue';
let productList = [
  {
    url: 'https://img1.jeulia.com/data/product/JEMO0021/1/500x500/G1-GEdiamond_M1-14Kwhitegold.jpg',
    name: 'Princess Cut',
    price: 99
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/c/d/cdr0262016101404-20180728.jpg',
    name: 'Princess Cut',
    price: 109
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/n/r/nrc0455-3-20180728.jpg',
    name: 'Princess Cut',
    price: 129
  },
  {
    url: 'https://img1.jeulia.com/data/product/JEMO0010/1/500x500/G1-GEdiamond_G2-GEdiamond_M1-14Kwhitegold.jpg',
    name: 'Princess Cut',
    price: 89
  },
  {
    url: 'https://img1.jeulia.com/data/product/JEMO0002/1/500x500/G1-GEdiamond_G2-GEdiamond_G3-GEdiamond_M1-14Krosegold.jpg',
    name: 'Princess Cut',
    price: 149
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/n/r/nrc0706-06-20200731.jpg',
    name: 'Princess Cut',
    price: 159
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/n/r/nrc0679-3-20191107.jpg',
    name: 'Princess Cut',
    price: 199
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/N/R/NRC0624-1-1112.jpg',
    name: 'Princess Cut',
    price: 199
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/n/r/nrc0724-3-20200811.jpg',
    name: 'Princess Cut',
    price: 219
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/n/r/nrc0745-02-20200810.jpg',
    name: 'Princess Cut',
    price: 209
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/c/d/cdr092-1-0617-20180728.jpg',
    name: 'Princess Cut',
    price: 239
  },
  {
    url: 'https://media.vancaro.com/product/smallimage/N/R/NRC0540-3-20180728.jpg',
    name: 'Princess Cut',
    price: 249
  },
]
</script>

<style lang="scss" scoped>
.site-product-list__content {
  img {
    width: 100%;
  }
  .product-info {
    font-weight: bold;
    text-align: center;
    color: #000;
  }
  .product-info__name {
    font-size: 14px;
    margin-bottom: 5px;
  }
}
</style>