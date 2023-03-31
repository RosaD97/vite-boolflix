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
    <header class=" container-fluid d-flex p-3 justify-content-between">
        <h2>BOOLFLIX</h2>
        <div class="align-self-center d-flex">
            <input @keyup.enter="$emit('search')" class="form-control me-1" v-model="store.searchKey" type="text" placeholder="Cerca Film/Serie">
            <button class="btn" type="button" @click="$emit('search')">invia</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/variables.scss' as *;

header {
    background-color: $third;
    h2{
        color: $primary;
        font-size: 50px;
    }
    button{
        background-color: $primary;
        color: $secondary;
    }
    button:hover{
        background-color: $secondary;
        box-shadow: 1px 1px 23px 0px $primary;
    }
}
</style>
