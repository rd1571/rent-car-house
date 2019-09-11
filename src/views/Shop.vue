<template>
  <div class="shop">

    <div class="hero is-large is-info">
      <Navbar />
    </div>

    <Banner />
    <ProductsView />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Banner from '@/components/ProductsBanner.vue'
  import ProductsView from '@/components/ProductsView.vue'
  
  export default {
    name: 'shop',
    components: {
      Navbar,
      Banner,
      ProductsView
    }
  }
</script>
