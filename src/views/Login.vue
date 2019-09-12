<template>
  <div class="login">

    <div class="hero is-large is-info is-fullheight">
        <Navbar />

        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action="" class="box">
                            <b-field label="Email">
                                <b-input type="email"
                                    placeholder="john_doe@email.com"
                                    maxlength="30"
                                    icon="email">
                                </b-input>
                            </b-field>
                            <b-field>
                                <b-input type="password"
                                    placeholder="Password"
                                    password-reveal>
                                </b-input>
                            </b-field>

                        
                            <b-field>
                                <label for="" class="checkbox">
                                    <input type="checkbox">
                                Remember me
                                </label>
                            </b-field>
                            <b-field>
                                <b-button type="is-info">Submit</b-button>
                            </b-field>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'login',
    components: {
      Navbar
    },

    data() {
        return {
            name: 'Ram Alcantara'
        }
    }
  }
</script>

<style scoped>

    .hero.is-large .hero-body {
        padding-top: 5rem !important;
    }

</style>