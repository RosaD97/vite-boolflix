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
    }
}
</script>

<template>
    <ul>
        <li v-for="movie in store.movies">{{ movie.title }}
            <div>{{ movie.original_language }}</div>
            <span>{{ movie.vote_average }}</span>
        </li>
    </ul>
    <AppCard></AppCard>
</template>

<style scoped></style>
