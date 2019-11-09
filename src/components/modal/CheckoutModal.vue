<template>
  <div id="myModal" class="modal footer" :style="showModal">
    <div class="modal-content">
      <span class="close" @click="handleModalClose">&times;</span>
      <div class="modal-cart-details">
        <h3>Total Items: {{cartItems.length}}</h3>
        <h3>Total Price: {{cartItemsTotal}}</h3>
      </div>
      <div class="modal-checkout">
            <p>Transaction success</p>
        </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckoutModal",
  computed: {
    showModal() {
      if (this.$store.state.showCheckoutModal) {
        return "display:block";
      } else {
        return "display:none";
      }
    },
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
    handleModalClose() {
      this.$store.commit("setCheckoutModalStatus", false);
    },
    
  }
};
</script>
<style>
.modal {
  display: none; 
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
}


.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.footer{
   
    grid-template-columns: repeat(12, 1fr);
    
}
.modal-cart-details{
    grid-column: span 8;
}
.modal-checkout{
    grid-column: span 4;
    background-color:#f4f4f4;
}
</style>