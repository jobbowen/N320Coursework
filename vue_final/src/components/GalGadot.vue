<template>
    <div class="transition">
        <div class="person" v-bind:key="gal.id" v-for="gal in galGadot">
            <h1>{{gal.name}}</h1>
            <h2 style="border: none;">Born: {{gal.information['basicInfo'][0].dob}}</h2>
            <h2>Birth Place: {{gal.information['basicInfo'][1].place}}</h2>
            <h3 style="text-align: left; margin-left: 2%; margin-right: 2%">{{gal.information['extInfo'][0].description}}</h3>
        </div>

        <div class="content" v-bind:key="gal.id" v-for="gal in galGadot">
            <div class="gal"><img :src="gal.images['mainImages'][0].first" alt="gal gadot"></div>
            <div style="width: 50vw" class="gal"><img :src="gal.images['mainImages'][1].second" alt="gal gadot"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "GalGadot",
        props: ['galGadot']
    }
</script>

<style scoped>

    .person {
        color: #f4f4f4;
        text-align: left;
        width: 75%;
    }

    h1 {
        margin-left: 2%;
    }

    .person h2 {
        border-bottom: 1px solid #f4f4f4;
        margin-left: 2%;
    }

    .content {
        display: flex;
    }

    .gal {
        border: 2px solid #000000;
        width: 30vw;
        height: 57vh;
        background-color: #2c3e50;
        margin: 0 auto;
        margin-top: 2%;
    }

    img {
        width: 100%;
        height: 100%;
    }

</style>
