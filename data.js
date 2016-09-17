/**
 * Created by zhang on 2016/9/12.
 */
var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}
//dataObj.prototype.reset = function(){
//    this.fruitNum = 0;
//    this.double = 1;
//}
dataObj.prototype.draw = function(){
    var w = can1.width;
    var h = can1.height;
    ctx1.save();
    ctx1.shadowBlur = 50;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.font = "20px Verdana";
    ctx1.textAlign = "center";

    ctx1.fillText("SCORE "+this.score,w *0.5,30);

    if(this.gameOver){
        this.alpha += deltaTime * 0.0008;
        if(this.alpha >1){
            this.alpha = 1;
        }
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAMEOVER :(",w*0.5,h*0.5);
    }
    ctx1.restore();
}
dataObj.prototype.addScore = function(){
    this.score += this.fruitNum*100*this.double;
    this.fruitNum = 0;
    this.double = 1;
}