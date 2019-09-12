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
        }
    }

}

//Global variable World
var World = {
    //Starting color for the background
    bgcolor: [237, 119, 83],
    ballBeyond: function(whichBall) {
        this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
        console.log(this.bgcolor);
        whichBall.position.x = 100;
        whichBall.velocity.x = (Math.random() - .5) * 20;
    }
};

//class for a box
//Grows in size every time a ball hits an edge and is reset
// "For fun": multiple balls

//Creates new ball object
var ball = new Ball();


//Creates canvas
function setup() {
    createCanvas(400,300);

}

//Draws background and calls ball.update
function draw() {
    background( World.bgcolor );
    ball.update();
}
