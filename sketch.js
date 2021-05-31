const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pacman, ghost;

function preload(){
 backgroungImg = loadImage("sprites/background.png");
}


function setup() {
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;
    
  ghost1 = new Ghost(210,200,30,30);
  ghost2 = new Ghost(190,200,30,30);

}



function draw(){
    background(backgroundImg) ;
 ghost1.display();
 ghost.display();
 ghost2.display();
 pacman.display();
 



}

