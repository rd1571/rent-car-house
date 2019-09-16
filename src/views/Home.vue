<template>
  <div class="home">
    <section class="hero-container">
      <div class="hero is-fullheight is-info">
        <Navbar />
        <NavContent />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import NavContent from '@/components/NavContent.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    NavContent
  }
}
</script>

<style scoped>
  .hero-body {
      margin-top: -5rem !important;
  }
</style>