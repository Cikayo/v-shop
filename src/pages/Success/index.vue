<template>
  <div class="site-pay-success">
    <h1 class="success-title">Think You!</h1>
    <van-divider />
    <div class="order-id">You order id is 6006789</div>
    <p class="order-description">
      Important Notes: We have received your order and send you a confirmation email with the order information below. Most importantly there is a unique secure URL included in this email which you can use it to track your order and manage returns. We will send you future order updates emails. If the shipping address below is not correct, you have a one-time chance to change to your preferred address. Thank you very much.
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.site-pay-success {
  padding: 1rem .5rem;
  .success-title {
    margin: 0;
    font-size: 20px;
  }
  .order-id {
    font-weight: bold;
  }
  .order-description {
    color: #666;
  }
}
</style>