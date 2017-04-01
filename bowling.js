
var bowling = function (frames){
var score = 0;
  for(var i = 0; i < frames.length; i++){
    var firstBall = frames[i].ball1;
    var secondBall = frames[i].ball2;
    var frameTotal = firstBall + secondBall;
    var nextFirstBall = null;
    var nextSecondBall = null;


    if(i+1 >= frames.length ){
      nextFirstBall = 0;
    }else{
      nextFirstBall = frames[i+1].ball1;
      nextSecondBall = frames[i+1].ball2;
    }

//spares and strikes
    if(i<10){
      if(frames[i].ball1 <=9 && frames[i].ball2 <=10 && frameTotal === 10) {
        frameTotal += nextFirstBall;
      } else if (frames[i].ball1 === 10 && frames[i].ball2 === 0 && frameTotal === 10){
        frameTotal += nextFirstBall + nextSecondBall;
      }
    }

    score += frameTotal;
//on the tenth frame
    if(i === 9){
      if(frames[9].ball1 <=9 && frames[9].ball2 <=10 && frameTotal === 10) {
        score += frames[10].ball1;
      } else if (frames[9].ball1 === 10 && frameTotal === 10){
        score += frames[10].ball1 + frames[10].ball2;
        }

    return score;
    }


    }

return score;

};
module.exports = bowling;
