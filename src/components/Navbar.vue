<template>
    <div class="hero-head">
        <!-- <nav class="is-fixed-top">
            <div class="container is-small">
                <div class="navbar-brand">
                    <a class="navbar-item" href="javascript::void(0)">
                        <img src="/logos/ftw/ftw_mark_white.png" alt="FTW logo"> 
                        <span class="is-size-7 has-text-weight-light"></span> 
                        <b-img src="./src/assets/Real_State.png" :width="80" alt="Fluid image"></b-img> 
                        <img src="../assets/Real_State.png" />
                    </a>
                    <div role="button" tabindex="0" class="navbar-burger burger">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="#">Home</a>
                        <a class="navbar-item" href="#">Shop</a>
                        <a class="navbar-item" href="#">
                            <span class="button is-white is-outlined">For Rent</span>
                        </a>
                        <a class="navbar-item ">Sign in</a>
                    </div>
                </div>
            </div>
        </nav> -->
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

                <div id="navbarBasicExample" class="navbar-menu">
                    <!-- <div class="navbar-start"> 
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            More
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                            </div>
                        </div>
                    </div> -->

                    <div class="navbar-end">
                        <div class="navbar-end">
                            <router-link class="navbar-item" to="/">Home</router-link>
                            <router-link class="navbar-item" to="/shop">Stores</router-link>
                            <router-link class="navbar-item" to="/rent">
                                <span class="button is-white is-outlined">For Rent</span>
                            </router-link>
                            <router-link class="navbar-item" to="/login">Log in</router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

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