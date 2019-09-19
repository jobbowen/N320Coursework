//Defines ball class
class Ball {
    constructor() {
        //Defines position of the ball on the page
        this.position = { x: 100, y: 100 };
        //Defines the velocity of the ball in x and y direction
        this.velocity = { x: 10, y: 0 };
    }

    update() {
        //Adds the value of velocity.x to the value of position.x
        this.position.x += this.velocity.x;
        //Adds the value of velocity.y to the value of position.y
        this.position.y += this.velocity.y;

        //Determines the position of the circle on the screen. X changes while Y stays consatnt. 20 is the diameter of the circle.
        circle(this.position.x, this.position.y, 20);

        //If the position of X is less than 0 OR greater than 400, call the global variable World, access ballBeyond and call this.bgColor and change the background color.
        if(this.position.x < 0 || this.position.x > 400) {
            World.ballBeyond(this);
            //console.log(this.position.x);
        }
    }

}

//Global variable World
var World = {
    //Starting color for the background
    bgcolor: [237, 119, 83],
    ballBeyond: function(whichBall) {
        //Call change function
        boxes.change();
        this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
        //console.log(this.bgcolor);
        whichBall.position.x = 100;
        whichBall.velocity.x = (Math.random() - .5) * 20;
    }
};


//class for a box
//Grows in size every time a ball hits an edge and is reset
// "For fun": multiple balls
class Boxes {
    constructor () {
        this.position = { x: 40, y: 225, width: 5, height: 5};
        this.position2 = { x: 300, y: 225, width: 5, height: 5};
    }
//Updates position and size of rectangle
    update () {
       rect(this.position.x, this.position.y, this.position.width, this.position.height);
       rect(this.position2.x, this.position2.y, this.position2.width, this.position2.height);
    }
    //Changes size of rectangle
    change () {
        this.position.width = this.position.width + 5;
        this.position.height = this.position.height + 5;
        this.position2.width = this.position2.width + 5;
        this.position2.height = this.position2.height + 5;
    }
}


//Creates new ball object
var ball = new Ball();
var boxes = new Boxes();


//Creates canvas
function setup() {
    createCanvas(400,300);

}

//Draws background and calls ball.update
function draw() {
    background( World.bgcolor );
    ball.update();
    boxes.update();
}
