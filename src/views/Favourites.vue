<template>
    <div>
        <h1 class="text-4xl font-bold text-center my-10 mx-4">Favourite characters</h1>
        <CharacterList :characters="getFavourites"/>
    </div>
</template>

<script>
    import CharacterList from '@/components/CharacterList'
    import { mapGetters } from 'vuex'

    export default {
        name: "Favourites",
        components: {
            CharacterList
        },
        computed: {
            ...mapGetters(['getFavourites']),
        }
    }
</script>

<style scoped>

</style>
