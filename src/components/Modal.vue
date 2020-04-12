<template>
    <div class="modal__wrapper fixed inset-0 z-50 transition-opacity ease-linear" @click="$emit('close')">
        <div class="modal p-4 m-auto absolute top-half-screen left-half-screen transition ease-linear" @click.stop>

            <div v-if="character.name">
                <h3 class="flex justify-between items-center text-xl font-bold text-green-600" @click="updateFavouritesList(character)">
                    {{character.name}}
                    <i :class="['fa text-red-600', getFavourites.find(c => c.id === character.id)  ? 'fa-heart' : 'fa-heart-o']" aria-hidden="true"></i>
                </h3>
            </div>

            <div>
                <div v-if="character.type" :class="[character.type === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Type</span>: {{character.type}}
                </div>
                <div v-if="character.gender" :class="[character.gender === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Gender</span>: {{character.gender}}
                </div>
                <div v-if="character.species" :class="[character.species === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Species</span>: {{character.species}}
                </div>
                <div v-if="character.status" :class="[character.status === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Status</span>: {{character.status}}
                </div>
                <div v-if="character.origin.name" :class="[character.origin.name === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Origin</span>: {{character.origin.name}}
                </div>
                <div v-if="character.location.name" :class="[character.location.name === 'unknown' ? 'capitalize' : '']">
                    <span class="font-bold">Location</span>: {{character.location.name}}
                </div>
                <img :src="character.image" alt="Character" class="mx-auto">
            </div>

            <div class="text-center mt-4 ">
                <button  @click="$emit('close')"
                         class="w-24 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none bg-green-600 hover:bg-green-700"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: 'Modal',
        props: {
            character: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapGetters(['getFavourites']),
        },
        methods: {
            ...mapMutations(['updateFavourites']),

            updateFavouritesList(character) {
                this.updateFavourites(character)
            }
        }
    }
</script>

<style lang="scss">
    .modal__wrapper {
        background-color: rgba(0, 0, 0, .3);
    }

    .modal {
        max-width: 500px;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }

    @media screen and (max-width: 575px) {
        .modal {
            width: 270px;
        }
    }

</style>
