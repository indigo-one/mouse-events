"use strict";

let btn = document.querySelector('#btn');
btn.onclick = click;
function click() {
  let blockOne = document.querySelector('.block-one');
  blockOne.style.width = '100px';
  blockOne.style.height = '40px';
  blockOne.style.transition = '1s';
  blockOne.style.opacity = '0';
}

btn.style.border = '1px solid #000';
btn.style.boxShadow = '0 0 10px #000';
btn.style.background = 'rgb(10, 160, 0)';
btn.style.borderRadius = '5px';
btn.style.color = 'rgb(179, 179, 179)';
btn.style.width = '140px';
btn.style.height = '50px';
btn.style.outline = 'none';
btn.style.fontSize = '20px';
btn.style.margin = '30px';
//----------------------------------------------------
let btn1 = document.querySelector('#btn1');
btn1.ondblclick = click1; //двойной клик
function click1() {
  let blockTwo = document.querySelector('.block-two');
  blockTwo.style.width = '70px';
  blockTwo.style.height = '25px';
  blockTwo.style.transition = '1s';
  blockTwo.style.opacity = '0';
}
btn1.style.border = '1px solid #000';
btn1.style.boxShadow = '0 0 10px #000';
btn1.style.background = 'rgb(150, 0, 146)';
btn1.style.borderRadius = '5px';
btn1.style.color = 'rgb(179, 179, 179)';
btn1.style.width = '140px';
btn1.style.height = '50px';
btn1.style.outline = 'none';
btn1.style.fontSize = '20px';
btn1.style.margin = '30px';
//----------------------------------------------------
let btn3 = document.querySelector('#btn3');
btn3.onmousemove = click3; //наведение мыши
function click3() {
  let blockThree = document.querySelector('.block-three');
  blockThree.style.width = '70px';
  blockThree.style.height = '25px';
  blockThree.style.transition = '1s';
  console.log('Наведение работает');
  blockThree.style.opacity = '0';
}

btn3.style.border = '1px solid #000';
btn3.style.boxShadow = '0 0 10px #000';
btn3.style.background = 'rgb(1, 145, 152)';
btn3.style.borderRadius = '5px';
btn3.style.color = 'rgb(179, 179, 179)';
btn3.style.width = '140px';
btn3.style.height = '50px';
btn3.style.outline = 'none';
btn3.style.fontSize = '20px';
btn3.style.margin = '30px';
//----------------------------------------------------
let btn4 = document.querySelector('#btn4');
btn4.onmouseenter = click4; // onmouseenter срабатывает при наведении мышкой, похоже на ховер
function click4() {
  let blockFour = document.querySelector('.block-four');
  blockFour.style.width = '240px';
  blockFour.style.height = '240px';
  blockFour.style.transition = '1s';
  console.log('Наведение работает');
  blockFour.style.opacity = '0';
}

btn4.style.border = '1px solid #000';
btn4.style.boxShadow = '0 0 10px #000';
btn4.style.background = 'rgb(255, 0, 0)';
btn4.style.borderRadius = '5px';
btn4.style.color = 'rgb(179, 179, 179)';
btn4.style.width = '140px';
btn4.style.height = '50px';
btn4.style.outline = 'none';
btn4.style.fontSize = '20px';
btn4.style.margin = '30px';
//----------------------------------------------------
let btn5 = document.querySelector('#btn5');
btn5.onmouseleave = click5; // onmouseleave срабатывает после того как убираешь мышь с наведенного обьекта
function click5() {
  let blockFive = document.querySelector('.block-five');
  blockFive.style.width = '240px';
  blockFive.style.height = '240px';
  blockFive.style.transition = '1s';
  console.log('Наведение работает');
  blockFive.style.opacity = '0';
}

btn5.style.border = '1px solid #000';
btn5.style.boxShadow = '0 0 10px #000';
btn5.style.background = 'rgb(255, 118, 0)';
btn5.style.borderRadius = '5px';
btn5.style.color = 'rgb(179, 179, 179)';
btn5.style.width = '140px';
btn5.style.height = '50px';
btn5.style.outline = 'none';
btn5.style.fontSize = '20px';
btn5.style.margin = '30px';
//----------------------------------------------------
let btn6 = document.querySelector('#btn6');
btn6.onmousewheel = click6; // элемент реагирует на прокрутку колеса мыши
function click6() {
  
  location.reload(); //Перезагрузка страницы
  return false; //не дает при прокрутке перемещаться окуну браузера
 
}

btn6.style.border = '1px solid #000';
btn6.style.boxShadow = '0 0 10px #000';
btn6.style.background = '#FFEB3B';
btn6.style.borderRadius = '5px';
btn6.style.color = 'rgb(179, 179, 179)';
btn6.style.width = '145px';
btn6.style.height = '50px';
btn6.style.outline = 'none';
btn6.style.fontSize = '20px';
btn6.style.margin = '30px';
