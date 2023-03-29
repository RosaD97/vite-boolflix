<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <input @keyup="$emit('search')" v-model="store.searchKey" type="text">
        <button type="button" @click="$emit('search')">invia</button>
</template>

<style scoped></style>
