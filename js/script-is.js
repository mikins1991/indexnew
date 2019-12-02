let inputAge = document.querySelector('.age');
let buttonPro = document.querySelector('.button');

buttonPro.onclick = function () {
    if (inputAge > 18) {
        console.log('prohodi');
    } else {
        console.log('stop');
    }
}
