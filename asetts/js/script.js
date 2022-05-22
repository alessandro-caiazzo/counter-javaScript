//div display valore numerico
let display = document.createElement('div');
document.getElementById('container').appendChild(display);
display.classList.add('display');

//inserimento valore in display
let numero = document.createElement('p');
let valore = document.createTextNode('0');
numero.appendChild(valore);
display.appendChild(numero);
numero.classList.add('numero');

//btns wrapper
let btnContainer = document.createElement('div');
display.after(btnContainer);
btnContainer.classList.add('btn-container');

//creazione bottoni
let btnMeno = document.createElement('button');
let btnMenoTesto = document.createTextNode('-');
btnMeno.appendChild(btnMenoTesto);
btnContainer.appendChild(btnMeno);
btnMeno.classList.add('btn-meno')

let btnReset = document.createElement('button');
let btnResetTesto = document.createTextNode('Reset');
btnReset.appendChild(btnResetTesto);
btnContainer.appendChild(btnReset);
btnReset.classList.add('btn-reset');

let btnPiu = document.createElement('button');
let btnPiuTesto = document.createTextNode('+');
btnPiu.appendChild(btnPiuTesto);
btnContainer.appendChild(btnPiu);
btnPiu.classList.add('btn-piu');

//creazione ball container
let backgroundContainer = document.createElement('div');
btnContainer.after(backgroundContainer);
backgroundContainer.classList.add('background-container');

//creazione ball-animation
let ball_1 = document.createElement('span');
backgroundContainer.appendChild(ball_1);
ball_1.classList.add('ball-1');
ball_1.classList.add('bubble');


let ball_2 = document.createElement('span');
backgroundContainer.appendChild(ball_2);
ball_2.classList.add('ball-2');
ball_2.classList.add('bubble');


let ball_3 = document.createElement('span');
backgroundContainer.appendChild(ball_3);
ball_3.classList.add('ball-3');
ball_3.classList.add('bubble');


let ball_4 = document.createElement('span');
backgroundContainer.appendChild(ball_4);
ball_4.classList.add('ball-4');
ball_4.classList.add('bubble');


let ball_5 = document.createElement('span');
backgroundContainer.appendChild(ball_5);
ball_5.classList.add('ball-5');
ball_5.classList.add('bubble');


let ball_6 = document.createElement('span');
backgroundContainer.appendChild(ball_6);
ball_6.classList.add('ball-6');
ball_6.classList.add('bubble');


let ball_7 = document.createElement('span');
backgroundContainer.appendChild(ball_7);
ball_7.classList.add('ball-7');
ball_7.classList.add('bubble');


let ball_8 = document.createElement('span');
backgroundContainer.appendChild(ball_8);
ball_8.classList.add('ball-8');
ball_8.classList.add('bubble');



//funzione Counter
let count = 0;

btnPiu.addEventListener('click', ()=>{
  count ++;
  numero.innerHTML = count;
});

btnMeno.addEventListener('click', ()=>{
  count --;
  numero.innerHTML = count;
});

btnReset.addEventListener('click', ()=>{
  count = 0;
  numero.innerHTML = count;
});
