<template>
  <div class="site-checkout">
    <h1 class="checkout-title">Checkout</h1>
    <van-divider />
    <van-form @submit="handleSubmit">
      <div>
        <h3 class="block-title">Usser Info</h3>
        <van-field
          v-model="form.useremail"
          name="useremail"
          label="UserEmail"
          placeholder="UserEmail"
          :rules="[{ required: true, message: 'UserEmail' }]"
        />
        <van-field
          v-model="form.firstname"
          name="username"
          label="FirstName"
          placeholder="FirstName"
          :rules="[{ required: true, message: 'FirstName' }]"
        />
        <van-field
          v-model="form.lastname"
          name="lastname"
          label="LastName"
          placeholder="LastName"
          :rules="[{ required: true, message: 'LastName' }]"
        />
      </div>
      <van-divider />
      <div>
        <h3 class="block-title">Address Info</h3>
        <van-field
          class="checkout-country-id"
          readonly
          name="countryId"
          v-model="form.countryId"
          type="hidden"
        />
        <van-field
          readonly
          clickable
          name="country"
          v-model="form.country"
          label="Country"
          placeholder="Country"
          @click="showPicker = true"
          :rules="[{ required: true, message: 'Country' }]"
        />
        <van-popup :show="showPicker" position="bottom">
          <van-picker
            show-toolbar
            cancel-button-text="Cancel"
            confirm-button-text="Confirm"
            value-key="name"
            :columns="countryList"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          v-model="form.streetAddress"
          name="streetAddress"
          label="Street Address"
          placeholder="Street Address"
          :rules="[{ required: true, message: 'Street Address' }]"
        />
        <van-field
          v-model="form.buildingName"
          name="buildingName"
          label="Building Name"
          placeholder="Building Name"
          :rules="[{ required: true, message: 'Building Name' }]"
        />
        <van-field
          v-model="form.city"
          name="city"
          label="City"
          placeholder="City"
          :rules="[{ required: true, message: 'City' }]"
        />
        <van-field
          v-model="form.state"
          name="state"
          label="State"
          placeholder="State"
          :rules="[{ required: true, message: 'State' }]"
        />
        <van-field
          v-model="form.zipCode"
          name="zipCode"
          label="Zip Code"
          placeholder="Zip Code"
          :rules="[{ required: true, message: 'Zip Code' }]"
        />
      </div>
      <van-divider />
      <div>
        <h3 class="block-title">Payment</h3>
        <van-field
          v-model="form.cardNum"
          name="cardNum"
          label="Card Number"
          placeholder="Card Number"
          :rules="[{ required: true, message: 'Card Number' }]"
        />
        <van-field
          v-model="form.cardPas"
          name="cardPas"
          label="Card Password"
          placeholder="Card Password"
          :rules="[{ required: true, message: 'Card Password' }]"
        />
      </div>
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit" class="checkout-submit-btn">Submit</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';
const router = useRouter();

const form = reactive({
  useremail: '',
  firstname: '',
  lastname: '',
  countryId: '',
  country: '',
  streetAddress: '',
  buildingName: '',
  city: '',
  state: '',
  zipCode: '',
  cardNum: '',

})
let showPicker = ref(false);
let countryList = reactive([
  {
    id: 'hk',
    name: 'Hong Kong'
  },
  {
    id: 'us',
    name: 'United States'
  },
  {
    id: 'fr',
    name: 'France'
  }
])

function onConfirm(value) {
  form.countryId = value.id;
  form.country = value.name;
  showPicker.value = false;
}

function handleSubmit(values) {
  Toast.loading({
    message: 'Loading...',
    forbidClick: true,
  });
  setTimeout(() => {
    Toast.loading({
      type: 'success',
      message: 'success'
    });
    setTimeout(() => {
      router.push('/pay/success')
    }, 1000);
  }, 1000);
}
</script>

<style lang="scss" scoped>
.site-checkout {
  padding-top: 1rem;
  .checkout-title {
    margin: 0;
    padding: 0 .5rem;
    font-size: 24px;
  }
  .block-title {
    margin: 0;
    padding: 0 .5rem;
    color: #444;
    font-size: 18px;
  }
  .checkout-country-id {
    display: none;
  }
  .checkout-submit-btn {
    background-color: #000;
    border-color: #000;
  }
}
</style>