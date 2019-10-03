<template>
    <div class="hero-head">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/">
                        <img src="../assets/Real_State.png">
                    </router-link>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-site" class="navbar-menu">
                    <div class="navbar-end">
                        <router-link v-if="!isLoggedIn" class="navbar-item" :to="{ name: 'shop' }">Store</router-link>
                        <router-link v-if="!isLoggedIn" class="navbar-item" :to="{ name: 'about' }">About Us</router-link>
                        <router-link v-if="!isLoggedIn" class="navbar-item" :to="{ name: 'contact' }">
                            <span class="button is-white is-outlined">Contact Us</span>
                        </router-link>
                        <router-link v-if="!isLoggedIn" class="navbar-item" :to="{ name: 'login' }">Log in</router-link>
                        <a v-if="isLoggedIn" v-on:click="onLogout" class="navbar-item"> Logout </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'navbar',
        data() {
            return {
                isLoggedIn: false,
                currentUser: false
            }
        },
        created() {
            if (firebase.auth().currentUser) {
                this.isLoggedIn = true;
                this.currentUser = firebase.auth().currentUser.email;
            }
        },
        methods: {
            onLogout() {
                firebase.auth().signOut.then(() => {
                    this.$router.go({
                        path: this.$router.path
                    });
                });
            }
        }
    }
</script>

<style>

.navbar {
    min-height: 5rem !important;
}

.navbar-item img {
    min-height: 3rem !important;
}

p.control.is-expanded > input,
p.control a {
    height: 3.25em;
}

.hero.is-danger .navbar-item, .hero.is-danger .navbar-link {
    color: #ffffff;
}
</style>