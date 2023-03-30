<script>
import { store } from './store';
import axios from 'axios';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppMain,
    AppHeader
  },
  methods: {
    search() {
      // Film
      axios.get(store.config.url_movies, {
        params: {
          api_key: store.config.api_key,
          query: store.searchKey,
          language: store.config.language
        }
      })
        .then((response) => {
          store.movies = response.data.results;
        })
        // Series
      axios.get(store.config.url_tv, {
        params: {
          api_key: store.config.api_key,
          query: store.searchKey,
          language: store.config.language
        }
      })
        .then((response) => {
          store.series = response.data.results;
        })
    }
  }
}
</script>

<template>
  <AppHeader @search="search"></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped></style>
