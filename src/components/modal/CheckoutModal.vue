<template>
  <div id="myModal" class="modal footer" :style="showModal">
    <div class="modal-content">
      <span class="close" @click="handleModalClose">&times;</span>
      <div class="modal-cart-details modal-cart-header">
        <h3>Your Cart Items</h3>
      </div>
      <div class="modal-cart-details items-details" v-for="(item,index) in cartItems" :key="index">
        <h5>{{index+1}}. {{item.poductName}} : {{item.qtyAdded}} x {{offerPrice(item.mrp,item.offerPercent)}} = {{(item.totalPrice).toFixed(2)}}</h5>
        
      </div>
      <div class="modal-cart-details">
        <h5>Total Items: {{cartItems.length}}</h5>
        <h5>Total Price: {{cartItemsTotal}}</h5>
      </div>
      <div class="modal-checkout" >
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
      return total.toFixed(2);
    }
  },
  methods: {
    handleModalClose() {
      this.$store.commit("setCheckoutModalStatus", false);
    },
    offerPrice(mrp,offerPercent){
      return (
        mrp - mrp * (offerPercent / 100)
      );
    }
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
.footer {
  grid-template-columns: repeat(12, 1fr);
}
.modal-cart-details {
  grid-column: span 8;
  text-align:right;
}
.modal-checkout {
  grid-column: span 4;
  background-color: #30ca63;
  color:white;
  text-align:center;
  padding:20px;
}
.modal-cart-header{
  height:50px;
  background-color:#30ca63;
  color:white;
  padding:20px;
  text-align:center;
}
.modal-cart-details.items-details{
  border: #888 ;
  text-align:left;
}
.close{
  color:rgb(255, 255, 255);
  padding:20px;
}
</style>