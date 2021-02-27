var manShooting;
var gameState = "play";
function preload(){
manAnim = loadAnimation("JK_P_Gun__Idle_000.png","JK_P_Gun__Idle_001.png","JK_P_Gun__Idle_002.png","JK_P_Gun__Idle_003.png","JK_P_Gun__Idle_004.png","JK_P_Gun__Idle_005.png","JK_P_Gun__Idle_006.png","JK_P_Gun__Idle_007.png","JK_P_Gun__Idle_008.png","JK_P_Gun__Idle_009.png");
manShoot = loadAnimation("JK_P_Gun__Attack_000.png","JK_P_Gun__Attack_001.png","JK_P_Gun__Attack_002.png","JK_P_Gun__Attack_003.png","JK_P_Gun__Attack_004.png","JK_P_Gun__Attack_005.png","JK_P_Gun__Attack_006.png","JK_P_Gun__Attack_007.png","JK_P_Gun__Attack_008.png","JK_P_Gun__Attack_009.png");
bgImg = loadImage("b.png");
vImg = loadImage("v.png");
maskImg= loadImage("mask.png");
bulletImg = loadImage("Bullet_000.png");
bulletSound = loadSound("bullet.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    man = createSprite(width-1300,height-100,50,50);
    man.addAnimation("idle",manAnim);
  
    man.addAnimation("shooying",manShoot)

    man.scale = 0.3;
    

}

function draw() {
    
 background(bgImg);
 virus();
    safe();

 man.velocityY = 0;

if(keyWentDown("Space")){

man.changeAnimation("shooying",manShoot);
bulletSound.play();
shoot();
 }
 else{
     man.changeAnimation("idle",manAnim);
 }
 
drawSprites();
} 

function virus(){
    if (frameCount % 160 === 0) {
        var virus = createSprite(1900,600,40,10);
        //virus.y = Math.round(random(80,120));
        virus.addImage(vImg);
        virus.scale = 0.1;
        virus.velocityX = -8;
    }
}


function safe(){
    if (frameCount % 260 === 0) {
        var mask = createSprite(1900,600,40,10);
        //virus.y = Math.round(random(80,120));
        mask.addImage(maskImg);
        mask.scale = 0.04;
        mask.velocityX = -8;
    }
}

function shoot(){
    bullet = createSprite(man.x+55,man.y+20);
    bullet.addImage(bulletImg);
    bullet.scale = 0.1;
    bullet.velocityX = 15;
}
