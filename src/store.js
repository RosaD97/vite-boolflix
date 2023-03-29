import { reactive } from "vue";

export const store = reactive({
    config: {
        api_key: 'b98c0b75b15b633f599dab2c7322d4ca',
        query: '',
        language: 'it',
        url_movies: 'https://api.themoviedb.org/3/movie?api_key=',
        url_tv: 'https://api.themoviedb.org/3/tv?api_key='
    }
})