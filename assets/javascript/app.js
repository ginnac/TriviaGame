//variables
var objectsNames=[
question1 = {
    name: "which option below means HAPINESS in spanish?",
    answers:["Tristeza","Cordura","Tranquilidad","Felicidad"],
    rightAnswer:"Felicidad",
    src:"assets/images/felicidad.jpg",
},
question2 ={
    name:"which option below means Chin in spanish",
    answers:["Pies", "Manos", "Codos", "Menton"],
    rightAnswer: "Menton",
    src: "assets/images/chin1.jpeg"       
},
question3 ={
    name:"which option below means TOWELS in spanish",
    answers:[ "Toalla", "Frazada", "Tina", "Toro"],
    rightAnswer: "Toalla",
    src: "assets/images/toalla.jpg"  
}];
var interval;
var intervalSec;
var intervalTimeOut;
var answerIndex;
var array;
var count = 31;
var textAnswer;
var correctAnswersScore= 0;
var unansweredScore =0;
var incorrectAnswersScore =0;
//lets start from a random value in our objectNamesarray
//var finalObjectName = objectsNames[Math.floor(Math.random() * objectsNames.length)];
//console.log(finalObjectName);
var index = 0;
//start function when document is ready
$( document ).ready(function() {

 //   ID content needs to be hidden  until start function is called displayed
    function hideContent(){ 
    $("#content").hide();
    }
    function hideStats(){
        $("#stats").hide();
    }
    hideContent();
    hideStats();

//start function will be called to ID content diplays and questions start
   function startbuttom(){
    $("#start-button").on("click",function(){
    $("#content").show();
    $("#start-button").hide();
    displayquestions();
    loopOfQuestions();
    intervalTimer();
    });
    }

   startbuttom();

 //function to display questions
    function displayquestions(){
    //display questions:
    $("#question").text(objectsNames[index].name);
    displayAnswers();
   }

//function to display answers: 
function displayAnswers(){
        array = objectsNames[index].answers;
        //get random indexes so order can be changed randomly: 
        answerIndex = Math.floor(Math.random()* 4);
        //print answer option
        $("#answer1").text(objectsNames[index].answers[answerIndex]);
        array.splice(answerIndex,1);
         
        //print second answer
        answerIndex = Math.floor(Math.random()*3);
        $("#answer2").text(objectsNames[index].answers[answerIndex]);
        array.splice(answerIndex,1);

        //print 3 answer 
        answerIndex = Math.floor(Math.random()* 2);
        $("#answer3").text(objectsNames[index].answers[answerIndex]);
        array.splice(answerIndex,1);
        //print 4 answer
        
        $("#answer4").text(objectsNames[index].answers);

        objectsNames[0].answers = ["Tristeza","Cordura","Tranquilidad","Felicidad"];
        objectsNames[1].answers = ["Pies", "Manos", "Codos", "Menton"];
        objectsNames[2].answers = [ "Toalla", "Frazada", "Tina", "Toro"];
    }

//function to pass to next question
function nextQuestion(){
    // setTimeout(function(){quickReview()},500);
    index++;
    intervalTimeOut = setTimeout(function(){displayquestions();},1000);
    $("#answer-tabs").show()

 };

 //function for interval so functions can happen again and again until reaches the total length of the Objectnames array:
function loopOfQuestions(){
    interval = setInterval(function(){nextQuestion();},30000);
}

//function to get the time left show in the DOM: 
function timer()
{ $("#timer").text(count + " " + "seconds left");
count=count-1;
$("#timer").text(count + " " + "seconds left");
 if(count==0){
count=31;
unansweredScore = unansweredScore+1;}
}

//function for intervals for the seconds countdown
function intervalTimer(){
    count = 31;
    intervalSec = setInterval(function(){timer();},1000);
}


// function to clear interval when all questions have been answered or 
function stopAndNextQuestion(){
    clearInterval(interval);
    clearInterval(intervalSec);
    clearTimeout(intervalTimeOut);
}

// function to update score
    function score(){
//correct answers
$(".answer").on("click",function(){
    textAnswer = $(this).text();
    var Object3AnswersArray = objectsNames[2].answers
    console.log(textAnswer);

    if(Object3AnswersArray.includes(textAnswer)) {
        console.log(Object3AnswersArray);
        if(textAnswer === objectsNames[index].rightAnswer){
        correctAnswersScore = correctAnswersScore+1;
        stopAndNextQuestion();
        gameEnd();
        }
        else{
        incorrectAnswersScore = incorrectAnswersScore+1;
        stopAndNextQuestion();
        gameEnd();  
        }
    }


    else if(textAnswer === objectsNames[index].rightAnswer){
        clearInterval(intervalSec);
        intervalTimer();
        nextQuestion();
        correctAnswersScore = correctAnswersScore+1;
        }

//incorrect answers
    else{
        clearInterval(intervalSec);
        intervalTimer();
        nextQuestion();
        incorrectAnswersScore = incorrectAnswersScore+1;

    }
});
}
score();

//View of the score
 function gameEnd(){
    hideContent();
    $("#stats").show();
    $("#correct-stats").text("Correct Answers:"+ " " +correctAnswersScore);
    $("#incorrect-stats").text("incorrect Answers:"+ " " + incorrectAnswersScore);
    $("#unanswered-stats").text("Unanswered:" + " " + unansweredScore);
};

 //reset game 

 function reset(){
$("#start-again-button").on("click",function(){
        index = 0;
        count = 31;
        correctAnswersScore= 0;
        unansweredScore =0;
        incorrectAnswersScore =0;

        hideStats();
        $("#content").show();
        $("#start-button").hide();
        intervalTimer();
        displayquestions();
        loopOfQuestions();
    });
 }
 reset();

function quickReview(){
    $("#answer-tabs").hide();
    if(textAnswer === objectsNames[index].rightAnswer){
        $("#result").text("Correct");
        $("#correctAnsweris").text("Correct answer is:" + " " + objectsNames[index].rightAnswer);        
        $("#pic").attr("src",objectsNames[index].src);
        $("#pic").attr("height","200px");
        $("#pic").attr( "width","200px");
    }
  

 }
 quickReview();
 



   
});

