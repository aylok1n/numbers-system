let scoreCounter = document.getElementById('score');
let login;
const numbers = [];
let span = document.querySelectorAll('span');
let spanValues = [];
let bestResult = [];
let currentArr = [];

let score = 0;


function start() {
  login = document.getElementById("login").value
  document.getElementById("HUDBlock").hidden = false;
  document.getElementById("StartScreen").hidden = true;
  document.getElementById("str2").hidden = false;
  document.getElementById('player').innerHTML = "Игрок: " + login;
  window.setInterval(timer, 1000);

  scoreCounter.innerHTML = "Ходов: " + score;

  alert("Привет " + login + " Тебе дан список чисел, для победы тебе нужно переставить их в порядке возрастания. Для перестановки кликни на 2 нужных числа. Желаю Удачи! ");


  
  let arr = spanValues.slice(0);
  bestResult = arr.sort(function (a, b) {
    if (a > b)
      return 1;
    if (a < b)
      return -1;
    return 0
  });
  console.log(bestResult);

  return login;
}



function timer() {
  var elem = document.getElementById('timer');
  elem.value = parseInt(elem.value) + 1; //parseInt преобразует строку в число
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ПОБЕДНЫЙ ЭКРАН БРАТЬ ОТСЕДА

// function replace(element1, element2) {
//   var clonedElement1 = element1.cloneNode(true);
//   var clonedElement2 = element2.cloneNode(true);
//   element1.textContent = clonedElement2.textContent;
//   element2.textContent = clonedElement1.textContent;
//   while (numbers.length) {
//     numbers.pop()
//   }
//   score++;
//   scoreCounter.innerHTML = "Счет: " + score;

//   currentArr = [];
//   span.forEach(function(e) {
//     currentArr.push(e.textContent)
//   });

//   if (currentArr.toString() == bestResult.toString()) {
//     let timeToWin = document.getElementById('timer').textContent
//     let points = 100 - (score * 5 - (timeToWin / 5));
//     alert(`Победа! Ваше время: ${timeToWin}. Вы сделали ${score} ходов и набрали ${points} очков. Обновите страницу для новой игры.`)
    
//     localStorage.setItem(login, points)
//   }

//   return clonedElement1;
// }

