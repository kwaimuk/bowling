
var bowling = function (frames){
var score = 0;

  for(var i = 0; i < frames.length; i++){
    var firstBall = frames[i].ball1;
    var secondBall = frames[i].ball2;
    var frameTotal = firstBall + secondBall;
    var nextFirstBall = null;
    var nextSecondBall = null;

    if(i+1 >= frames.length){
      nextFirstBall = 0;
    }else{
      nextFirstBall = frames[i+1].ball1;
      nextSecondBall = frames[i+1].ball2;
    }


    if(frames[i].ball1 <=9 && frames[i].ball2 <=10 && frameTotal === 10) {
      frameTotal += nextFirstBall;
    } else if (frames[i].ball1 === 10 && frames[i].ball2 <=9 && frameTotal === 10){
      frameTotal += nextFirstBall + nextSecondBall;
    }

    score += frameTotal;

    }

return score;

};
module.exports = bowling;
