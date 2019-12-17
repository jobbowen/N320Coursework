const app = new Vue({
    el: "#app",
    data: {
        gameOver: false,
        playerTurn: 1,
        grid: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
    },
    methods: {
        selectCell: function (row, col) {
            //Store result from lowestMove
            var moveRow = this.lowestMove(col);
            //Checks if game is over
            if (moveRow >= 0 && !this.gameOver) {
                //Create clone of grid
                var tempGrid = this.grid.slice(0);
                //Determines who's turn it is
                tempGrid[moveRow][col] = this.playerTurn;
                //Put clone back into official grid
                this.grid = tempGrid;
                //Switch player turns
                this.playerTurn = (this.playerTurn === 1) ? 2 : 1;
                //Call to see if a player won
                this.checkWin();
            }
        },
        checkWin: function () {
            //Loop through all cols to check win | HORIZONTAL
            //Set sum to ZERO for use later
            let sum = 0;
            //Loops through all 6 rows
            for (let row = 0; row <= 5; row++) {
                //Loop through four cols
                for (let col = 0; col <= 3; col++) {
                    //Keep track of this cell and the three after it
                    let cellTracker = [this.grid[row][col], this.grid[row][col + 1], this.grid[row][col + 2], this.grid[row][col + 3]];
                    //If cell is empty, stop
                    if (!cellTracker.includes(0)) {
                        //Grab all cells and put them into sum
                        for (let cell = 0; cell < 4; cell++) {
                            sum += cellTracker[cell];
                        }
                        //Grab sum, find the average; if the average is equal to the cell the player won
                        if (sum / 4 === cellTracker[0]) {
                            this.gameOver = true;
                            this.playerTurn = cellTracker[0];
                        }
                    }
                }
            }
        },
        //Find where to put the player number
        lowestMove: function (col) {
            //Start at the bottom, loop upwards and stop once it reaches the top
            for (let row = 5; row >= 0; row--) {
                //If it is empty, return
                if (this.grid[row][col] === 0) {
                    return (row);
                }
            }
        }
    },
});
