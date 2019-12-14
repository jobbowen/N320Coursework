<template>
    <div class="transition">
        <div class="person" v-bind:key="tom.id" v-for="tom in tomCruise">
            <h1>{{tom.name}}</h1>
            <h2 style="border: none;">Born: {{tom.information['basicInfo'][0].dob}}</h2>
            <h2>Birth Place: {{tom.information['basicInfo'][1].place}}</h2>
            <h3 style="text-align: left; margin-left: 2%; margin-right: 2%">
                {{tom.information['extInfo'][0].description}}</h3>
        </div>

        <div class="content" v-bind:key="tom.id" v-for="tom in tomCruise">
            <div class="tom"><img style="width: 100%; height: 100%;" :src="tom.images['mainImages'][0].first" alt="tom cruise"></div>
            <div style="width: 45vw" class="tom"><img style="width: 100%; height: 100%;" :src="tom.images['mainImages'][1].second" alt="tom cruise"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TomCruise",
        props: ['tomCruise']
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

    .tom {
        border: 2px solid #000000;
        width: 25vw;
        height: 55vh;
        background-color: #2c3e50;
        margin: 0 auto;
        margin-top: 2%;
    }

</style>
