//Create variables here
var dog, happyDog, database, foodS, foodStock,readStock;

function preload()
{
   Dogimage = loadImage("Dog.png");
  Happydogimage = loadImage("happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
   database= firebase.database();
  dog = createSprite();
  dog.addImage(Dogimage);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  drawSprites();
  //add styles here
  if(KeyWentDown(Up_Arrow)){
    writeStock(foodS);
    dog.addImage(Happydogimage);
  }
  
}


