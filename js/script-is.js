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
let jsInput11 = document.getElementById('js-input11');
let jsInput12 = document.getElementById('js-input12');

let jsOut1 = document.getElementById('js-out1');

jsButton1.onclick = () => {
    if (jsInput11.value > jsInput12.value) {
        jsOut1.innerHTML = `${jsInput11.value}`;
    } else {
        jsOut1.innerHTML = `${jsInput12.value}`;
    }
}
