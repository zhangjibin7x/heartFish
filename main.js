/**
 * Created by zhang on 2016/9/12.
 */
var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var bgPic = new Image();

var ane;
var fruit;

var mx;
var my;

var baby;
var babyTail=[];
var babyEye = [];
var babyBody = [];

var mom;
var bigTail = [];
var bigEye = [];
var bigBodyOrange = [];
var bigBodyBlue = [];


var data;

var wave;

var halo;

var dust;
var dustPic = [];

document.body.onload = game;
function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}
function init(){
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");
    ctx2 = can1.getContext('2d');

    can1.addEventListener('mousemove',onMouseMove,false)

    bgPic.src = "src/background.jpg"; //!!!!

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    mx = canWidth*0.5;
    my = canHeight*0.5;

    baby = new babyObj();
    baby.init();

    data = new dataObj();

    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    dust = new dustObj();
    dust.init();

    for(var i=0;i<7;i++){
        dustPic[i] = new Image();
        dustPic[i].src = "src/dust"+i+".png";
    }
    //kid animate;
    for(var i=0;i<8;i++){
        babyTail[i] = new Image();
        babyTail[i].src = "src/bigTail"+i+".png";
    }
    for(var i = 0; i<2;i++){
        babyEye[i] = new Image();
        babyEye[i].src = "src/babyEye"+i+".png";
    }
    for(var i = 0; i<20;i++){
        babyBody[i] = new Image();
        babyBody[i].src = "src/babyFade"+i+".png";
    }
    //mom animate
    for(var i = 0; i<8;i++){
        bigTail[i] = new Image();
        bigTail[i].src = "src/bigTail"+i+".png";
    }
    for(var i = 0;i<2;i++){
        bigEye[i] = new Image();
        bigEye[i].src = "src/bigEye"+i+".png";
    }
    for(var i = 0;i<8;i++){
        bigBodyOrange[i] = new Image();
        bigBodyBlue[i] = new Image();
        bigBodyOrange[i].src = "src/bigSwim"+i+".png";
        bigBodyBlue[i].src = "src/bigSwimBlue"+i+".png";
    }
}

function gameloop(){
    requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime>40){
        deltaTime = 40;
    }
    drawBg();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    mom.draw();
    baby.draw();
    monFruitCollision();
    kidFruitCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
    //ctx1.clearRect(0,0,canWidth,canHeight);

}
function onMouseMove(e){
    if(!data.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX: e.offsetX;
            my = e.offsetY == undefined ? e.layerY: e.offsetY;
        }
    }

}