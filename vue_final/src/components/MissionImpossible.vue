<template>
    <div class="transition">
        <div class="movie" v-bind:key="fallout.id" v-for="fallout in mIFallout">
            <h1>{{fallout.title}}</h1>
            <h3 style="border: none;">Release Date: {{fallout.information['basicInfo'][0].release}}</h3>
            <h3 style="border: none;">Box Office: {{fallout.information['basicInfo'][2].boxOffice}}</h3>
            <h3>Rotten Tomatoes: {{fallout.information['basicInfo'][1].rottenTomatoes}}</h3>
            <h3 style="text-align: left; margin-right: 2%; border: none;">{{fallout.information['extInfo'][0].description}}</h3>
            <router-link style="text-decoration-color: #ffffff;" to="/tomcruise">
                <h4 style="text-align: left; color: #f4f4f4; margin-left: 2%;">Learn more about Tom Cruise.</h4>
            </router-link>
        </div>

        <div class="content" v-bind:key="fallout.id" v-for="fallout in mIFallout">
            <div class="fallout"><img :src="fallout.images['movieImages'][0].first" alt="MI Fallout"></div>
            <div class="fallout"><img :src="fallout.images['movieImages'][1].second" alt="MI Fallout"></div>
            <div class="fallout"><img :src="fallout.images['movieImages'][2].third" alt="MI Fallout"></div>
            <div class="fallout"><img :src="fallout.images['movieImages'][3].fourth" alt="MI Fallout"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MissionImpossible",
        props: ['mIFallout']
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
