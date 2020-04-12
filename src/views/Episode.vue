<template>
    <div>
        <template v-if="getEpisode && getEpisode !== null">
            <h1 class="text-4xl font-bold text-center my-10 mx-4">{{getEpisode.name}}</h1>
            <div class="mx-4">
                <input type="text"
                       class="appearance-none w-full bg-gray-100 text-gray-700 shadow-md rounded py-2 px-4 mb-3 focus:outline-none focus:bg-gray-200"
                       placeholder="Search..."
                       v-model="search">
            </div>
            <CharacterList :characters="getSearchedCharacters"/>
        </template>
        <template v-else>
            <div class="text-center">
                <h1 class="text-4xl font-bold text-center my-10 mx-4">
                    {{getError}}
                </h1>
            </div>
        </template>

        <Loader/>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import CharacterList from '@/components/CharacterList'
    import Loader from "../components/Loader";

    export default {
        name: 'Episode',
        components: {
            Loader,
            CharacterList
        },
        async created() {
            await this.fetchEpisode(this.$route.params.id);
            if(this.getEpisode !== null) {
                await this.fetchCharacters(this.characterIds);
            }
        },
        computed: {
            ...mapGetters(['getEpisode', 'getCharacters', 'getSearch', 'getError', 'getSearchedCharacters']),

            characterIds() {
                let urlToRemove = 'https://rickandmortyapi.com/api/character/';
                return this.getEpisode.characters.map(c => parseInt(c.replace(urlToRemove, '')))
            },

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
            ...mapActions(['fetchEpisode', 'fetchCharacters']),
            ...mapMutations(['updateSearch']),
        }
    }
</script>
