/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  let timeId;
  let total_second = 60;
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';

    const time=document.getElementById("time");
let total_second = 60;
let c_minute = parseInt(total_second/60);
let c_second = parseInt(total_second%60);
 CheckTime=()=>{
  time.innerHTML=`${c_minute} minutes ${c_second} seconds`;
  if(total_second<=0){
    time.innerHTML=`Time Expired`;
    timeId = setTimeout(calculateScore,1);
    
  }
  else{
    total_second=total_second-1;
    c_minute = parseInt(total_second/60);
    c_second = parseInt(total_second%60);
    timeId = setTimeout("CheckTime()",1000);
  }
  
}
timeId = setTimeout("CheckTime()",1000);


  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'Which is the largest planet in the solar system?',
      o: ['Saturn', 'Earth', 'Jupiter', 'Mars'],
      a: 2, // array index 2 - so Jupiter is the correct answer here
    },
    {
      q: ' What year did Albert Einstein die?',
      o: ['1954', '1949', '1960', '1955'],
      a: 3, // array index 3 - so 1955 is the correct answer here
    },
    {
      q: ' Which planet is known as the Morning Star or the Evening Star?',
      o: ['Venus', 'Saturn', 'Neptune', 'Uranus'],
      a: 0, // array index 0 - so Jupiter is the correct answer here
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);
        radioElement.disabled = true;

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = "green";
          
          
          
        }
          
        if (radioElement.checked) {
              // code for task 1 goes here
              if (quizItem.a == i){
                score++;
              }
            
        }
        
        
        const scoreinp = (100*score)/6;
        const showscore = document.getElementById("score");
        if(score===6){
            
             showscore.innerHTML=`<span class="text-success"><b>Wow You are brilliant Your Score is ${scoreinp}% (${score} Points)</b></span>`;
        }
        else if(score<6 && score>3){
          showscore.innerHTML=`<span style="color:YellowGreen"><b>You did great Your Score is ${scoreinp}% (${score} Points)</b></span>`;
        }
        else if(score===3){
          showscore.innerHTML=`<span class="text-warning"><b>You Pass the test Your Score is ${scoreinp}% (${score} Points)</b></span>`;
        }
        else if(score<3||score===0){
          showscore.innerHTML=`<span class="text-danger"><b>Better luck next time Your Score is ${scoreinp}% (${score} Points)</b></span>`;
        
        }
            
      }
    });
    
    submitbtn.style.display="none";
    clearTimeout(timeId);
    
    
    
  };
  
  const submitbtn = document.getElementById("btnSubmit");
  submitbtn.addEventListener('click',calculateScore);
  const resetbtn = document.getElementById("btnReset")
  resetbtn.addEventListener('click',()=>{ window.location.reload();});
  // call the displayQuiz function
  
  displayQuiz();
  
  

});
