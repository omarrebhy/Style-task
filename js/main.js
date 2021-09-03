let input = document.querySelectorAll('input');
let btnStyle =document.querySelector('button');
let div = document.querySelector('div');

function addStyle(){
    w = input[0].value;
    h = input[1].value;
    bg = input[2].value;

div.style.width = w + "px";
div.style.height = h + "px";
div.style.backgroundColor = bg;
}
btnStyle.addEventListener('click',addStyle);