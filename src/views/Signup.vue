<template>
  <div class="register">

    <div class="hero is-large is-info is-fullheight">
        <Navbar />

        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form class="box">
                            <b-field label="Email">
                                <b-input type="email"
                                    placeholder="john_doe@email.com"
                                    maxlength="30"
                                    v-model="email"
                                    icon="email">
                                </b-input>
                            </b-field>
                            <b-field>
                                <b-input type="password"
                                    placeholder="Password"
                                    v-model="password"
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
                                <b-button v-on:click="onSignup" type="is-info">Sign up</b-button>
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
    import firebase from 'firebase'

  
    export default {
        name: 'signup',
        components: {
        Navbar
        },

        data() {
            return {
                name: 'Ram Alcantara',
                email: '',
                password: ''
            }
        },

        methods: {
            onSignup() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function( user ) {
                        alert(`You are now connected!${user.user.email}`);
                    },
                    function (error) {
                        alert('Oops.' + error.message);
                    }
                );

            },
        }
    }
</script>

<style scoped>

    .hero.is-large .hero-body {
        padding-top: 5rem !important;
    }

</style>