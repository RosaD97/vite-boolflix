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
        <!-- Film -->
        <li v-for="movie in store.movies">
            <AppCard :info="movie" ></AppCard>
        </li>
        <!-- Series -->
        <li v-for="series in store.series">
            <AppCard :info="series"></AppCard>
        </li>
    </ul>
    <div v-show="store.searchKey === ''">Fai una nuova ricerca.</div>
</template>

<style scoped>
</style>
