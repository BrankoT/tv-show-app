<template>
    <div>
        <template v-if="getLoader">
            <Loader/>
        </template>
        <template v-else>
            <template v-if="getSearchedEpisodes && getSearchedEpisodes.length > 0">
                <div v-for="episode in getSearchedEpisodes"
                     :key="episode.id"
                     class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w1/5 inline-block float-left"
                >
                    <EpisodeItem :episode="episode"/>
                </div>
                <div class="text-center pt-4 clear-both">
                    <button :class="['w-24 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none', getEpisodes.info.prev.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed']"
                            @click="getEpisodes.info.prev.length > 0 && changePage(getEpisodes.info.prev)"
                    >
                        Previous
                    </button>

                    <span class="mx-6">{{getPage}}</span>

                    <button :class="['w-24 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none', getEpisodes.info.next.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed']"
                            @click="getEpisodes.info.next.length > 0 && changePage(getEpisodes.info.next)"
                    >
                        Next
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="text-center mx-4">
                    Sorry, there are no episodes
                </div>
            </template>
        </template>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import EpisodeItem from './EpisodeItem'
    import Loader from './Loader'

    export default {
        name: 'Episodes',
        components: {
            EpisodeItem,
            Loader
        },
        async created() {
            if(this.getPage > 1) {
                let page = `https://rickandmortyapi.com/api/episode?page=${this.getPage}`;
                await this.fetchEpisodes(page);
            } else {
                await this.fetchEpisodes()
            }
        },
        computed: {
            ...mapGetters(['getEpisodes', 'getPage', 'getSearchedEpisodes', 'getLoader', 'getError', 'getPage']),
        },
        methods: {
            ...mapActions(['fetchEpisodes']),

            changePage(page) {
                this.fetchEpisodes(page);
            }
        }
    }
</script>
