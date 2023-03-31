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
    <div class="ms_box pt-4">
        <ul class="container-fluid d-flex flex-wrap justify-content-between">
            <!-- Film -->
            <li  v-for="movie in store.movies">
                <AppCard :info="movie"></AppCard>
            </li>
            <!-- Series -->
            <li  v-for="series in store.series">
                <AppCard :info="series"></AppCard>
            </li>
        </ul>
    </div>
    <div class="ms-2" v-show="store.searchKey === ''">Fai una nuova ricerca.</div>
</template>

<style lang="scss" scoped>
@use '../assets/variables.scss' as*;
.ms_box{
    background: $third; 
    margin-top: 1px;
}
li {
    list-style: none;
    display: contents;
}
</style>
