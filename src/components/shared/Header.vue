/* 
Author: Chidambaram
Date: 08/11/2019
Template: Header.vue
Usage: header file for the app
*/

<template>
  <section class="header-section" 
  :style="'backgroundImage:url('+require('../../assets/images/header-bg.jpg')+')'"
  >
    <h2 class="header-title">Shopping Cart</h2>
    
  </section>
</template>
<script>
export default {
  name: "Header",
  data(){
      return{
          
      }
  }
};
</script>
<style>

.header-section {

  background-size: cover;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
}

.header-section > * {
  color: white;
}

.header-section > h1 {
  font-size: 4rem;
  padding-bottom: 1rem;
}

.header-section > article > p {
  font-size: 1.5rem;
  font-weight: 200;
}

.header-section > article > a {
  padding: 1rem;
  margin-top: 0.75rem;
}
.header-title{
  text-align:center;
}
</style>