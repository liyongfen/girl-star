class Star {
    constructor(){
        this.x = [];
        this.y = [];
        this.picNo = [];
        this.timer = [];
        this.spdX = [];
        this.spdY = [];
        this.alpha = [];

        this.num;
        this.pic = new Image();
        
    }
    init(){
        this.num = 50;
        this.pic.src = './src/star.png';
        this.alpha = 1; 

        for(let i = 0; i < this.num; i++){//星星分散到图片上
           this.born(i);
        }
    }
    born(i){
        this.x[i] = Math.random() * girlW + girlOffsetX;
        this.y[i] = Math.random() * + girlH + girlOffsetY;
        this.picNo[i] = Math.floor(Math.random() * 7);//[0,7)星星不同步闪
        this.timer[i] = 0;
        

        this.spdX[i] = Math.random() * 3 - 1.5;//星星往各个方向跑
        this.spdY[i] = Math.random() * 3 - 1.5;
    }
    update(i){
        this.x[i] += this.spdX[i] * deltaTime * 0.006;//移动的速度
        this.y[i] += this.spdY[i] * deltaTime * 0.006;

        //重生的判断
        if (this.x[i] < girlOffsetX  || 
            this.x[i] > (girlOffsetX + girlW) - 7 ||
            this.y[i] < girlOffsetY  || 
            this.y[i] > (girlOffsetY + girlH) - 7
        ){
            this.born(i);
            return;
        }

        this.timer[i] += deltaTime;
        if (this.timer[i] > 50) {//星星闪
            this.picNo[i] = (this.picNo[i] + 1) % 7;
            this.timer[i] = 0;
        }
    }
    draw(i){
        ctx.save();
        ctx.globalAlpha = life;
        ctx.drawImage(this.pic, this.picNo[i] * 7, 0, 7, 7, this.x[i], this.y[i], 7, 7);
        ctx.restore();
    }
    drawAll(){
        for (let i = 0; i < this.num; i++) {//循环播放序列帧
            this.update(i);
            this.draw(i);
        }
    }
    aliveUpdate(){
        if(inGirl){
            life += 0.03 * deltaTime * 0.05;
            if (life > 1) {
                life = 1;
            }
        } else {
            life -= 0.03 * deltaTime * 0.05;
            if (life < 0) {
                life = 0;
            }
        }
    }
}