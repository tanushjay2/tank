// You could have multiple flags like: start, launch to indicate the state of the game.
var engine, world;
var backgroundImg,platform;
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var ball,tanker;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(600,height,1200,20);
tanks = new Tanker(100,400,60,10);
ball1 = new Ball(500,50,30);
ball2 = new Ball(600,100,30);

}

function draw() {
background ("white")
// Remember to update the Matter Engine and set the background.
//canonBall.display()
Engine.update(engine);
tanks.display();
ball1.display();
ball2.display();
ground.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}