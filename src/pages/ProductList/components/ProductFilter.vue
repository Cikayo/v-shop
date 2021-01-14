<template>
  <div class="site-product-filter">
    <van-sticky>
      <van-dropdown-menu active-color="#FF5722">
        <van-dropdown-item title="Sort By" v-model="sortVal" :options="sortOption" @change="handleSortChange" />
        <van-dropdown-item title="Filter" v-model="filterVal" :options="filterOption" @change="handleFilterChange" />
      </van-dropdown-menu>
    </van-sticky>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Toast } from 'vant';
import { pageScrollTop } from '@/utils/common.js';
let sortVal = ref('default');
let filterVal = ref('all');
let sortOption = reactive([
  { text: 'Default', value: 'default' },
  { text: 'New', value: 'new' },
]);
let filterOption = reactive([
  { text: 'All', value: 'all' },
  { text: 'Rings', value: 'rings' },
  { text: 'Necklaces', value: 'necklaces' },
  { text: 'Others', value: 'others' },
]);
// change functions
function handleSortChange(val) {
  console.log(val)
  Toast.loading({
    message: 'Loading...',
    forbidClick: true,
    duration: 1000
  });
  pageScrollTop();
}
function handleFilterChange(val) {
  Toast.loading({
    message: 'Loading...',
    forbidClick: true,
    duration: 1000
  });
  pageScrollTop();
}
</script>

<style lang="scss" scoped>
.site-product-filter {
  line-height: 36px;
  text-align: center;
  font-weight: bold;
  margin-bottom: .5rem;
  background-color: #f2f2f2;
}
</style>