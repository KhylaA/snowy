
var boy, boyImg
var backgroundImg, snow

var girlImg, sally

var helloImg, hello

function preload(){
boyImg = loadImage("boy.png")

girlImg = loadImage("sally.png")

helloImg = loadImage("hello.png")

backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);

  sally = createSprite(300,250,50,50)
  sally.addImage("girl",girlImg)
  sally.scale = .3

  boy = createSprite(400, 300, 50, 50);
  boy.addImage("little boy",boyImg)
  boy.scale = .2

  hello = createSprite(350,180,50,50)
  hello.addImage("greeting",helloImg)
  hello.scale = .2
  hello.visible = false

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  
  boy.x = mouseX

  if(boy.x <= 350 && boy.x >= 250){
hello.visible = true
  }
  else{
    hello.visible = false
  }
}