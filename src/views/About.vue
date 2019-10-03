<template>
  <div class="about-us">

    <div class="hero is-large is-info">
      <Navbar />
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'about',
    components: {
      Navbar
    }
  }
</script>