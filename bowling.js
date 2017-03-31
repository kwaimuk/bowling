
var bowling = function (frames){
var score = 0;

  for(var i = 0; i < frames.length; i++){
    score += frames[i].ball1 + frames[i].ball2;

  }

return score;
console.log("here is the score",score);
};
module.exports = bowling;
