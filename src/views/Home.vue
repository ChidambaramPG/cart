/* 
Author: Chidambaram
Date: 08/11/2019
Template: Home.vue
Usage: container for the application views, data loaded on creation of this 
*/
<template>
  <div class="">
    <main class="wrapper">
      <Header/>
      <section class="products-section">
        <ul>
          <Product v-for="(product,index) in products" :key="index" :data="product"/>
        </ul>
      </section>
    </main>
    <Footer />
    <CheckoutModal />
  </div>
</template>

<script>
import Product from "../components/home/Product.vue";
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";
import CheckoutModal from "../components/modal/CheckoutModal.vue";

export default {
  name: "home",
  data() {
    return {
      products: []
    };
  },
  computed: {

    // adding checkout modal to the view dynamically
    addModalToView() {
      return this.$store.state.showCheckoutModal;
    }

  },
  created() {

    // fetch poducts data stored in json file
    fetch("products.json")
      .then(res => res.json())
      .then(data => {
        this.products = data;
      });
      
  },
  components: {
    Product,
    Header,
    Footer,
    CheckoutModal,
    // TestProd
  }
};
</script>
<style>

.products-section {
  padding: 2rem;
  margin-bottom:100px;
}

.products-section > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  list-style: none;
}

</style>

