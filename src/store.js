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
        urlApi: 'https://api.themoviedb.org/3',
        endpoint_movies: '/search/movie',
        endpoint_tv: '/search/tv'
    }
})