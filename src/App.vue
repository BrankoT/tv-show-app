<template>
    <div id="app">
        <nav class="flex items-center justify-between flex-wrap bg-green-600 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <router-link to="/">
                    <span class="font-semibold text-xl tracking-tight">Rick and Morty</span>
                </router-link>
            </div>
            <div class="block md:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-200 hover:text-white hover:border-white focus:outline-none transition duration-200"
                        @click="toggleMenu"
                >
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div :class="['w-full flex-grow md:flex md:items-center md:w-auto', isMenuOpen ? 'block' : 'hidden']">
                <div class="ml-auto">
                    <router-link to="/">
                        <span class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-200">Episodes</span>
                    </router-link>

                    <router-link to="/favourites">
                        <span class="block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4 transition duration-200">Favourites</span>
                    </router-link>
                </div>
            </div>
        </nav>
        <div class="container mx-auto my-10">
            <router-view/>
            <Modal v-if="getModal && Object.keys(getCharacter).length !== 0" :character="getCharacter" @close="closeModal"/>
        </div>
    </div>
</template>

<script>
    import Modal from '@/components/Modal'
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: 'App',
        components: {
            Modal,
        },
        data: () => ({
            isMenuOpen: false
        }),
        computed: {
            ...mapGetters(['getModal', 'getCharacter'])
        },
        methods: {
            ...mapMutations(['setModal', 'setCharacter', 'updateSearch']),
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },

            closeModal() {
                this.setModal(false);
                this.setCharacter({});
            },
        },
        watch: {
            $route(){
                this.updateSearch('')
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
