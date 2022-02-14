//первое задание 
const titleText = document.querySelector('.h1');
titleText.onclick = function(){
    titleText.textContent = 'Очень рады вас видеть';
}
//второе задание 
const img = document.querySelector('.image');
img.onclick = function(){
    let Mysrc = img.getAttribute('src');
    if (Mysrc === 'img/like.png'){
        img.setAttribute('src','img/dislike.png');
    }
    else{
        img.setAttribute('src','img/like.png');
    }
}
//третье задание 
let i = 0;
let text='6 Rue be i Amiral be Coligny, Paris';
let speed = 150;
const btnClick = document.querySelector('.btnText');
function tupeWriter(){
    if (i < text.length){
        document.querySelector('.textPrint').innerHTML += text.charAt(i);
        i++;
        setTimeout(tupeWriter, speed);
    }
}
btnClick.addEventListener('click', tupeWriter);
//четвёртое задание 
timedInfo();
function timedInfo(){
    setTimeout(one, 1000)
    setTimeout(two, 3000)
    setTimeout(three, 5000)
}
function one(){
    document.querySelector('.orderTickets').innerHTML = 'Февральская акция';
}
function two(){
    document.querySelector('.orderTickets').innerHTML = '-30% на стоимость билетов';
}
function three(){
    document.querySelector('.orderTickets').innerHTML = 'Успейте приобрести по акции.';
}