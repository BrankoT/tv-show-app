<template>
    <div v-if="getLoader" class="loader__wrapper fixed inset-0 z-50 transition-opacity ease-linear">
        <div class="loader absolute top-half-screen left-half-screen">
            <div class="loader__animation rounded-full w-24 h-24 border-12"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Loader",
        computed: {
            ...mapGetters(['getLoader'])
        }
    }
</script>

<style scoped>
    .loader__wrapper {
        background-color: rgba(0, 0, 0, .6);
    }

    .loader {
        transform: translate(-50%, -50%);
    }

    .loader__animation {
        border-top: 12px solid #38a169;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
