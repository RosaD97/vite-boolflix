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
    methods: {
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
        },
        title(){
            return this.info.title || this.info.name;
        },
        original_title(){
            return this.info.original_title || this.info.original_name;
        }
    }
}
</script>

<template>
    <div class="flip ms_card position-relative mb-5">
        <img class="front" v-show="info.poster_path !== null" :src="store.config.url_img + info.poster_path" alt="">
        <img class="front ms_imgNotFound" v-show="info.poster_path === null" src="../../public/imgNotFound.jpg">
        <div class="back info p-2">
            <h2 class="mb-3">{{ title }}</h2>
            <h4>{{ original_title }}</h4>
            <country-flag :country="getLanguage" size='small' />
            <div>
                <font-awesome-icon class="stars" v-for="n in getVote" v-show="getVote !== 0" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="n in 5 - getVote" icon="fa-regular fa-star" />
            </div>
            <div class="mt-3 p-1">{{ info.overview }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_imgNotFound{
    object-fit: cover;
}
img {
    width: 400px;
    height: 650px;
}

.info {
    // visibility: hidden;
    width: 300px;
    position: absolute;
    left: 0;
    top: 20px;
    color: aliceblue;
}
.stars{
    color: rgb(236, 236, 60);
}
// base
.flip {
    position: relative;
    box-shadow: -1px 0px 19px -2px #000000;
    >.front,
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    }
    >.front {
        transform: rotateY(0deg);
    }
    >.back {
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
    }
    &:hover {
        box-shadow: -1px 0px 19px -2px #6d2c2c;
        >.front {
            transform: rotateY(180deg);
            filter: brightness(7%);
        }
        >.back {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
    &.flip-vertical {
        >.back {
            transform: rotateX(-180deg);
        }
        &:hover {
            >.front {
                transform: rotateX(180deg);
            }
            >.back {
                transform: rotateX(0deg);
            }
        }
    }
}
</style>
