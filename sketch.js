const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

var log1;

var rb1,rb2,rb3,rb4,rb5;

var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //player
    bird = new Hammer(100,100,100,10);

    box1 = new Stone(300,350,50,50);

    log1 = new Iron(550,350,100,10);

    rb1 = new Rubber(700,350,20);
    rb2 = new Rubber(700,350,20);
    rb3 = new Rubber(700,350,20);
    rb4 = new Rubber(700,350,20);
    rb5 = new Rubber(700,350,20);

//consoles
console.log(bird);
//consoles

    ground = new Ground(600,395,1200,20);
}

function draw(){
    background(40,150,234);
    Engine.update(engine);

    box1.display();
   
    ground.display();

    log1.display();

 
    rb1.display();
    rb2.display();
    rb3.display();
    rb4.display();
    rb5.display();
   
    
    bird.display();

}