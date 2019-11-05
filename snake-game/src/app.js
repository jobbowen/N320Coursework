import SnakeImport from "./components/snake";
export default {
    name: "App",
    components: {
        SnakeImport
    },
    //Set numbers and boolean for data
    data() {
        return {
            cellSize: 20,
            boardSize: 30,
            speed: 10,
            score: 0,
            playing: false
        };
    },
    methods: {
        start() {
            this.playing = true;
            this.score = 0;
        },
        stop() {
            this.playing = false;
        },
        addScore(score) {
            this.score += score;
        }
    }
};
