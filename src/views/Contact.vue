<template>
    <div class="contact-us">

        <div class="hero is-large is-info is-fullheight">
            <Navbar />

            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-4-widescreen">
                            <form action="" class="box">
                                <b-field label="First Name">
                                    <b-input type="text"
                                        placeholder="First name"
                                        icon="account">
                                    </b-input>
                                </b-field>
                                <b-field label="Last Name">
                                    <b-input type="text"
                                        placeholder="Last name"
                                        icon="account">
                                    </b-input>
                                </b-field>
                                <b-field label="Email">
                                    <b-input type="email"
                                        placeholder="john_doe@email.com"
                                        maxlength="30"
                                        icon="email">
                                    </b-input>
                                </b-field>
                                <b-field label="Message">
                                    <b-input type="textarea"
                                        placeholder="Message"
                                        maxlength="30">
                                    </b-input>
                                </b-field>
                                <b-field>
                                    <b-button type="is-info">Send Message</b-button>
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
    name: 'contact',
    components: {
      Navbar
    }
  }
</script>

<style scoped>

    .contact-us .hero.is-large .hero-body {
        padding-top: 5rem !important;
    }

</style>