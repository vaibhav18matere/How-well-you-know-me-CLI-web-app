console.log("****************************")
console.log("\n let's check... HOW WELL DO YOU KNOW ME ?\n  ");
console.log("****************************")

var readlineSync=require("readline-sync");
var score=0;

var userName=readlineSync.question(" \n Plese enter your name?\n   ");

console.log("heyy... Welcome "+userName+ " let's play..! \n");

function play (question,answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log(" \n You are right! "); 
    score=score+1;
  }
   else {
    console.log("\n Oops! Wrong Answer ");
  }

console.log("current score is " + score );
console.log("...........................\n");
}

var questions=[ {
  question:"que.1 Where do I live ? ",
  answer:"Nashik"
},{
  
  question:"que.2 Where I was working previously ? ",
  answer:"Infosys"
},

{
  question:"que.3 What's my favourite colour ? ",
  answer:"Blue"
},

{
  question:"que.4 What is my favourite sport ? ",
  answer:"Cricket"
},
{  
  question:"que.5 Who is my favourite Cricketer? ",
  answer:"Sachin Tendulkar"
}

];

for (var i=0; i<questions.length; i++){
var currentQuestion=questions[i];
play(currentQuestion.question, currentQuestion.answer)
}

console.log("Finish test! "  + userName + ", Your final score is  " + score);  