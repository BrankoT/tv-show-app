<template>
    <div @click="showCharacter(character)"
         class="flex flex-col text-center m-4 p-6 bg-gray-100 shadow-md min-h-200 cursor-pointer hover:bg-gray-200 transition duration-200">
        <div class="flex">
            <div class="font-bold text-green-600">
                <i :class="['fa mr-2', character.gender.toLowerCase() === 'male' ?  'fa-mars' : 'fa-venus']" aria-hidden="true"></i> {{character.species}}
            </div>
        </div>
        <div class="flex justify-center flex-1">
            <div class="font-bold my-auto">
                {{character.name}}
            </div>
        </div>
        <div class="flex">
            <div class="text-xs ml-auto text-red-600 p-3 -mr-3 -mt-3 -mb-3" @click.stop="updateFavouritesList(character)">
                <i :class="['fa fa-2x', getFavourites.find(c => c.id === character.id)  ? 'fa-heart' : 'fa-heart-o']" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    export default {
        name: "CharacterItem",
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
            ...mapMutations(['setModal', 'updateFavourites']),
            ...mapActions(['fetchCharacter']),

            showCharacter(character) {
                this.setModal(true);
                this.fetchCharacter(character.id);
            },

            updateFavouritesList(character) {
                this.updateFavourites(character)
            }
        }
    }
</script>

