<template>
  <div class="login">

    <div class="hero is-large is-info is-fullheight">
        <Navbar />

        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form class="box" @submit.prevent="onLogin">

                            <b-field label="Email"
                                :type="{'is-danger': errors.has('email')}"
                                :message="errors.first('email')">
                                <b-input v-model="email" name="email" v-validate="'required'" icon="email"/>
                            </b-field>

                            <b-field label="Password"
                                :type="{'is-danger': errors.has('password')}"
                                :message="errors.first('password')">
                                <b-input 
                                    type="password" 
                                    v-model="password" 
                                    name="password" 
                                    v-validate="'required|min:6'"
                                    icon="key"
                                    password-reveal/>
                            </b-field>

                            <button type="submit" class="button is-primary"> Login </button>
                        </form>

                        <div class="box">
                            <div class="columns is-centered">
                                <div class="column has-text-centered">
                                    Create an account? <router-link :to="{name: 'signup'}">Sign up</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                
            </div>
        </div>

        
        
    </div>
    
  </div>
</template>

<script>
    import Vue from 'vue'
    import Navbar from '@/components/Navbar.vue'
    import VeeValidate from 'vee-validate'
    import firebase from 'firebase'

    Vue.use(VeeValidate);
  
    export default {
        name: 'login',
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
            onLogin() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$buefy.toast.open({
                            message: 'Form is valid!',
                            type: 'is-success',
                            position: 'is-top'
                        });

                        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(user => {
                            this.$buefy.dialog.alert({
                                title: 'Success',
                                message: 'You have successfully logged In',
                                type: 'is-success',
                                hasIcon: true,
                                icon: 'check-circle',
                                iconPack: 'fa'
                            });
                            this.$router.go({
                                path: this.$router.path
                            });
                        });

                        return;
                    }
                    this.$buefy.toast.open({
                        message: 'Form is not valid! Please check the fields.',
                        type: 'is-danger',
                        position: 'is-top'
                    })
                });
            }
        }
    }
</script>

<style scoped>

    .hero.is-large .hero-body {
        padding-top: 5rem !important;
    }

</style>