<template>
    <div class="home transition">

        <h1 class="title">The Movie Gallery</h1>

        <button class="modal" @click="openModal">Movie Quick Facts</button>
        <Modal v-show="open" @close="closeModal" v-bind:key="quickFacts.id" v-for="quickFacts in facts">
            <h1 slot="title">Movie Quick Facts</h1>
            <h3 style="width: 50vw" slot="body">1: {{quickFacts.facts[0].fact1}}</h3>
            <h3 style="width: 50vw" slot="body">2: {{quickFacts.facts[1].fact2}}</h3>
            <h3 style="width: 50vw" slot="body">3: {{quickFacts.facts[2].fact3}}</h3>
            <h3 style="width: 50vw" slot="body">4: {{quickFacts.facts[3].fact4}}</h3>
        </Modal>

        <div class="movie" v-bind:key="movie.id" v-for="movie in wonderWoman">
            <router-link to="/wonderwoman">
                <img :src="movie.images['poster'][0].main" alt="wonder woman">
            </router-link>
        </div>

        <div class="movie" v-bind:key="movie.id" v-for="movie in mIFallout">
            <router-link to="/missionimpossible">
                <img :src="movie.images['poster'][0].main" alt="mission impossible">
            </router-link>
        </div>

        <div class="movie" v-bind:key="movie.id" v-for="movie in theMartian">
            <router-link to="/themartian">
                <img :src="movie.images['poster'][0].main" alt="the martian">
            </router-link>
        </div>

        <div class="movie" v-bind:key="movie.id" v-for="movie in interstellar">
            <router-link to="/interstellar">
                <img :src="movie.images['poster'][0].main" alt="interstellar">
            </router-link>
        </div>
    </div>
</template>

<script>
    import Modal from "./Modal";

    export default {
        name: 'Home',
        props: ['wonderWoman', 'mIFallout', 'theMartian', 'interstellar', 'facts'],
        components: {
            Modal
        },
        data() {
            return {
                open: false,
            };
        },
        methods: {
            openModal() {
                this.open = true;
            },
            closeModal() {
                this.open = false;
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: space-between;
    }

    .home .movie {
        margin: 0 auto;
    }

    .title {
        font-size: 3em;
        flex-basis: 100%;
        color: #f4f4f4;
        text-align: left;
        margin-left: 2%;
    }

    .movie {
        width: 24%;
        height: 75%;
        background-color: #000000;
        margin: 10px;
        border: 4px solid #000000;
    }

    img {
        width: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: ease .25s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .transition {
        position: fixed;
        width: inherit;
    }

    .modal {
        position: absolute;
        margin-left: 45%;
        margin-top: 3.5%;
        cursor: pointer;
        background: #ffffff;
        padding: 1%;
        border-radius: 5px;
        transition: .5s ease;
    }

    .modal:hover {
        background: #2c3e50;
        transition: .5s ease;
    }

    h3 {
        text-align: left;
        margin-left: 8%;
    }
</style>
