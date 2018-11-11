

var can;
var ctx;

var canW;
var canH;

var lastTime;
var deltaTime;
//女孩图片
var girlPic;
var girlOffsetX = 100;
var girlOffsetY = 150;
var girlW = 600;
var girlH = 350;

//星星
var star;
//鼠标位置
var mx;
var my;
//标记鼠标在图片是否在图片范围内
var inGirl = false;
var life = 0;

document.body.onload = init;
function init(){
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    document.addEventListener('mousemove', onMouseMove, false);

    canW = can.width;
    canH = can.height;

    girlPic = new Image();
    girlPic.src = './src/girl.jpg';

    star = new Star();
    star.init();

    lastTime = Date.now();
    deltaTime = 0;
    gameloop();

}
//循环帧
function gameloop(){
    
    window.requestAnimFrame(gameloop);

    let now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    
    drawBg();
    drawGirl();
    
    star.aliveUpdate(); 
    star.drawAll();

}
function onMouseMove(e){
    if(e.offsetX || e.layerX){
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;
        if( (mx >= girlOffsetX && mx <= (girlOffsetX + girlW)) &&
            (my >= girlOffsetY && my <= (girlOffsetY + girlH))
        ){
            inGirl = true;
        }else {
            inGirl = false; 
        }
    }
}
