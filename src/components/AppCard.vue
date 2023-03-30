<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCard',
    components: {
        CountryFlag
    },
    props: {
        info: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';

                default:
                    return this.info.original_language;
            }
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2)
        }
    }
}
</script>

<template>
    <div>
        <img :src="store.config.url_img+info.poster_path" alt="">
        <h2>{{ info.title }}</h2>
        <h2>{{ info.name }}</h2>

        <h3>{{ info.original_title }}</h3>
        <h3>{{ info.original_name }}</h3>

        <div>{{ info.original_language }}</div>
        <country-flag :country="getLanguage" size='small' />
        <span>{{ getVote }}</span>

        <font-awesome-icon v-for="n in getVote" v-show="getVote !== 0" icon="fa-solid fa-star" />
        <font-awesome-icon v-for="n in 5-getVote" icon="fa-regular fa-star" />
    </div>
</template>

<style scoped></style>
