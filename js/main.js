let login
let levelCounter = document.getElementById('level')
let scoreCounter = document.getElementById('score')
let figures = document.getElementsByClassName('figure')
let initNum = 0
let inc = 0 //на сколько изменить
let score = 0; // счет
let level = 0  //уровень
let bool = true // добавить или убавить
let base = 0 // основание системы счисления
let transNum 
let actNum = null
var archive = [];

function print(){
  scoreCounter.innerHTML = "Ходов: " + score;
  levelCounter.innerHTML = "Уровень: " + level + " /30"

  document.getElementById('1000000').innerHTML = transNum[0]
  document.getElementById('0100000').innerHTML = transNum[1]
  document.getElementById('0010000').innerHTML = transNum[2]
  document.getElementById('0001000').innerHTML = transNum[3]
  document.getElementById('0000100').innerHTML = transNum[4]
  document.getElementById('0000010').innerHTML = transNum[5]
  document.getElementById('0000001').innerHTML = transNum[6]
  document.getElementById('base').innerHTML = base
}

function start() {
  alert('НАЧНЕМ?')
  login = document.getElementById("login").value
  document.getElementById("HUDBlock").hidden = false;
  document.getElementById("StartScreen").hidden = true;
  document.getElementById("ChangeNum").hidden = false;
  document.getElementById("Game").hidden = true;
  document.getElementById("Win").hidden = true;
  document.getElementById('player').innerHTML = "Игрок: " + login;
  window.setInterval(timer, 1000);



  document.getElementById('startAlert').innerHTML = "Привет " + login + " Тебе дан список чисел, для победы тебе нужно переставить их в порядке возрастания. Для перестановки кликни на 2 нужных числа. Желаю Удачи! "

  return login;
}

function timer() {
  var elem = document.getElementById('timer');
  elem.value = parseInt(elem.value) + 1; //parseInt преобразует строку в число
}

function setBase(elem){
  base = elem
  startGame()
}

function demo(){
  base = 10
  
  startGame()
}

function startGame() {
  document.getElementById("ChangeNum").hidden = true;
  document.getElementById("Game").hidden = false;

  initNum = Math.floor(Math.random( ) * (100 - 10 + 1)) + 10 //задает рандомное значение в десятичной
  inc = Math.floor(Math.random( ) * (2 - 1 + 1)) + 1 //задает рандомное число для сложения
  bool = Math.random() < 0.5 // задает рандомно true/ false
  transNum = [0,0,0,0,0,0,0]
  transNum.push(...parseInt(initNum, 10).toString(base))
  for(let i = 0; transNum.length-7; i++){
    transNum.shift()
  }
  transNum = transNum.map(function (item) {
    return parseFloat(item);
  });

  let out = ( bool == true) ? "Прибавьте к числу  " : "Вычтите из числа  ";

  console.log("нач " + initNum, "изм " + inc, "д/у " + bool,"осн " + base,"итог " + transNum)
  print()

  document.getElementById("numOutput").innerHTML = out + initNum + "  число  " + inc;

} 



function getActNumber(Num){
  actNum = Num
  console.log("выьран " + actNum + " элемент")
}

function checkWin() {
  let answer = (bool == true) ? initNum + inc : initNum - inc
  let a = transNum.toString()
  let b = +a.replace(/[\s.,%]/g, '')
  let checker = parseInt(b, base).toString(10)
  console.log('должно получиться ' + answer)
  console.log('а у вас'+ checker)
  if(answer == checker){
    setTimeout(alert('Ура. Вы прошли данный уровень. вы молодец'), 2000)
    level += 1;
    if(level == 30){
      setTimeout(youWin, 2000)
    }
    else{
      startGame()
      print()
    }
  }
}

function allStorage() {

  for (var i = 0; i<localStorage.length; i++) {
      archive[i] = localStorage.getItem(localStorage.key(i));
  }
  return archive
}
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

function youWin(){
  document.getElementById("Game").hidden = true;
  document.getElementById("Win").hidden = false;
  localStorage.setItem(score, login)

  allStorage()
  bubbleSortConcept1(archive) 

  
  
  document.getElementById('topOutput').innerHTML = 'Вот топ 10 игроков ' + archive
}



function plusOne() { 
  if(transNum[actNum] < base - 1){
    figures[actNum].style.animation = 'rotationPlus 2s linear'
    transNum[actNum] += 1
  } else{
    alert("цифры в числе не могут превышать основание системы счисления" )
  }
  console.clear
  console.log(transNum)
  
  setTimeout(print, 1000)
  checkWin()
  score += 1
}

function minusOne() {
  
  if(transNum[actNum] != 0){
    figures[actNum].style.animation = 'rotationMinus 2s linear'
    transNum[actNum] -= 1   
  }
  console.clear
  console.log(transNum)
  
  setTimeout(print, 1000)
  checkWin()
  score += 1
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
