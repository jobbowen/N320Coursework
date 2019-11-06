<template>
    <div id="app">
        <h1>Game of Snake</h1>
        <div class="score">
            <h1>Score: {{ score }}</h1>
        </div>

        <SnakeImport
                :cellSize="cellSize"
                :boardSize="boardSize"
                :speed="speed"
                :playing="playing"
                :stop="stop"
                :addScore="addScore"
                :score="score">
        </SnakeImport>
        <button id="play" v-on:click="playing ? stop() : start()">{{ playing ? "Stop" : "Start" }}</button>
    </div>
</template>
<script src="./app.js"></script>
<style src="./app.css"></style>
