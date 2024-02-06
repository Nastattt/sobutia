// function hello(){
//     alert('Hello')

// // }
// let elem = document.querySelector('.btn2')
// // elem.onclick = hello
// // function hello() {
// //     alert('Hello')
// // }

// }
// let elem = document.querySelector('.btn2')
// let input = document.querySelector('.input')
// elem.onclick = hello
// function hello() {
//     alert('Hello')
//     console.log(input.value)
//     elem.removeEventListener('click',hello)
// }

// function change(text){
//     let state = confirm(text);
//     if (state){
//         document.querySelector('.btn').innerHTML = 'hello'
//     }
// }

// elem.addEventListener('mouseover',hello)
// elem.addEventListener('click', () => console.log('onmouseovner'))


// elem.onclick  =function (event){
//     console.log(event.type)
// }
// elem.addEventListener('click', (event) => console.log('event.type'))
// elem.addEventListener('mouseover', (event) => console.log('event.currentTarnget'))
// elem.addEventListener('mouseout', (event) => console.log('event.type'))

let div = document.querySelector('.block');
let ul = document.querySelector('.list');
let li = document.querySelector('.item');

div .addEventListener('click', () => console.log('div'))
