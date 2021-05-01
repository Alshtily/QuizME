// document.getElementById('next').onclick = function () {
//   if (currentQuestionIndex >= 0) {
//     currentQuestionIndex = currentQuestionIndex - 1;
//     console.log(currentQuestionIndex);
//     showQuestion(currentQuestionIndex);
//   } else {
//     console.log('-mince 1');
//   }
// };

var total_seconds = 30 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById('quiz-time-left').innerHTML =
    'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);

function score() {
  // stop timer
  clearInterval(timer);

  //Referencing the value of the questions
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;

  // disable form
  var elements = document.getElementById('questions').elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }

  //Array for the questions
  var questions = [q1, q2];

  //Answers for each question
  var answers = ['a', 'b'];

  //variable to keep track of the points
  var points = 1;
  var total = 2;
  //max score

  //Making use of a for loop to iterate over the questions and answers arrays
  for (var i = 0; i < total; i++) {
    if (questions[i] == answers[i]) {
      points = points + 1; //Increment the score by 2 for every correct answer given
    }
  }

  //CSS for questions
  var q = document.getElementById('p');

  q.style.fontSize = '40px';
  q.style.textAlign = 'center';
  q.innerHTML = 'You got ' + points + ' out of ' + total;

  return false;
}

/*  JavaScript Code By Saad Almutairi 7.29PM */

let shuffledQuestions, currentQuestionIndex;

let Quizes = [];

document.getElementById('btn').onclick = function () {
  let Quiz = document.getElementById('q').value;
  let a1 = document.getElementById('a1').value;
  let a2 = document.getElementById('a2').value;
  let a3 = document.getElementById('a3').value;
  let a4 = document.getElementById('a4').value;

  if (Quiz == '' || a1 == '' || a2 == '') {
    console.log('Saad Come Please');
    alert('Somthing Eror :(');
  } else {
    Quizes.push({
      Quiz: Quiz,
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
    });

    map();
  }
};

function map() {
  let listofCards = document.getElementById('cards');
  listofCards.innerHTML = '';
  Quizes.map((item) => {
    listofCards.innerHTML =
      listofCards.innerHTML +
      `
         
    <div class="card">
    <h1>Quiestion : ${item.Quiz} ?</h1>
    <h2 class="a1">Correct Answer : ${item.a1}</h2>

    
   
</div>
        `;
  });
}

map();

function showQuestion() {
  //   console.log(question);
  //   document.getElementById('unhidn').innerHTML = '';

  //   let thisQ = Quizes[question];

  document.getElementById('unhidn').innerHTML = `
  <div id="quiz-time-left">

  </div>
  <form name="form" id="questions" >





    <h3>1. Do You Love Me?</h3>
    <input type="radio" name="q1"  value="Yes">a. Yes<br>
    <input type="radio" name="q1" value="No">b. No<br>
    <input type="radio" name="q1" value="Maybe">c. Maybe <br>
    <input type="radio" name="q1" value="Baby">d. Baby<br>
  
    <h3>2. Do Love Omar ?</h3>
    <input type="radio" name="q2"  value="Yes">a. Yes<br>
    <input type="radio" name="q2" value="No">b. No<br>
    <input type="radio" name="q3" value="Maybe">c. Maybe<br>
    <input type="radio" name="q4" value="Baby">d. Baby<br>
  
  
    <br>
    
    <br>




    
    
    <button onclick="return score()">Supmit</button>
    
    <p id="p"></p>
  </form>
      `;
}

// function startBu() {
//   console.log(document.getElementById('hide').classList.toggle('hedn'));
// }

document.getElementById('start').onclick = function () {
  document.getElementById('hide').classList.toggle('hedn');
  document.getElementById('unhidn').classList.remove('heddn');

  currentQuestionIndex = Quizes.length;
  console.log(currentQuestionIndex);

  currentQuestionIndex = currentQuestionIndex - 1;
  showQuestion();

  //   setNextQuestion();
};

document.getElementById('stop').onclick = function () {
  document.getElementById('hide').classList.toggle('hedn');
  document.getElementById('unhidn').classList.add('heddn');
};
