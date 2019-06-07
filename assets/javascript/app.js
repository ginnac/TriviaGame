//variables
var objectsNames=[
question1 = {
    name: "which option below means HAPINESS in spanish?",
    answers:["Tristeza","Cordura","Tranquilidad","Felicidad"],
    rightAnswer:"Felicidad",},
question2 ={
    name:"which option below means KNEES in spanish",
    answers:["Pies", "Manos", "Codos", "Rodillas"],
    rightAnswer: "Rodillas",},
question3 ={
    name:"which option below means TOWELS in spanish",
    answers:[ "Toalla", "Frazada", "Tina", "Toro"],
    rightAnswer: "Toalla",
    }]

var interval;
var answerIndex;

//lets start from a random value in our objectNamesarray
//var finalObjectName = objectsNames[Math.floor(Math.random() * objectsNames.length)];
//console.log(finalObjectName);
var index = 0;

//start function when document is ready
$( document ).ready(function() {




 //   ID content needs to be hisden  until start function is called displayed
    function hideContent(){ 
    $("#content").hide();
    }

    hideContent();



//start function will be called to ID content diplays and questions start
   function startbuttom(){
    $("#start-button").on("click",function(){
    $("#content").show();
    $("#start-button").hide();
    displayquestions()
    loopOfQuestions();
    });
    }

   startbuttom();

 //function to display questions
 
   function displayquestions(){
    //display questions:
    $("#question").text(objectsNames[index].name);
    //display answers: 
        //let's print them randomly: 
        //get random indexes: 
        answerIndex = Math.floor(Math.random()* 4);
        //print answer option
        $("#answer1").text(objectsNames[index].answers[answerIndex]);
        //push it to empty array
        //
        //print second answer
        //remove it from array
        //print 3 answer 
        //remove it from array
        //print 4 answer
        //




   }



//function to pass to next question

function nextQuestion(){
    index++;

    $("#question").text(objectsNames[index].name);


  setTimeout(function(){displayquestions();}, 1000);

 };


 //function for interval so functions can happen again and again until reaches the total length of the Objectnames array:
function loopOfQuestions(){
    interval = setInterval(function(){nextQuestion()}, 3000);

}
 
// function to clear interval when all questions have been asked


 // function to update score

 function score(){

//correct answers
//incorrect answers
//unanswered


 }

 function gameEnd(){

 }


 



   
});

