import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loader: false,
        error: null,
        modal: false,
        search: '',
        page: 1,
        episodes: [],
        episode: null,
        characters: [],
        character: {},
        favourites: [],
    },
    getters: {
        getLoader: state => state.loader,
        getError: state => state.error,
        getModal: state => state.modal,
        getSearch: state => state.search,
        getPage: state => state.page,
        getEpisodes: state => state.episodes,
        getEpisode: state => state.episode,
        getCharacters: state => state.characters,
        getCharacter: state => state.character,
        getFavourites: state => state.favourites,
        getSearchedEpisodes: state => state.episodes.results.filter(e => e.name.toLowerCase().includes(state.search.toLowerCase())),
        getSearchedCharacters: state => state.characters.filter(c => c.name.toLowerCase().includes(state.search.toLowerCase())),
    },
    mutations: {
        setLoader: (state, payload) => state.loader = payload,
        setModal: (state, payload) => state.modal = payload,
        setPage: (state, page) => state.page = page,
        setEpisodes: (state, episodes) => state.episodes = episodes,
        setEpisode: (state, episode) => state.episode = episode,
        setCharacters: (state, characters) => state.characters = characters,
        setCharacter: (state, character) => state.character = character,
        updateSearch: (state, payload) => state.search = payload,
        setError: (state, error) => state.error = error,
        updateFavourites: (state, character) => {
            if(state.favourites.find(c => c.id === character.id)) {
                return state.favourites = state.favourites.filter(c => c.id !== character.id)
            } else {
                return state.favourites = [...state.favourites, character]
            }
        },
    },
    actions: {
        async fetchEpisodes({commit}, page) {
            commit('setLoader', true);

            try {
                if(page !== undefined) {
                    let {data} = await axios.get(`${page}`);
                    commit('setEpisodes', data);

                    let currentPage = parseInt(page.substr(page.length - 1));
                    commit('setPage', currentPage);

                } else {
                    let {data} = await axios.get('/episode');
                    commit('setEpisodes', data);
                }
            } catch (error) {
                console.log(error);
                commit('setError', error.response.data.error);
            } finally {
                commit('setLoader', false);
            }
        },

        async fetchEpisode({commit}, episode) {
            commit('setLoader', true);
            try {
                let {data} = await axios.get(`/episode/${episode}`);
                commit('setEpisode', data);
            } catch (error) {
                commit('setError', error.response.data.error);
            } finally {
                commit('setLoader', false);
            }
        },

        async fetchCharacters({commit}, characters) {
            commit('setLoader', true);
            try {
                let {data} = await axios.get(`/character/${characters}`);
                commit('setCharacters', data);
            } catch (error) {
                commit('setError', error.response.data.error);
            } finally {
                commit('setLoader', false);
            }
        },

        async fetchCharacter({commit}, character) {
            commit('setLoader', true);
            try {
                let {data} = await axios.get(`/character/${character}`);
                commit('setCharacter', data);
            } catch (error) {
                commit('setError', error.response.data.error);
            } finally {
                commit('setLoader', false);
            }
        },
    }
})
