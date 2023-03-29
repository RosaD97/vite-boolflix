import { reactive } from "vue";

export const store = reactive({
    searchKey: '',
    movies: [],
    config: {
        api_key: 'b98c0b75b15b633f599dab2c7322d4ca',
        query: '',
        language: 'it',
        url_movies: 'https://api.themoviedb.org/3/search/movie?',
        url_tv: 'https://api.themoviedb.org/3/search/tv?'
    }
})