// what I need: 
// 1. function to display the number pressed on the display
// 2. function to calculate the numbers
// 3. function to clear the display

// query selectors 
let buttons = document.querySelectorAll('li button');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');


// main part that uses the functions
function displayButtons() {
    buttons.forEach(b => {
        if (b.textContent === '=') {
            b.addEventListener('click', function(e) {
                // console.log(b.textContent)
                calculate();
            })
        } else {
        b.addEventListener('click', function(e) {
            // console.log('clicked', b.textContent)
            addButtonValues(b.textContent);
        })
    }
    })
}

// adds buttons to the display, used in displayButtons function
function addButtonValues(b) {
    display.textContent += b;
    // console.log(display, 'display');
}

// evaluates what is on the display, used in displayButtons function
function calculate(b) {
    display.textContent = eval(display.textContent);
}

// resets the display
function clearDisplay() {
    clear.addEventListener('click', function(e) {
        display.textContent = '';
        // console.log('cleared')
    })
   
}

clearDisplay();
displayButtons()










// OLD WORK... DIDN'T WORK LOL
// Numbers
// const numbers = document.querySelector('.numbers');
// // console.log('hello there');
// function numberCreator(something) {
//     const numsDiv = document.createElement('div');
//     const nums = document.createElement('ul')

//     data.forEach((i) => {
//         const items = document.createElement('li');
//         items.textContent = i;
//         numsDiv.appendChild(items)
//     })

//     nums.appendChild(numsDiv);
//     return numsDiv;
// }
// numbers.appendChild(numberCreator(data))
// // Operators
// const operatorChars = document.querySelector('.operators');
// function operatorCreator(something) {
//     const opDiv = document.createElement('div');
//     const op = document.createElement('ul');

//     operators.map((value, i) => {
//         const items = document.createElement('li');
//         items.textContent = value.char;
//         opDiv.appendChild(items);
//     })
//     op.appendChild(opDiv);
//     return opDiv;
// }
// operatorChars.appendChild(operatorCreator(operators))

// // Specials
// const specialChars = document.querySelector('.specials');
// function specialsCreator(something) {
//     const specDiv = document.createElement('div');
//     const spec = document.createElement('ul');

//     specials.forEach((i) => {
//         const items = document.createElement('li');
//         items.textContent = i;
//         specDiv.appendChild(items)
//     })
//     spec.appendChild(specDiv);
//     return specDiv;
// }
// specialChars.appendChild(specialsCreator(specials));

// // Display
// const printed = document.getElementsByTagName("li");
// const screen = document.querySelectorAll('p')[0];
// const overarching = document.querySelector('.screen')
// console.log(printed);

// function displayCreator(something) {

//     const screenDiv = document.createElement('div');
    
//     for(i=0;i<printed.length;i++) {
//         if(printed[i].innerHTML === '=') {
//             printed[i].addEventListener('click', console.log(i))
//         } else{
//             printed[i].addEventListener('click', console.log(i))
//         } 
//     }
    
//     return screenDiv;
// }
// overarching.appendChild(displayCreator(screen))

