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
const buttons = document.querySelector(".buttons");
const warningMsg = document.getElementById("warningMsg")
const fizzValue = document.getElementById("fizz-value");
const buzzValue = document.getElementById("buzz-value");

//  FUNCTION FOR CLEARING WARNING MESSAGE AND GENERATED DIVS
function clearCont() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    while (warningMsg.firstChild) {
        warningMsg.removeChild(warningMsg.firstChild);
    }
}


// FUNCTION FOR GENERATING DIVS
function genDivs() {
    for (let i = parseInt(firstNum.value); i <= parseInt(secondNum.value); i++) {
        let fN = parseInt(firstNum.value);
        let sN = parseInt(secondNum.value);
        let fV = parseInt(fizzValue.value);
        let bV = parseInt(buzzValue.value);

        const numDiv = document.createElement("div")

        if (sN < fN || sN > 100 || fN <= 0 || sN <= 0) {
            // WARNING MESSAGE
            const warning = document.createElement("p");
            warning.setAttribute("id", "warning");
            warning.innerText = "Warning! Number range must be between 1 and 100. Second number can't be smaller than first number";
            warningMsg.appendChild(warning);
            break;
        } else if (i % fV == 0 && i % bV == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = FIZZ-BUZZ";
            numDiv.setAttribute("class", "fizzbuzz alldivs");
        } else if (i % fV == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = FIZZ";
            numDiv.setAttribute("class", "fizz alldivs");
        } else if (i % bV == 0) {
            container.appendChild(numDiv);
            numDiv.innerText = i + " = BUZZ";
            numDiv.setAttribute("class", "buzz alldivs");
        } else {
            container.appendChild(numDiv);
            numDiv.innerText = i;
            numDiv.setAttribute("class", "number alldivs")
        }
    }

}

// GENERATE BUTTON - GENERATES DIVS BASED ON INPUT NUMBERS AND SORTS THEM (FIZZ, BUZZ or FIZZBUZZ or just a number)
gen.onclick = () => {
    console.log("Start number is: " + firstNum.value);
    console.log("End number is: " + secondNum.value);
    console.log("Generating divs...");

    clearCont();
    genDivs();
}

// CLEAR AND RESTART BUTTONS
clearBtn.onclick = () => {
    console.log("Clearing all divs");
    clearCont();
    console.log("Resetting range values");
    firstNum.value = 1;
    secondNum.value = 100;
}

restartBtn.onclick = () => {
    console.log("Clearing all divs");
    clearCont();
    console.log("Resetting values");
    firstNum.value = 1;
    secondNum.value = 100;
    fizzValue.value = 3;
    buzzValue.value = 5;
    console.log("Generating default divs")
    genDivs();

}

// FIZZ, BUZZ and FIZZBUZZ SORTING BUTTONS
fizzBtn.onclick = () => {
    console.log("Showing only FIZZ numbers");
    for (let el of document.querySelectorAll('div.buzz, div.fizzbuzz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.fizz")) {
        el.style.display = "flex";
    }
}
buzzBtn.onclick = () => {
    console.log("Showing only BUZZ numbers");
    for (let el of document.querySelectorAll('div.fizz, div.fizzbuzz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.buzz")) {
        el.style.display = "flex";
    }
}
fizzbuzzBtn.onclick = () => {
    console.log("Showing only FIZZ-BUZZ numbers");
    for (let el of document.querySelectorAll('div.buzz, div.fizz, div.number')) {
        el.style.display = 'none';
    }
    for (let el of document.querySelectorAll("div.fizzbuzz")) {
        el.style.display = "flex";
    }
}

genDivs();
