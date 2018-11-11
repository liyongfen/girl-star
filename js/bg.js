//画背景
function drawBg() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, canW, canH);
}
//画女孩
function drawGirl(){
    ctx.drawImage(girlPic, girlOffsetX, girlOffsetY,  girlW, girlH);
}