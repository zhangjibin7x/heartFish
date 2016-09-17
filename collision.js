/**
 * Created by zhang on 2016/9/12.
 */
//
function monFruitCollision(){
    if(!data.gameOver){
        for(var i = 0;i<fruit.num;i++){
            if(fruit.alive[i]){
                var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900){
                    //fruit eaten
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.bigbodyCount++;
                    if(mom.bigbodyCount>7){
                        mom.bigbodyCount = 7;
                    }
                    if(fruit.fruitType[i] == "blue"){
                        data.double =2;
                    }else{
                        data.double =1;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }

}
function kidFruitCollision(){
    if(data.fruitNum>0 && !data.gameOver){
        var l =calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            //recover
            baby.babyBodyCount = 0;
            //reset data
            //data.reset();
            mom.bigbodyCount = 0;
            //score updata
            data.addScore();
            halo.born(baby.x,baby.y);

        }
    }

}