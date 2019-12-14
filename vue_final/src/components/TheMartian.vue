<template>
    <div class="transition">
        <div class="movie" v-bind:key="theMartian.id" v-for="theMartian in theMartian">
            <h1>{{theMartian.title}}</h1>
            <h3 style="border: none;">Release Date: {{theMartian.information['basicInfo'][0].release}}</h3>
            <h3 style="border: none;">Box Office: {{theMartian.information['basicInfo'][2].boxOffice}}</h3>
            <h3>Rotten Tomatoes: {{theMartian.information['basicInfo'][1].rottenTomatoes}}</h3>
            <h3 style="text-align: left; margin-right: 2%; border: none;">{{theMartian.information['extInfo'][0].description}}</h3>
            <router-link style="text-decoration-color: #ffffff;" to="/mattdamon">
                <h4 style="text-align: left; color: #f4f4f4; margin-left: 2%;">Learn more about Matt Damon.</h4>
            </router-link>
        </div>

        <div class="content" v-bind:key="theMartian.id" v-for="theMartian in theMartian">
            <div class="fallout"><img :src="theMartian.images['movieImages'][0].first" alt="The Martian"></div>
            <div class="fallout"><img :src="theMartian.images['movieImages'][1].second" alt="The Martian"></div>
            <div class="fallout"><img :src="theMartian.images['movieImages'][2].third" alt="The Martian"></div>
            <div class="fallout"><img :src="theMartian.images['movieImages'][3].fourth" alt="The Martian"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheMartian",
        props: ['theMartian']
    }
</script>

<style scoped>
    .movie {
        color: #f4f4f4;
        text-align: left;
        margin-left: 2%;
    }

    .movie h3 {
        border-bottom: 1px solid #f4f4f4;
    }

    .content {
        display: flex;
    }

    .fallout {
        border: 2px solid #000000;
        width: 25vw;
        height: 30vh;
        background-color: #2c3e50;
        margin: 2%;
        margin-top: 5%;
    }

    img {
        width: 100%;
        height: 100%;
    }

</style>
