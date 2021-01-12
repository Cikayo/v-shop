<template>
  <div class="site-pay-success">
    <h1 class="success-title">Think You!</h1>
    <van-divider />
    <div class="order-id">You order id is {{orderId}}</div>
    <div class="order-description">
      <p>
        Important Notes: We have received your order and send you a confirmation email with the order information below.
      </p>
      <p>
        Most importantly there is a unique secure URL included in this email which you can use it to track your order and manage returns.
      </p>
      <p>
        We will send you future order updates emails.
      </p>
      <p>
        Thank you very much.
      </p>
    </div>
  </div>
</template>

<script setup>
let orderId = Date.now().toString().slice(1,8)
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