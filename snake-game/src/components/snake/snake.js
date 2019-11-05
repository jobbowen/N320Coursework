import directions from "./directions";
//Define what to export
export default {
    name: "SnakeImport",
    props: {
        cellSize: Number,
        boardSize: Number,
        speed: Number,
        playing: Boolean,
        stop: Function,
        addScore: Function,
        score: Number
    },
    //Updates values and functions defined automatically
    watch: {
        playing(value) {
            this.clear();
            if (value) {
                this.resetSnake();
                this.move();
            }
        }
    },
    //Get board size defined in app.js
    computed: {
        boardSizePx() {
            return this.cellSize * this.boardSize;
        }
    },
    //Call after DOM has been rendered
    mounted() {
        this.boardContext = this.$refs.board.getContext("2d");
        window.addEventListener("keydown", this.onKeyPress);
    },
    //Define all methods
    methods: {
        //Gets middle cell for reset
        getMiddleCell() {
            return Math.round(this.boardSize / 2);
        },
        //Move the snake
        move() {
            if (!this.playing) {
                return;
            }

            this.clear();
            this.setTargetCell();
            //Define head of snake and location
            const newHeadCell = {
                x: this.snake[0].x + this.direction.move.x,
                y: this.snake[0].y + this.direction.move.y
            };
            //End game if snake goes out of board area
            if (
                this.isCellOutOfBoard(newHeadCell) ||
                this.amountCellsInSnake(this.snake[0]) > 1
            ) {
                this.stop();
                alert(`Nice try! Play again.`);
            }

            //Store head locations in array. Unshift adds targetCell to beginning and returns the length
            //Pop removes last element in snake
            //Add to score if target cell is hit
            if (this.isTargetNewHead()) {
                this.snake.unshift(this.targetCell);
                this.targetCell = null;
                this.addScore(1);
            } else {
                this.snake.unshift(newHeadCell);
                this.snake.pop();
            }
            //Draw moving snake
            this.boardContext.beginPath();
            this.snake.forEach(this.drawCell);
            this.boardContext.closePath();

            setTimeout(this.move, this.getMoveDelay());
        },
        //Clear board
        clear() {
            this.boardContext.clearRect(0, 0, this.boardSizePx, this.boardSizePx);
        },
        //Reset snake to middle of board
        resetSnake() {
            this.snake = [{
                    x: this.getMiddleCell(),
                    y: this.getMiddleCell()
                }
            ];
            //Start snake in random direction and store inside this.direction
            const randomDirectionIndex = Math.floor(Math.random() * 4);
            this.direction = directions[randomDirectionIndex];
        },
        //Check if head is out of board
        isCellOutOfBoard({x, y}) {
            return x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize;
        },
        //Change direction of snake
        onKeyPress(event) {
            const newDirection = directions.find(c => c.keyCode === event.keyCode);
            if (!newDirection) {
                return;
            }
            if (Math.abs(newDirection.keyCode - this.direction.keyCode) !== 2) {
                this.direction = newDirection;
            }
        },
        //Draw cells behind head cell in Canvas
        drawCell({x, y}) {
            this.boardContext.rect(
                x * this.cellSize,
                y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
            this.boardContext.fillStyle = "#000";
            this.boardContext.fill();
        },
        //Speed of head across screen/stuttering
        getMoveDelay() {
            return (2 / Number(this.speed)) * 1000;
        },
        //Find random cell for food
        getRandomCell() {
            return {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            };
        },
        //Set snake food
        setTargetCell() {
            if (!this.targetCell) {
                let targetCell = this.getRandomCell();
                while (this.amountCellsInSnake(targetCell) > 0) {
                    targetCell = this.getRandomCell;
                }
                this.targetCell = targetCell;
            }
            //Begin path and draw rectangle HTML Canvas
            this.boardContext.beginPath();
            this.boardContext.rect(
                this.targetCell.x * this.cellSize,
                this.targetCell.y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
            //Draw snake food
            this.boardContext.fillStyle = "#008800";
            this.boardContext.fill();
            this.boardContext.closePath();
        },
        //Length of snake to draw
        amountCellsInSnake(cell) {
            return this.snake.filter(({x, y}) => x === cell.x && y === cell.y)
                .length;
        },
        //Check if target cell is inside snake
        isTargetNewHead() {
            return (
                this.snake[0].x + this.direction.move.x === this.targetCell.x &&
                this.snake[0].y + this.direction.move.y === this.targetCell.y
            );
        }
    }
};
