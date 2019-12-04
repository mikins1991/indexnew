
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
document.getElementById('js-btn2').onclick = (event) => {
    event.preventDefault();
    // let textArea = document.querySelector('#js-area');
    // console.log(textArea.value);
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.area.value);
    console.log(form.elements.js_input.value);
}

// task1
document.querySelector('#js_btn').onclick = () => {
    alert('Task 1');
}
//task2
document.querySelector('#js_input2').onclick = () => {
    alert(document.querySelector('#js_input2').value);
}
//task3
document.querySelector('#js_p').onclick = () => {
    alert('task3');
}
