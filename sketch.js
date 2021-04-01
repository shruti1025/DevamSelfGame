const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var bottle1,bottle3,bottle2,bottle4,bottle5,bottle6,bottle7,bottle8,bottle9,ball,slingShot;

function preload(){
    background1=loadImage("images/background.png")
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    // level-1
    bottle1 = new Bottle(630,270,50,60);
    bottle2 = new Bottle(660,270,50,60);
    bottle3 = new Bottle(690,270,50,60);
    bottle4 = new Bottle(720,270,50,60);
    bottle5 = new Bottle(750,270,50,60);
    // level-2
    bottle6 = new Bottle1(660,265,50,60);
    bottle7 = new Bottle1(690,265,50,60);
    bottle8 = new Bottle1(720,265,50,60);
    //level-3
    bottle9 = new Bottle2(690,260,50,60);
    
    //level-4
    bottle10 = new Bottle(930,120,50,60);
    bottle11 = new Bottle(960,120,50,60);
    bottle12 = new Bottle(990,120,50,60);
    
    //level-5
    bottle13 = new Bottle2(960,80,50,60);

    bottle14 = new Bottle2(920,100,50,60);
   

    ball = new Ball(200,100);

   
    ground = new Ground(670,300,350,70);
    ground1 = new Ground1(600,height,1200,20);
    ground2 = new Ground(970,150,200,70);
    

    slingShot= new SlingShot(ball.body,{x:200,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
   
    bottle1.display();
    bottle2.display();
    bottle3.display();
    bottle4.display();
    bottle5.display();
    bottle6.display();
    bottle7.display();
    bottle8.display();
    bottle9.display();
    bottle10.display();
    bottle11.display();
    bottle12.display();
    bottle13.display();
    bottle14.display();
   
    ball.display();
    ground.display();
    ground1.display();
    ground2.display();
    slingShot.display(); 

}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode===32){
         slingShot.attach(ball.body); 
         Matter.Body.setPosition(ball.body,{x:200,y:100}) 
        }
    }
    