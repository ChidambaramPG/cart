<template>
  <div class="footer">
        <div class="cart-details">
            <h3>Total Items: <span>{{cartItems.length}}</span></h3>
            <h3>Total Price: <span>${{cartItemsTotal}}</span></h3>
        </div>
        <div class="checkout">
            <button class="checkout-btn" @click="handleCheckout">Checkout</button>
        </div>
        
  </div>
  
</template>
<script>
export default {
  name: "Footer",
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    cartItemsTotal() {
      let items = this.$store.state.cart;
      let total = 0;
      items.forEach(item => {
        total += item.totalPrice;
      });
      return total;
    }
  },
  methods: {
    handleCheckout() {
      if (this.$store.state.cart.length > 0) {
        this.$store.commit("setCheckoutModalStatus", true);
      } else {
        alert("Cart is empty");
      }
    }
  },
  components: {}
};
</script>
<style>
.footer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100px;
  background-color: #f4f4f4;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 20px;
  padding: 10px;
}
.cart-details {
  grid-column: span 11;
}
.checkout {
  grid-column: span 1;
  display:block;
}
.checkout-btn {
  background-color: #4caf50; 
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  margin-top: 20px;
}
</style>