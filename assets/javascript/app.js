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
var index = 0;
var count = 30;
var textAnswer;
var correctAnswersScore= 0;
var unansweredScore =0;
var incorrectAnswersScore =0;

//start function when document is ready
$( document ).ready(function() {
 //   ID content needs to be hidden  until start function is called displayed and stats ID should be shown when finishing the Trivia Game:
    function hideContent(){ 
    $("#content").hide();
    }
    
    function hideStats(){
        $("#stats").hide();
    }

    hideContent();
    hideStats();

//start function will be called to make ID content diplays and questions start
   function startbuttom(){
    $("#start-button").on("click",function(){
    $("#content").show();
    $("#start-button").hide();
    displayquestions();
    loopOfQuestions();
    });
    }

   startbuttom();

 //function to display questions
    function displayquestions(){
    //display questions:
    $("#question").text(objectsNames[index].name);
    displayAnswers();
    intervalTimer();
    $("#answer-tabs").show();
    $("#pic").hide();
    $("#result").hide();
    $("#correctAnsweris").hide();
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

        //restoring our arrays - 
        objectsNames[0].answers = ["Tristeza","Cordura","Tranquilidad","Felicidad"];
        objectsNames[1].answers = ["Pies", "Manos", "Codos", "Menton"];
        objectsNames[2].answers = [ "Toalla", "Frazada", "Tina", "Toro"];
    }

//function to pass to next question
    function nextQuestion(){
        //first let's get the answer- 
        quickReview();
        //pass to next index (objectNames array)
        index++;
        //wait 2 secs to display next index...
        intervalTimeOut = setTimeout(function(){displayquestions();},2000);
 };

    //function for inmmediate results after a question: 
    function quickReview(){  
        $("#pic").show();
        $("#answer-tabs").hide();
        $("#result").show();
        $("#correctAnsweris").show();
        clearInterval(intervalSec);
        $("#pic").attr("src",objectsNames[index].src);
            $("#pic").attr("height","200px");
            $("#pic").attr( "width","200px");
        if(textAnswer === objectsNames[index].rightAnswer){
            $("#result").text("Correct");
            $("#correctAnsweris").text("Correct answer is:" + " " + objectsNames[index].rightAnswer);            
        }

        else{
            $("#result").text("Incorrect");
            $("#correctAnsweris").text("Correct answer is:" + " " + objectsNames[index].rightAnswer);        
        }
    }

    //function for interval so questions can be displayed again and again until reaches the total length of the Objectnames array:
    function loopOfQuestions(){
        interval = setInterval(function(){nextQuestion();},30000);
    }

    //function to get the time left show in the DOM: 
    function timer(){
        count=count-1;
        $("#timer").text(count + " " + "seconds left");
        if(count==0){count=30;
            clearInterval(intervalSec);
            clearInterval(interval);
            nextQuestion();
            unansweredScore = unansweredScore+1;
            var quest = $("#question").text()
            if(quest===objectsNames[objectsNames.length-1].name){
                setTimeout(function(){stopAndNextQuestion();gameEnd();},2000); 
            }
        }
    }

    //function for intervals for the seconds countdown
    function intervalTimer(){ 
        count = 30;
        $("#timer").text(count + " " + "seconds left");
        intervalSec = setInterval(function(){timer();},1000);
    }

    // function to clear interval- will be called when all questions have been answered or 
    function stopAndNextQuestion(){
        clearInterval(interval);
        clearInterval(intervalSec);
        clearTimeout(intervalTimeOut);
    }

    // function to update score
    function score(){
        $(".answer").on("click",function(){
            textAnswer = $(this).text();
            var Object3AnswersArray = objectsNames[objectsNames.length-1].answers
        //if we are dealing with the last object of the objectNames array
        if(Object3AnswersArray.includes(textAnswer)) {
            //if it is a correct answer
            if(textAnswer === objectsNames[index].rightAnswer){
            correctAnswersScore = correctAnswersScore+1;
            quickReview();
            setTimeout(function(){stopAndNextQuestion();gameEnd();},2000);
            }
            //if it is an incorrect answer 
            else{
            incorrectAnswersScore = incorrectAnswersScore+1;
            quickReview();
            setTimeout(function(){stopAndNextQuestion();gameEnd();},2000);
            }
        }
        // if we are not dealing with the last object , and it is correct answer
        else if(textAnswer === objectsNames[index].rightAnswer){
            clearInterval(intervalSec);
            clearInterval(interval);
            nextQuestion();
            correctAnswersScore = correctAnswersScore+1;
        }

        //if we are not dealing with the last object , and it is an incorrect answer
        else{
            clearInterval(intervalSec);
            clearInterval(interval);
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
            count = 30;
            correctAnswersScore= 0;
            unansweredScore =0;
            incorrectAnswersScore =0;
            hideStats();
            $("#content").show();
            $("#start-button").hide();
            displayquestions();
            loopOfQuestions();
        });
    }
 reset();  
});

