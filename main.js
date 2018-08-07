const button = document.getElementsByTagName("button");
const button1 = button[0];
const button2 = button[1];
const button3 = button[2];
const button4 = button[3];
const button5 = button[4];
const button6 = button[5];
const button7 = button[6];
const button8 = button[7];
const button9 = button[8];
const button10 = button[9];
const button11 = button[10];
const button12 = button[11];
const button13 = button[12];
const button14 = button[13];
const button15 = button[14];
const button16 = button[15];
const button17 = button[16];
const button18 = button[17];
const button19 = button[18];
const button20 = button[19];

const inputBoxValue = document.getElementsByTagName("textarea")[0];

//Functions for button action..Basically the things below allow the button value to be placed into the inputbox when the button is clicked.
function addtoInput1 () {
    inputBoxValue.value += button1.innerHTML;
}
function addtoInput2 () {
    inputBoxValue.value += button2.innerHTML;
}
function addtoInput5 () {
    inputBoxValue.value += button5.innerHTML;
}
function addtoInput6 () {
    inputBoxValue.value += button6.innerHTML;
}
function addtoInput7 () {
    inputBoxValue.value += button7.innerHTML;
}
function addtoInput8 () {
    inputBoxValue.value += button8.innerHTML;
}
function addtoInput9 () {
    inputBoxValue.value += button9.innerHTML;
}
function addtoInput10 () {
    inputBoxValue.value += button10.innerHTML;
}
function addtoInput11 () {
    inputBoxValue.value += button11.innerHTML;
}
function addtoInput12 () {
    inputBoxValue.value += button12.innerHTML;
}
function addtoInput13 () {
    inputBoxValue.value += button13.innerHTML;
}
function addtoInput14 () {
    inputBoxValue.value += button14.innerHTML;
}
function addtoInput15 () {
    inputBoxValue.value += button15.innerHTML;
}
function addtoInput16 () {
    inputBoxValue.value += button16.innerHTML;
}
function addtoInput17 () {
    inputBoxValue.value += button17.innerHTML;
}
function addtoInput18 () {
    inputBoxValue.value += button18.innerHTML;
}

function addtoInput20 () {
    inputBoxValue.value += button20.innerHTML;
}

function clearScreen () {
    inputBoxValue.value = "";
}

function outputValue () {
    let firstNum = "";
    let secondNum = "";
    let thirdNum = "";
    let newNum;
    let input = inputBoxValue.value;
//stores first number in firstNum variable as a string
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "+" || input[i] === "-" || input[i] === "/" || input[i] === "*") {
            break;
        } else {
            firstNum += input[i];
        }
    }
    //Number(firstNum); 
//stores mathematical operator and second number in secondNum variable as a string
for (let i = 0; i < input.length; i++) {
    if (input[i] === "+" || input[i] === "-" || input[i] === "/" || input[i] === "*") {
        for (i; i < input.length; i++) {
            secondNum += input[i];
        }
    }
}
//Concatenates both strings together and then uses the eval function to evaluate the final answer
    let almost = firstNum + secondNum;
    let final = math.eval(almost);
    inputBoxValue.value = final;
}

function deleteOneCharacter () {
    inputBoxValue.value = inputBoxValue.value.slice(0,-1);
}

button1.addEventListener("click", addtoInput1);
button2.addEventListener("click", addtoInput2);
button3.addEventListener("click", deleteOneCharacter);
//Clear button
button4.addEventListener("click", clearScreen);
button5.addEventListener("click", addtoInput5);
button6.addEventListener("click", addtoInput6);
button7.addEventListener("click", addtoInput7);
//Addition
button8.addEventListener("click", addtoInput8);
button9.addEventListener("click", addtoInput9);
button10.addEventListener("click", addtoInput10);
button11.addEventListener("click", addtoInput11);
//Subtraction
button12.addEventListener("click", addtoInput12);
button13.addEventListener("click", addtoInput13);
button14.addEventListener("click", addtoInput14);
button15.addEventListener("click", addtoInput15);
button16.addEventListener("click", addtoInput16);
button17.addEventListener("click", addtoInput17);
button18.addEventListener("click", addtoInput18);
//Calculate and output answer
button19.addEventListener("click", outputValue);
//Division
button20.addEventListener("click", addtoInput20);




