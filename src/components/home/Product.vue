/* 
Author: Chidambaram
Date: 08/11/2019
Template: Product.vue
Usage: product card
*/
<template>
  <li>
    <figure>
      <img
        :src="require('../../assets/images/products/'+processData.imageName)"
        :alt="processData.imageName"
      />
      <figcaption>
        <h3>{{processData.poductName}}</h3>
      </figcaption>
    </figure>
    <h3 class="brand-name">
      {{processData.brandName}}
      <span style="color:red">{{processData.offerText}}</span>
    </h3>
    <div class="item-details">
      <span>Available {{processData.qty}}</span>
      <br />
      <span>MRP ${{processData.mrp}}</span>
      <br />
      <span>OFFER PRICE: ${{calculateDiscountedPrice()}}</span>
      <br />
    </div>
    <div class="item-count-contols" >
      <a class="qty-button" @click.prevent="decrQty">-</a>
      {{qty}}
      <a class="qty-button" @click.prevent="incrQty">+</a>
    </div>

    <div class="item-count-contols">
      <a
        v-if="isAdded == false"
        class="add-to-cart"
        href="#"
        @click.prevent="handleAddCart"
      >Add To Cart</a>
      <a v-else href="#" class="remove-from-cart" @click.prevent="handleItemRemove">Remove</a>
    </div>
  </li>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      qty: 0,
      isAdded: false
    };
  },
  computed: {

    processData() {
      return this.data;
    }

  },
  props: ["data"],
  methods: {

    // calculating discounted price using discount percentage and MRP
    calculateDiscountedPrice() {
      return (
        this.processData.mrp -
        this.processData.mrp * (this.processData.offerPercent / 100)
      );
    },

    // calculating totl pice of all the items in the cart
    calculateItemTotalPrice() {
      return (
        (this.processData.mrp -
          this.processData.mrp * (this.processData.offerPercent / 100)) *
          this.qty
      );
    },

    // increase the quantity of item
    incrQty() {
      if (this.qty < this.processData.qty) {
        this.qty++;
      }
    },

    // decrease the quantity of item
    decrQty() {
      if (this.qty > 0) {
        this.qty--;
      }
    },

    // add item to the cat if quantity is more than 0
    handleAddCart() {
      if (this.qty > 0) {
        this.$store.commit("addToCart", {
          ...this.processData,
          qtyAdded: this.qty,
          totalPrice: this.calculateItemTotalPrice()
        });
        this.isAdded = true;
      } else {
        alert("Please specify the quantity");
      }
    },

    // remove item from cart
    handleItemRemove() {
      this.$store.commit("removeItem", this.processData);
      this.isAdded = false;
      this.qty = 0;
    }
  }
};
</script>
<style>
.item-count-contols{
  text-align:center;
}
.item-details{
  text-align:center
}
.brand-name{
  padding-left:10px;
  text-align:center;
}
a {
  background-color: rgb(219, 87, 87);
  text-decoration: none;
  color: white;
  /* border-radius: 0.25rem; */
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
}

a:hover {
  opacity: 0.6;
}

a.add-to-cart {
  background-color: rgb(31, 168, 99);
  padding:7px;
  width:32%;
  margin-bottom:10px;
}
a.remove-from-cart{
    background-color: rgb(233, 140, 35);
    padding:7px;
    width:32%;
    margin-bottom:10px;
}
li {
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
}
li > figure {
  max-height: 220px;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}

li > figure > img {
  width: 100%;
}

li > figure > figcaption {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

li > figure > figcaption > h3 {
  color: white;
  padding: 0.75rem;
  font-size: 1.25rem;
}

li > p {
  font-size: 1rem;
  line-height: 1.5;
  padding: 1rem 0.75rem;
  color: #666666;
}

li > a {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}
.qty-button {
  width: 10%;
  padding:7px;
  margin:10px;
}
</style>