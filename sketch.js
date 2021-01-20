var dog, hdog, database, foodS, foodStock;
var dogS;
var button;
var Happy;
var milkimg;
var milkS;
var d,hours;
var seconds,s;
var h;
var m;
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
  m = "am";
  h = 0;
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
  if(m==="am"){
    text(button.name+" was last fed at " + h + " am",150,350);
    }else{
    if(m==="pm"){
    text(button.name+" was last fed at " + h + " pm",150,350);
  }}
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

function ampm(){
  if(h>12){
  if(h===13){
    h = 1;
}
if(h===14){
    h = 2;
}
if(h===15){
    h = 3;
}
if(h===16){
    h = 4;
}
if(h===17){
    h = 5;
}
if(h===18){
    h = 6;
}
if(h===19){
    h = 7;
}
if(h===20){
    h = 8;
}
if(h===21){
    h = 9;
}
if(h===22){
    h = 10;
}
if(h===23){
    h = 11;
}
if(h===24 || h===0){
    h = 12;
}
m ="pm";
}else{
  if(m==="pm"){
     m = "am";
  }
}
}