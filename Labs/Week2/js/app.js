class Drop {
    constructor() {
        this.x = Math.random() * 400;
        this.y = 0;
    }

    update() {
        this.y ++;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}

class RainManager {
    constructor() {
        this.drops = [];
       // console.log(this.drops);
    }

    createDrop() {
        //make a new drop
        var newDrop = new Drop();

        //add this drop to our collection of drops
        this.drops.push(newDrop);
        //console.log(newDrop);
    }

    update() {
        for(var i = 0; i < this.drops.length; i++) {
            this.drops[i].update();
        }
    }
}

class Ground {
    //
    constructor() {
        this.hitCount = [];
        this.x = ("#00001a");
    }
    //set the starting color
    //start the drop hit count

    //update - draws the rectangle to the screen
    update () {
        fill(this.x);
        rect(0,250,400,200)
    }

    createHit () {
        var newHit = new Drop();
        this.hitCount.push(newHit);
    }

    //drop hit - called when a rain drop gets low enough (how do you inform it?)
    //change the color for every ten rain drops hit

    dropHit () {
        for (var i = 10; i <= this.hitCount.length; i++) {
            //console.log("change");
            this.hitCount.length = 0;
            this.x = blueTint.pop();
        }
    }
}

//global variables
var rainManager = new RainManager();
var ground = new Ground();

var blueTint = ["#79baec","#3bb9ff","#5cb3ff","#38acec","#6698ff","#6495ed","#1589ff","#157dec","#306eff","#1b65ec","#728fce","#95b9c7","#87afc7","#659ec7","#3090c7","#3090c7","#499ac7","#368bc1","#357ec7","#736aff","#6960ec","#1f45fc","#1b60de","#1569c7","#2554c7","#0041c2","#0020c2","#0000a0","#151b8d","#153173","#342d7e","#000080","#151b54",];

//Run once before the application starts
function setup() {
    createCanvas(400,300);
}

//runs 60 times a second, or so
function draw() {
    //Color of background
    background(255);

    //create a new drop on a 1% chance
    if (Math.random() < .05) {
        rainManager.createDrop();
        //Amount of time for drop to fall to rectangle, then call createHit
        setTimeout (function () {
            ground.createHit();
        }, 4500);
    }

    rainManager.update();
    ground.update();
    ground.dropHit();

}
