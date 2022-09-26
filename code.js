var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c4156ec0-6de5-4376-aa70-6c156e2d93e6"],"propsByKey":{"c4156ec0-6de5-4376-aa70-6c156e2d93e6":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":15,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//sprites e coloraçao
var obs1 = createSprite(100,110,10,10);
var obs2 = createSprite(215,110,10,10);
var obs3 = createSprite(140,190,10,10);
var obs4 = createSprite(240,190,10,10);
var obs5 = createSprite(285,340,10,10);
var obs6 = createSprite(285,280,10,10);
var obs7 = createSprite(385,305,10,10);
var bola = createSprite(25,150,10,10);
var fim = createSprite(335,390,110,20);
var nathan1 = createSprite(70,200,400,8);
nathan1.shapeColor="black";
var nathan2 = createSprite(199,100,400,8);
nathan2.shapeColor="red";
var nathan3 = createSprite(275,298,10,205);
nathan3.shapeColor="black";
var nathan4 = createSprite(396,294,10,395);
nathan4.shapeColor="brown";
var nathan5 = createSprite(5,150,10,93);
nathan5.shapeColor="red";
var life = 0;
var gameState = "play";

//velocidade dos obstaculos
obs1.velocityY=3;
obs2.velocityY=3;
obs3.velocityY=3;
obs4.velocityY=3;
obs5.velocityX=3;
obs6.velocityX=3;
obs7.velocityX=3;










function draw() {

 background("white");
  drawSprites();


//para a bola quicar e voltar
obs1.bounceOff(nathan1);
obs1.bounceOff(nathan2);

obs2.bounceOff(nathan1);
obs2.bounceOff(nathan2);

obs3.bounceOff(nathan1);
obs3.bounceOff(nathan2);

obs4.bounceOff(nathan1);
obs4.bounceOff(nathan2);

obs5.bounceOff(nathan3);
obs5.bounceOff(nathan4);

obs6.bounceOff(nathan3);
obs6.bounceOff(nathan4);

obs7.bounceOff(nathan3);
obs7.bounceOff(nathan4);

bola.bounceOff(nathan1);
bola.bounceOff(nathan2);
bola.bounceOff(nathan3);
bola.bounceOff(nathan4);
bola.bounceOff(nathan5);



text("Vidas: "+ life,200,80);

//controles do jogo
if(gameState == "play"){ 
  if (keyDown("RIGHT_ARROW")) {
   bola.velocityX=4; 
   bola.velocityY=0;
  }
  
  if (keyDown("LEFT_ARROW")) {
    bola.velocityX=-4;
    bola.velocityY=0;
}
 
if (keyDown("DOWN_ARROW")) {
  bola.velocityY=2;
  bola.velocityX=0;
}

if (keyDown("UP_ARROW")) {
  bola.velocityY=-4;
  bola.velocityX=0;
}

if (bola.isTouching(obs1) || bola.isTouching(obs2) || bola.isTouching(obs3) || bola.isTouching(obs4) || bola.isTouching(obs5) || bola.isTouching(obs6) || bola.isTouching(obs7)) {
 
  text("Voce perdeu!",310,150);
  life=life+1;
  gameState = "end";
}

}
if (gameState == "end" || bola.isTouching(fim) ){
  
   bola.velocityX=0;
   bola.velocityY=0;
  obs1.velocityY=0;
  obs2.velocityY=0;
  obs3.velocityY=0;
  obs4.velocityY=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
}

  //fim
  

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
