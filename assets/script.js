// create questions
var mainIndex = 0;
var buttonContainer = document.querySelector(".button-container");
// var hasAns = false;
var startScreen = document.querySelector(".start");
var startButton = document.querySelector(".start-button");
var gameOver = document.querySelector(".gameOver");
gameOver.classList.add('hide')
var questionContainer = document.querySelector(".questionContainer");
var score = document.getElementById("score");
var question =
    [
        {
            prompt: 'What year was the Declaration of Independence signed?',
            option: ['1492', '1812', '1776', '1787'],
            ans: '1776',
        },
        {
            prompt: 'What year was the Magna Carta signed?',
            option: ['1214', '1171', '1277', '1215'],
            ans: "1215",
        },
        {
            prompt: 'What year was the Constitution signed?',
            option: ['1787', '1842', '1612', '1789'],
            ans: "1787",
        },
        {
            prompt: 'What year did WW2 end?',
            option: ['1914', '1918', '1941', '1945'],
            ans: "1945",
        },
    ];

function init(){
    showQuestion();
    startScreen.classList.add('hide')
    startTimer();

}

var scoreboard = document.getElementById("scoreboard");
var highScore = [];
function renderScores() {
    // Clear todoList element and update todoCountSpan
    scoreboard.innerHTML = "";
  
    // Render a new li for each todo
    for (var i = 0; i < highScore.length; i++) {
      var userInfo = highScore[i];
      var li = document.createElement("li");
      li.textContent = userInfo;
      scoreboard.appendChild(li);
    }
  }
  
function onLoad(){
  // Get stored todos from localStorage
  var oldScores = JSON.parse(localStorage.getItem("historyScore"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (oldScores !== null) {
    highScore = oldScores;
  }

  // This is a helper function that will render todos to the DOM
  renderScores();
} 
onLoad()

var form = document.querySelector(".form");

function dataStore(){
      // Stringify and set key in localStorage to todos array      
      // Add submit event to form
        form.addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username"); 
        var user = username.value+" : " + score.textContent;
        highScore.push(user);
        localStorage.setItem("historyScore", JSON.stringify(highScore));
      
        // Store updated todos in localStorage, re-render the list
        renderScores();
      });
}

//console.log(question)
// define the function
function showQuestion() {
    var questionItem = question[mainIndex]
    buttonContainer.innerHTML="";
    //show question
    var titleDiv = document.getElementById('prompt');
    titleDiv.textContent = questionItem.prompt;
    //show options

    for(var i = 0; i < questionItem.option.length; i++){
        var li1 = document.createElement("button");
        li1.textContent = questionItem.option[i];
        li1.setAttribute('value', questionItem.option[i])
        li1.setAttribute('class', 'btn')

        li1.addEventListener('click', function(){

            if(this.value !== questionItem.ans)
            {
                count-=5;
            }

            mainIndex++

            if(mainIndex === question.length){
                alert('nothing left')
                return;
            }else{
                showQuestion()
            }
        })

        buttonContainer.appendChild(li1)

    }    

};

var score = document.getElementById("score");
startButton.addEventListener('click',init);
var count = 30;
var timerDisplay = document.querySelector("#timer")
// Timer function
function gameOverLogic(){
    questionContainer.classList.add("hide");
    score.innerHTML = count;
    gameOver.classList.remove("hide");
    dataStore();
}


function startTimer(){

var timer = setInterval(function() {
  console.log(count);
  count--;
  timerDisplay.textContent = count;
  if(count === 0 || mainIndex===question.length) {
    clearInterval(timer)
    gameOverLogic();
    }
}, 1000)};

// var stopInterval = function() {
//   alert('time is up!');
//   clearInterval(timer);
// }
    // var li1 = document.createElement("li");
    // var li2 = document.createElement("li");
    // var li3 = document.createElement("li");
    // var li4 = document.createElement("li");

    // li1.textContent = q.option[0];
    // li2.textContent = q.option[1];
    // li3.textContent = q.option[2];
    // li4.textContent = q.option[3];

    // buttonContainer.appendChild(li1);
    // buttonContainer.appendChild(li2);
    // buttonContainer.appendChild(li3);
    // buttonContainer.appendChild(li4);


    // buttonContainer.addEventListener("click", function (event) {
    //     // event.stopPropagation()
    //     event.stopImmediatePropagation();
    //     var element = event.target;
    //     // console.log(element);
    //     console.log(element.textContent);
    //     console.log(question[mainIndex].ans);
    //     if (element.textContent === question[mainIndex].ans) {
    //         console.log('Correct!');
    //         mainIndex++;
    //         nextQ(mainIndex);
    //     } else {
    //         console.log('Incorrect!');
    //         mainIndex++;
    //         nextQ(mainIndex);
    //     }
    //     })
// function nextQ(mainIndex) {
//     console.log(`mainIndex in nexQ`, mainIndex);
//     showQuestion(question[mainIndex]);
// }
// nextQ(mainIndex);


//   abcd.forEach(function (element, index) {
//     console.log(`index inside foreach`, index);
//     element.textContent = q.option[index];
//     //user input and showing correct ans on console
//     element.addEventListener('click', function () {
//       if (q.ans == index) {
//         console.log('Correct!');
//       } else {
//         console.log('Incorrect!');
//       }
//       hasAns = true;
//       mainIndex++;
//     });
//   });
// console.log (showQuestion);
//Execute Function
// showQuestion(question);
    // var abcd = document.querySelectorAll('.option');
    // console.log(abcd);
    // abcd.forEach(function (element, index) {
    //     element.textContent = q.option[index];
    //     // element.addEventListener('click', function () 
    //     // {
    //     if (q.ans === index) {
    //         console.log('Correct!');
    //     } else {
    //         console.log('Incorrect!');
    //     }
    //     // incrementing mainIndex

    //     // });  console.log(mainIndex);

    //     //   });
    // })