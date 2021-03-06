const {Engine,
       World,
       Bodies,
       Mouse,
       MouseConstraint,
       Constraint
      } = Matter;

let ground;
let box;
let ball;
let world,engine;
let mConstraint;

function setup() {
  const canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 20);
  box = new Box(450, 300, 50, 75);
  ball = new Ball(50, 300, 25);
  
  const mouse = Mouse.create(canvas.elt);
  const options = {
   mouse: mouse,

  }
  mConstraint = MouseConstraint.create(engine);
  World.add(world,mConstraint);
}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  ground.show();
  box.show();
  ball.show();
}
