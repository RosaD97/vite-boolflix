import { reactive } from "vue";

export const store = reactive({
    searchKey: '',
    movies: [],
    series: [],
    config: {
        url_img: 'https://image.tmdb.org/t/p/w342',
        api_key: 'b98c0b75b15b633f599dab2c7322d4ca',
        query: '',
        language: 'it-IT',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        url_tv: 'https://api.themoviedb.org/3/search/tv'
    }
})