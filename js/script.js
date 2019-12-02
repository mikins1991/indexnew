let imputIn = document.querySelector('.imput-In');
let buttonIn = document.querySelector('.button-In');
let div = document.querySelector('.out');

buttonIn.onclick = function () {
    console.log('Rabotaet');
    let b = +imputIn.value;
    console.log(b);
    div.innerHTML = b;
    imputIn.value = '';
}

let a = 7;
let b = 'hello';
console.log(a + b);
// вывод результата двух строчек
let imputTwoGo = document.querySelector('.imputTwo');
let surnameGo = document.querySelector('.surname');
let buttonTwoGo = document.querySelector('.buttonTwo');
let divGo = document.querySelector('.outGo');

buttonTwoGo.onclick = function () {
    surnameGo.style.border = '2px solid red';
    let c = `hello ` + imputTwoGo.value + ` ` + surnameGo.value;
    divGo.innerHTML = c;
    console.log(c);
}
