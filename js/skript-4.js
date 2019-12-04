
// document.querySelector('#js-button').onclick = () => {
//     console.log(document.querySelector('#js-input').value);
//     document.querySelector('#js-input1').style.backgroundColor =
//         document.querySelector('#js-input').value;
// }

// document.querySelector('#js-input').oninput = () => {
//     console.log(document.querySelector('#js-input').value);
//     document.querySelector('span').innerHTML = document.querySelector('#js-input').value;
// }

document.querySelector('#js-btn').onclick = () => {
    console.log(document.querySelector('#js-input2').value);
    let myCheckBox = document.querySelector('#js-input2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    } else {
        console.log('Не нажат');
    }
}