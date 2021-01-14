<template>
  <div class="site-user-address-list">
    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      default-tag-text="Default"
      add-button-text="Add Address"
      @add="handleAddClick"
      @edit="handleEditClick"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Toast } from 'vant';
let addressList = reactive([
  {
    id: '1',
    name: 'Job',
    tel: '12100000000',
    address: 'North East, Linville, Minnesota, 00000, US',
    isDefault: true,
  },
  {
    id: '2',
    name: 'Job',
    tel: '12100000000',
    address: 'North East, Lombard, Chicago, 00000, US'
  },
])
let chosenAddressId = ref('1');
function handleAddClick() {
  Toast('add');
}
function handleEditClick(item) {
  Toast('edit id: '+ item.id);
}
</script>

<style lang="scss" scoped>
.site-user-address-list {
  background-color: #f2f2f2;
}
</style>