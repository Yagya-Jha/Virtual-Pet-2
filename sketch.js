var dog, hdog, database, foodS, foodStock;
var dogS;
var button;
var Happy;
var milkimg;
var milkS;
var d,hours;
var seconds,s;
function preload()
{
  hdog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
  milkimg = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  button = new Food();
  foodStock.on("value",readStock);
  dogS = createSprite(250,150);
  dogS.addImage("img",dog);
  dogS.scale = 0.15;
  Happy = false;
  milkS = createSprite(-10,180,20,10);
  milkS.addImage("image",milkimg);
  milkS.scale = 0.05;
  d= new Date();
  hours = database.ref('hours');
  hours.on("value", readHours);
  seconds = -1;
  s = database.ref('seconds');
  s.on("value", readSeconds);
}

function draw() {  
  background(46, 139, 87);
  button.display();

  if(Happy===false){
    dogS.addImage("img",dog);
  }
  else{
    dogS.addImage("img",hdog);
    glide(milkS);
  }
  if(World.frameCount%30===0){
    s = s+1;
    seconds = s;
    setSeconds(seconds);
    console.log(s);
  }
  if(seconds>30){
    Happy = false;
    milkS.x = -10;
  }
  drawSprites();
  fill(255);
  textSize(18);
  if(button.button1){
  text("x "+ foodS,250,255);
  text(button.name+" was last fed at " + hours + " hrs",150,350);
}
}

function readStock(data){
  foodS = data.val();
}

function glide(obj){
  if(obj.x<=200){
  obj.x = obj.x+10;
  }
}

function readHours(data){
  hours = data.val();
}

function setHours(x){
  database.ref('/').update({hours:x});
}

function readSeconds(data){
  s = data.val();
}

function setSeconds(x){
  database.ref('/').update({seconds:x});
}