//Question bank
var questionbank = [
    {
        question : 'C++ language was developed by ___',
        option: ['Thomas Kushz','John Kemney','Bjarne Stroutstrup','James Goling'],
        answer: 'Bjarne Stroutstrup'
    },
    {
        question : 'C++ programming language was developed in ____',
        option: ['1972','1979','1980','1995'],
        answer: '1980'
    },
    {
        question : 'Which of the following is C++ equivalent for scanf()?',
        option: ['cin','cout','print','input'],
        answer: 'cin'
    },
    {
        question : ' Which of the following is C++ equivalent for printf()?',
        option: ['cin','cout','print','input'],
        answer: 'cout'
    },
    {
        question : ' Which of the following is an entry-controlled loop?',
        option: ['for','while','do-while','both while and for'],
        answer: 'both while and for'
    },
    {
        question : 'Which data type is used to represent the absence of parameters?',
        option: ['int','short','void','float'],
        answer: 'void'
    },
    {
        question : 'The value 132.54 can be represented using which data type?',
        option: ['double','void','int','bool'],
        answer: 'double'
    },
    {
        question : 'Which of the following correctly declares an array?',
        option: ['int array[10];','int array;','array{10};','array array[10];'],
        answer: 'int array[10];'
    },
    {
        question : ' Which of the following accesses the seventh element stored in array?',
        option: ['array[6];','array[7];','array(7);','array;'],
        answer: 'array[6];'
    },
    {
        question : 'What is size of generic pointer in C++ (in 32-bit platform)?',
       
        option: ['2','4','8','0'],
        answer: '4'
    }
    
]

var question=document.getElementById('question');
var quizContainer=document.getElementById('container');
var scorecard=document.getElementById('scorecard');
var option0 =document.getElementById('option0');
var option1 =document.getElementById('option1');
var option2 =document.getElementById('option2');
var option3 =document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var Score=0;
const enter = document.querySelector(".yash");

//enter.addEventListener("click",()=>{
   // enter.style.display="none";
    //document.querySelector(".1").style.display = "block";

    function displayQuestion(){
        for(var a=0;a<span.length;a++){
            span[a].style.background='none';
        }
        question.innerHTML='Q.'+(i+1)+' '+questionbank[i].question;
        option0.innerHTML=questionbank[i].option[0];
        option1.innerHTML=questionbank[i].option[1];
        option2.innerHTML=questionbank[i].option[2];
        option3.innerHTML=questionbank[i].option[3];
        stat.innerHTML="Question"+' '+(i+1)+' '+'of'+' '+questionbank.length;
    }
    displayQuestion();
function calscore(e){
    if(e.innerHTML === questionbank[i].answer && Score<questionbank.length){
        Score=Score+1;
        document.getElementById(e.id).style.background='limegreen';
        document.getElementById(e.id).style.backgroundSize='cover';
    }
    else{
        document.getElementById(e.id).style.background='tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionbank.length-1){
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=Score+'/'+questionbank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display='block'
    }
}
//click event to next button
next.addEventListener('click',nextQuestion);
//back to quiz button

//});
function backtoquiz(){
    location.reload();
}
