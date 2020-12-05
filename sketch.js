const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    jug=new box(200,150,60,80);
    
    book=new box(220,100,60,40);
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    jug.display();
    book.display();
}
