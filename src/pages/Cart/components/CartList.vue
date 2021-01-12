<template>
  <div class="site-cart-product-list">
    <van-swipe-cell v-for="item in productList" :key="item.name">
      <van-card
        class="product-list__item"
        currency="$"
        :price="item.price"
        :desc="item.sku"
        :title="item.name"
        :thumb="item.url"
      >
        <template #num>
          <van-stepper v-model="item.num" />
        </template>
      </van-card>
      <template #right>
        <van-button square text="Del" type="danger" class="cart-del-btn" @click="handleDelClick(item)" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  props: {
    productList: Array
  },
  setup(props, { emit }) {
    const { productList } = toRefs(props)
    return { productList }
  },
  methods: {
    handleDelClick(item) {
      this.$emit('handleDelProduct', item)
    },
  }
}
</script>

<style lang="scss" scoped>
.site-cart-product-list {
  .product-list__item {
    margin-bottom: .5rem;
  }
  .cart-del-btn {
    height: 100%;
  }
}

</style>