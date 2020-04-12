<template>
    <div>
        <h1 class="text-4xl font-bold text-center my-10 mx-4">Welcome to Rick and Morty</h1>
        <div class="mx-4">
            <input type="text"
                   class="appearance-none w-full bg-gray-100 text-gray-700 shadow-md rounded py-2 px-4 mb-3 focus:outline-none focus:bg-gray-200"
                   placeholder="Search..."
                   v-model="search">
        </div>
        <EpisodesList/>
    </div>
</template>

<script>
    import EpisodesList from '@/components/EpisodesList'
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: 'Home',
        components: {
            EpisodesList,
        },
        computed: {
            ...mapGetters(['getSearch']),

            search: {
                get() {
                    return this.getSearch;
                },
                set(value) {
                    this.updateSearch(value)
                }
            }
        },
        methods: {
            ...mapMutations(['updateSearch']),
        }
    }
</script>
