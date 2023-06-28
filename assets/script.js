// create questions
var mainIndex = 0;
var buttonContainer = document.querySelector(".button-container");
// var hasAns = false;
var question =
    [
        {
            prompt: 'What year was the Declaration of Independence signed?',
            option: ['1492', '1812', '1776', '1787'],
            ans: "1776",
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
//console.log(question)
// define the function
function showQuestion(q) {
    buttonContainer.innerHTML="";
    //show question
    var titleDiv = document.getElementById('prompt');
    titleDiv.textContent = q.prompt;
    //show options
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    li1.textContent = q.option[0];
    li2.textContent = q.option[1];
    li3.textContent = q.option[2];
    li4.textContent = q.option[3];

    buttonContainer.appendChild(li1);
    buttonContainer.appendChild(li2);
    buttonContainer.appendChild(li3);
    buttonContainer.appendChild(li4);


    buttonContainer.addEventListener("click", function (event) {
        // event.stopPropagation()
        event.stopImmediatePropagation();
        var element = event.target;
        // console.log(element);
        console.log(element.textContent);
        console.log(question[mainIndex].ans);
        if (element.textContent === question[mainIndex].ans) {
            console.log('Correct!');
            mainIndex++;
            nextQ(mainIndex);
        } else {
            console.log('Incorrect!');
            mainIndex++;
            nextQ(mainIndex);
        }
        })

};
function nextQ(mainIndex) {
    console.log(`mainIndex in nexQ`, mainIndex);
    showQuestion(question[mainIndex]);
}
nextQ(mainIndex);


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