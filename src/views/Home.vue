<template>
  <div class="">
    <main class="wrapper">
      <Header/>
      <section class="products-section">
        <ul>
          <TestProd v-for="(product,index) in products" :key="index" :data="product"/>
        </ul>
      </section>
    </main>
    <Footer />
    <CheckoutModal />
  </div>
</template>

<script>
// import Product from "../components/home/Product.vue";
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";
import CheckoutModal from "../components/modal/CheckoutModal.vue";
import TestProd from "../components/home/TestProd.vue";

export default {
  name: "home",
  data() {
    return {
      products: []
    };
  },
  computed: {
    addModalToView() {
      return this.$store.state.showCheckoutModal;
    }
  },
  created() {
    fetch("products.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.products = data;
      });
  },
  components: {
    // Product,
    Header,
    Footer,
    CheckoutModal,
    TestProd
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

