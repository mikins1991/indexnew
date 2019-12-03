const inputAge = document.querySelector('.age');
const buttonPro = document.querySelector('.button');

buttonPro.onclick = () => {
    let num = +inputAge.value;
    if (num >= 18 && num <= 60) {
        console.log('Go');
    } else if (num > 60) {
        console.log("OK?");
    } else {
        console.log('stop');
    }

    switch (num) {
        case 17:
            console.log('Через год');
            break;
        case 18:
            console.log('отлично');
            break;
        default:
            console.log('oonnonono')
    }
}

// task1
let jsInput = document.getElementById('js-input');
let jsButton = document.getElementById('js-button');
let jsOut = document.getElementById('js-out');

jsButton.onclick = () => {
    let num = +jsInput.value;
    console.log(num == 4);
    if (num == 4) {
        jsOut.innerHTML = 'true';
    } else {
        jsOut.innerHTML = 'false';
    }
}
// task2
const jsButton1 = document.getElementById('js-button1');
const jsInput11 = document.getElementById('js-input11');
const jsInput12 = document.getElementById('js-input12');

let jsOut1 = document.getElementById('js-out1');

jsButton1.onclick = () => {
    if (jsInput11.value > jsInput12.value) {
        jsOut1.innerHTML = `${jsInput11.value}`;
    } else {
        jsOut1.innerHTML = `${jsInput12.value}`;
    }
}

// task 40

const jsButton4 = document.getElementById('js-button4');
const jsInput4 = document.getElementById('js-input4');
const jsOut4 = document.getElementById('js-out4');
const jsOut5 = document.getElementById('js-out5');
const thisYear = 2019;

jsButton4.onclick = () => {
    let birth = +jsInput4.value;
    console.log(birth)
    const age = thisYear - birth;
    console.log(age);
    if (age >= 18) {
        jsOut4.innerHTML = 1;
    } else {
        jsOut4.innerHTML = 0;
    }

    if (birth > 0) {
        jsOut5.innerHTML = 1;
    } else if (birth < 0) {
        jsOut5.innerHTML = 'm';
    } else {
        jsOut5.innerHTML = 0;
    }
}

// task 8

const jsButton7 = document.getElementById('js-button7');
const jsInput7 = document.getElementById('js-input7');
const jsOut7 = document.getElementById('js-out7');

jsButton7.onclick = () => {
    let balance = jsInput7.value % 2;
    if (balance == 0) {
        jsOut7.innerHTML = 'четное';
    } else {
        jsOut7.innerHTML = 'нечетное';
    }
}

// task 10

const jsButton8 = document.getElementById('js-button7');
const jsName = document.getElementById('js-name');

jsButton8.onclick = () => {
    let name;
    if (jsName.value == '' || jsName.value == ' ') {
        alert('введите имя');
    } else {
        alert('Hello ' + jsName.value);
    }
}

