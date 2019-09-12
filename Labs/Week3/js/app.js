class Ball {

    constructor() {
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 10, y: 0 };
    }

    update() {

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        circle(this.position.x, this.position.y, 20);

        if(this.position.x < 0 || this.position.x > 400) {
            World.ballBeyond(this);
        }
    }

}

var World = {
    bgcolor: [237, 119, 83],
    ballBeyond: function(whichBall) {
        this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
        whichBall.position.x = 100;
        whichBall.velocity.x = (Math.random() - .5) * 20;
    }
}

//class for a box
//Grows in size every time a ball hits an edge and is reset
// "For fun": multiple balls

var ball = new Ball();



function setup() {
    createCanvas(400,300);

}

function draw() {
    background( World.bgcolor );
    ball.update();
}
