<template>
    <div class="products-banner">
        <div class="is-hidden-mobile ais-Stats">
            <section class="section">
                <div class="container">
                    <b-tabs position="is-right" class="block">
                        
                        <b-tab-item label="Cars" icon="car">
                            
                            <nav class="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="subtitle is-5">
                                            <strong>50&nbsp;</strong>Cars
                                        </p>
                                    </div>
                                </div>                                
                            </nav>
                            <Cars />
                        </b-tab-item>
                        <b-tab-item label="House" icon="home">
                            <nav class="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="subtitle is-5">
                                            <strong>50&nbsp;</strong>Houses
                                        </p>
                                    </div>
                                </div>                                
                            </nav>
                            <House />
                        </b-tab-item>
                    </b-tabs>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Cars from '@/views/Cars.vue'
    import House from '@/views/House.vue'

    export default {
        components: {
            Cars, House
        }
    }
</script>

<style>

</style>