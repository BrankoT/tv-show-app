<template>
    <div class="overflow-hidden">
        <template v-if="characters && characters.length > 0">
            <div v-for="character in characters"
                 :key="character.id"
                 class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w1/5 inline-block float-left"
            >
                <CharacterItem :character="character"/>
            </div>
        </template>
        <template v-else>
            <div class="text-center mx-4">
                Sorry, there are no characters
            </div>
        </template>
    </div>
</template>

<script>
    import CharacterItem from "./CharacterItem";

    export default {
        name: "CharacterList",
        components: {
            CharacterItem
        },
        props: {
            characters: {
                type: Array,
            }
        }
    }
</script>
