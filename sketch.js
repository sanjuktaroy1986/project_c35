//Create variables here
const database=firebase.database()

var dog,dogImg,happyDog,foodS,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);

  dog=createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale=0.3;

  var foodStock=database.ref('/')
  foodStock.set({
    Food:20
  })
  count=database.ref('Food')
  count.on("value",readStock);

  }


function draw() {  

  background(46,139,87);

  if(keyWentDown("UP_ARROW")){
    foodS=foodS-1;
    if(foodS<=0){
      foodS=0;
    }
    writeStock(foodS)
    dog.addImage(happyDog);
    
  }

  drawSprites();

  textSize(20);
  fill("white");
  stroke(0);
  text("FOOD STOCK="+foodS,160,150);
  text("Press UP ARROW Key to feed milk to Drago", 50,50);
  //add styles here

}

function readStock(data){

  foodS=data.val()
  //console.log(foodS)

}

function writeStock(data){
  var foodStock=database.ref()
  foodStock.update({
    Food:data
  })

}



