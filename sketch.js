var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var gameState="start";
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  textSize(30);
  text("500",10,524);
  text("500",90,524);
  text("500",167,524);
  text("500",250,524);
  text("100",337,524);
  text("100",412,524);
  text("100",492,524);
  text("200",573,524);
  text("200",654,524);
  text("200",735,524);

  Engine.update(engine);

  if(gameState==="end"){
    textSize(30);
    text("GameOver",370,350);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>750){

   
    if(particle.body.position.x<300){
       score=score+500;
       particle=null;
       if(count>5){
          gameState="end";
       }
       }
       else 
       if(particle.body.position.x<540&&particle.body.position.x>300){
        score=score+100;
        particle=null;
        if(count>5){
          gameState="end";
        
        }
    }
    else if(particle.body.position.x<900&&particle.body.position.x>540){
      score=score+200;
      particle=null;
      if(count>5){
        gameState="end";
      }
    }
  }
  }




   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}