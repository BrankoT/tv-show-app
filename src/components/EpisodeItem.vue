<template>
    <router-link :to="`/episode/${episode.id}`">
        <div class="flex flex-col text-center m-4 p-6 bg-gray-100 shadow-md min-h-200 hover:bg-gray-200 transition duration-200">
            <div class="flex">
                <div class="font-bold text-green-600">
                    {{episode.episode}}
                </div>
            </div>
            <div class="flex justify-center flex-1">
                <div class="font-bold my-auto">
                    {{episode.name}}
                </div>
            </div>
            <div class="flex">
                <div class="text-xs ml-auto">
                    {{episode.air_date}}
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "Episode",
        props: {
            episode: {
                type: Object,
                required: true
            }
        }
    }
</script>
