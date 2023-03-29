<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    },
    methods: {
        // Add Flags
        flag(e) {
            if (e === "en") {
                return '../public/img/en.png'
            } else if (e === "it") {
                return '../public/img/ita.jpg'
            } else if (e === "es") {
                return '../public/img/es.webp'
            } else {
                return
            }

        }
    }
}
</script>

<template>
    <ul>
        <li v-for="movie in store.moviesSeries">{{ movie.title }}
            <div>{{ movie.original_language }}
                <img :src=flag(movie.original_language)>
            </div>
            <span>{{ movie.vote_average }}</span>
        </li>
    </ul>
    <AppCard></AppCard>
</template>

<style scoped>
img{
    width: 20px;
}
</style>
