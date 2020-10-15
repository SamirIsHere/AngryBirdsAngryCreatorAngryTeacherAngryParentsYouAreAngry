const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720,280,50,100);
    box2 = new Box(800,380,50,50);
    box3 = new Box(880,280,50,100);
    box4 = new Box(800,230,200,10);
    ground = new Ground(600,height,1200,20)

    ThisLittlePiggy = new GreenPig(880, 220);
    WaWaWaAllTheWayHome = new GreenPig(800, 240);
    NotRoastBeefImVegetarian = new GreenPig(720, 220);
}

function draw(){
    background(200);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ThisLittlePiggy.display();
    WaWaWaAllTheWayHome.display();
    NotRoastBeefImVegetarian.display();

    ground.display();
}