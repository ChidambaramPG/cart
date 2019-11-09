<template>
  <div class="card">
    <div class="row">
      <div class="img-column">
        <img
          class="prod-image"
          :src="require('../../assets/images/products/'+processData.imageName)"
        />
        <p class="prod product-name">{{processData.poductName}}</p>
      </div>
      <div class="details-column">
        <div class="inner-row first-row">
          <div class="inner-column">
            <p class="prod product-brand">{{processData.brandName}} </p>
          </div>
          <div class="inner-column">
            <p class="prod product-offer">{{processData.offerText}}</p>
          </div>
        </div>
        <div class="inner-row">
          <div class="inner-column">
            <p class="prod product-qty">
              {{processData.qty}}
              <span style="color:green">Available</span>
            </p>
          </div>
          <div class="inner-column">
            <p class="prod product-mrp">MRP ${{processData.mrp}}</p>
          </div>
        </div>
        <div class="inner-row">
          <div class="inner-column">
            <p class="prod product-price">
              Offer Price
              <span
                style="padding:2px;background-color:red;color:white"
              >${{calculateDiscountedPrice()}}</span>
            </p>
          </div>
          <div class="inner-column">
            <p class="prod product-price">
              Item Total
              <span
                style="padding:2px;background-color:red;color:white"
              >${{calculateItemTotalPrice()}}</span>
            </p>
          </div>
        </div>
        <div class="inner-row">
          <div class="inner-column">
            <button class="change-btn reduce-btn" @click="decrQty">-</button>
            <span class="qty-num">{{qty}}</span>
            <button class="change-btn incr-btn" @click="incrQty">+</button>
          </div>
          <div class="inner-column">
            <button v-if="isAdded == false" class="add-to-cart" @click="handleAddCart">Add To Cart</button>
            <button v-else class="added-to-cart" @click="handleItemRemove">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <hr class="product-divider" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      qty: 0,
      isAdded:false
    };
  },
  computed: {
    processData() {
      return this.data;
    }
  },
  props: ["data"],
  methods: {
    calculateDiscountedPrice() {
      return (
        this.processData.mrp -
        this.processData.mrp * (this.processData.offerPercent / 100)
      );
    },
    calculateItemTotalPrice() {
      return Math.floor(
        (this.processData.mrp -
          this.processData.mrp * (this.processData.offerPercent / 100)) *
        this.qty
      );
    },
    incrQty() {
      if (this.qty < this.processData.qty) {
        this.qty++;
      }
    },
    decrQty() {
      if (this.qty > 0) {
        this.qty--;
      }
    },
    handleAddCart(){
        if(this.qty > 0){
            this.$store.commit("addToCart",{...this.processData,"qtyAdded":this.qty,"totalPrice":this.calculateItemTotalPrice()})
            this.isAdded = true;
        }else{
            alert("Please specify the quantity")
        }
    },
    handleItemRemove(){
        this.$store.commit("removeItem",this.processData);
        this.isAdded = false;
        this.qty = 0;
    }
  }
};
</script>
<style>

.row {
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.details-column {
  padding-left: 10px;
  grid-column: span 8;
  margin-top: 0px;
  background-color:#f5f5f5;
}
.img-column {
  grid-column: span 4;
}
.prod-image {
  width: 100%;
}
p.prod {
  margin-top: 1px;
  margin-bottom: 1px;
}
.product-offer {
  color: crimson;
}
.product-brand {
  color: forestgreen;
  font-size: 24px;
  font-weight: bold;
}
.product-name {
  color: #fff;
  text-align: center;
  background-color: #2c2c2c;
  padding:10px 0px 10px 0px;
}

.inner-row {
  margin: 30px 10px 30px 10px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.inner-column {
  grid-column: span 4;
  margin-top: 0px;
}
.first-row{
  background-color: rgb(241, 244, 245);
  margin:0px;
  padding:10px;
}
.change-btn {
  background-color: rgb(56, 122, 197); 
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
}
hr.product-divider {
  border-top: 1px solid rgb(48, 47, 47);
}
.add-to-cart {
  background-color: #4caf50; 
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
}
.added-to-cart{
    background-color: #e74956; 
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 12px;
}
.qty-num {
  margin-left: 10px;
  margin-right: 10px;
}
</style>