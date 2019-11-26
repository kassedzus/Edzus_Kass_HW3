console.log("Starting my FIZZ-BUZZ app")

const firstNum = document.getElementById("start-num");
const secondNum = document.getElementById("end-num");
const container = document.getElementById("fizzbuzz-cont")
const gen = document.getElementById("generate");
const head = document.getElementById("head");
const clearBtn = document.getElementById("btn1");
const restartBtn = document.getElementById("btn2");
const fizzBtn = document.getElementById("btn3");
const buzzBtn = document.getElementById("btn4");
const fizzbuzzBtn = document.getElementById("btn5");

function clearCont() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// WARNING MESSAGE
const warning = document.createElement("p");
warning.setAttribute("id", "warning");
warning.innerText = "Warning! Numbers can't be negative. Number range is between 0 and 100. Second number can't be smaller than first number";

// function clearWarn() {
//     let node = document.getElementById("warning");
//     if (node.parentNode) {
//         node.parentNode.removeChild(node);
//     }
// }

// GENERATE BUTTON - GENERATES DIVS BASED ON INPUT NUMBERS AND SORTS THEM (FIZZ, BUZZ or FIZZBUZZ or just a number)
gen.onclick = () => {
    console.log("Start number is: " + firstNum.value);
    console.log("End number is: " + secondNum.value);
    console.log("Generating divs...");
    clearCont();
    // clearWarn();

    for (let i = parseInt(firstNum.value); i <= parseInt(secondNum.value); i++) {
        let fN = parseInt(firstNum.value);
        let sN = parseInt(secondNum.value);
        // console.log("First num is:" + fN + " Second num is " + sN);



        const numDiv = document.createElement("div")

        if (sN < fN || sN > 100 || fN < 0 || sN < 0) {
            head.appendChild(warning);
            break;
        } else if (i % 3 == 0 && i % 5 == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = FIZZ-BUZZ";
            numDiv.setAttribute("class", "fizzbuzz");
        } else if (i % 3 == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = FIZZ";
            numDiv.setAttribute("class", "fizz");
        } else if (i % 5 == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = BUZZ";
            numDiv.setAttribute("class", "buzz");
        } else {
            container.appendChild(numDiv);
            numDiv.innerText = i;
            numDiv.setAttribute("class", "number")
        }
    }
}

// CLEAR AND RESTART BUTTONS
clearBtn.onclick = () => {
    clearCont();
    firstNum.value = null;
    secondNum.value = null;
}

restartBtn.onclick = () => {

}

// FIZZ, BUZZ and FIZZBUZZ BUTTONS
fizzBtn.onclick = () => {
    for (let el of document.querySelectorAll('div.buzz, div.fizzbuzz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.fizz")) {
        el.style.display = "block";
    }
}
buzzBtn.onclick = () => {
    for (let el of document.querySelectorAll('div.fizz, div.fizzbuzz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.buzz")) {
        el.style.display = "block";
    }
}
fizzbuzzBtn.onclick = () => {
    for (let el of document.querySelectorAll('div.buzz, div.fizz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.fizzbuzz")) {
        el.style.display = "block";
    }
}