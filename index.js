const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const keyNumber = document.querySelectorAll(".key-number");
const keyOperator = document.querySelectorAll(".key-operator");
const displayCalc = document.querySelector(".display__calc");
const displayResult = document.querySelector(".display__result");

let total = [];
let cleanArr = [];
let stringTotal = "";
let result;
let stringTotalSign;
let calcArr = [];

keyNumber.forEach((key) =>
  key.addEventListener("click", (e) => {
    console.log(e.keyCode);
    console.log(!(result === undefined));
    console.log(cleanArr.length === 0 || displayCalc.textContent.length === 0);
    if (
      !(result === undefined) &&
      (cleanArr.length === 0 || displayCalc.textContent.length === 0) &&
      !(total.findIndex((e) => e === "-") === 0)
    ) {
      total = [];
      displayCalc.textContent = [];
      result = undefined;
    }
    console.log(total);
    total.push(e.target.textContent);
    displayResult.textContent = total.join("");
    console.log(total);
  })
);

minus.addEventListener("click", (e) => {
  console.log(displayCalc.textContent.length === 0);
  if (displayCalc.textContent.length === 0) {
    total.push(e.target.textContent);
  } else {
    console.log("true!");
  }
});

/* function keyNumba(e) {
  const keyCode = document.querySelector(
    `.key-number[data-key="${e.keyCode}"]`
  );
  console.log(!(result === undefined));
  console.log(cleanArr.length === 0 || displayCalc.textContent.length === 0);
  if (
    !(result === undefined) &&
    (cleanArr.length === 0 || displayCalc.textContent.length === 0) &&
    !(total.findIndex((e) => e === "-") === 0)
  ) {
    total = [];
    displayCalc.textContent = [];
    result = undefined;
  }
  console.log(total);
  total.push(keyCode.textContent);
  displayResult.textContent = total.join("");
  console.log(total);
} */
/* 
window.addEventListener("keydown", keyNumba);

function keyOperata(e) {
  const keyCode = document.querySelector(`.key-operator[data-key="${e.key}"]`);
  if (!(displayCalc.textContent.length === 0)) {
    console.log(displayCalc.textContent);
    console.log(total.join(""));
    stringTotal = String(calculate(displayCalc.textContent + total.join("")));
    displayResult.textContent = stringTotal;
    displayCalc.textContent =
      displayResult.textContent + " " + `${e.target.textContent}` + " ";
    stringTotalSign = stringTotal + " " + `${e.target.textContent}` + " ";
    total = [];
    stringTotal = "";
    total.push(stringTotal);
    console.log(total);
    console.log(stringTotal);
  } else if (
    total.findIndex((e) => e === "-") === 0 &&
    total.length === 1 &&
    String(displayCalc.textContent) === ""
  ) {
    stringTotal = "-";
    stringTotalSign = stringTotal;
    displayResult.textContent = stringTotalSign;
    console.log(total);
  } else {
    displayCalc.textContent =
      displayResult.textContent + " " + `${e.target.textContent}` + " ";
    stringTotal = total.join("");
    stringTotalSign = stringTotal + " " + `${e.target.textContent}` + " ";
    total = [];
    if (stringTotal === "-") {
      stringTotalSign = stringTotal;
    }
  }
}
 */
keyOperator.forEach((key) =>
  key.addEventListener("click", (e) => {
    if (!(displayCalc.textContent.length === 0)) {
      console.log(displayCalc.textContent);
      console.log(total.join(""));
      stringTotal = String(calculate(displayCalc.textContent + total.join("")));
      displayResult.textContent = stringTotal;
      displayCalc.textContent =
        displayResult.textContent + " " + `${e.target.textContent}` + " ";
      stringTotalSign = stringTotal + " " + `${e.target.textContent}` + " ";
      total = [];
      stringTotal = "";
      total.push(stringTotal);
      console.log(total);
      console.log(stringTotal);
    } else if (
      total.findIndex((e) => e === "-") === 0 &&
      total.length === 1 &&
      String(displayCalc.textContent) === ""
    ) {
      stringTotal = "-";
      stringTotalSign = stringTotal;
      displayResult.textContent = stringTotalSign;
      console.log(total);
    } else {
      displayCalc.textContent =
        displayResult.textContent + " " + `${e.target.textContent}` + " ";
      stringTotal = total.join("");
      stringTotalSign = stringTotal + " " + `${e.target.textContent}` + " ";
      total = [];
      if (stringTotal === "-") {
        stringTotalSign = stringTotal;
      }
    }
  })
);

function calculate(str) {
  if (isAddition(str)) {
    console.log(str);
    cleanArr = clnArr(str);
    console.log(cleanArr);
    cleanArr = cleanArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return cleanArr;
  } else if (isSoustraction(str)) {
    cleanArr = clnArr(str);
    cleanArr = cleanArr.reduce(
      (previousValue, currentValue) => previousValue - currentValue
    );
    return cleanArr;
  } else if (isDivision(str)) {
    cleanArr = clnArr(str);
    cleanArr = cleanArr.reduce(
      (previousValue, currentValue) => previousValue / currentValue
    );
    return cleanArr;
  } else if (isMultiplication(str)) {
    cleanArr = clnArr(str);
    cleanArr = cleanArr.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
    return cleanArr;
  } else {
    cleanArr = clnArr(str);
    cleanArr = Number(cleanArr);
    return cleanArr;
  }
}

equal.addEventListener("click", () => {
  let calcString = (stringTotalSign ?? 0) + (displayResult.textContent ?? 0);
  calculate(calcString);
  result = cleanArr;
  displayResult.textContent = result;
  displayCalc.textContent = result;

  console.log(result);
  console.log(total);
  total = [];
  stringTotal = "";
  cleanArr = [];
  console.log(total);
  console.log(displayCalc.textContent);
});

clear.addEventListener("click", () => {
  result = "";
  displayResult.textContent = result;
  total = [];
  displayCalc.textContent = total;
  stringTotal = "";
  cleanArr = [];
  stringTotalSign = "";
});

del.addEventListener("click", () => {
  total = total.slice(0, -1);
  displayResult.textContent = total.join("");
});

function clnArr(str) {
  if (str.includes("+")) {
    cleanArr = str.split("+").map(Number);
  } else if (str.includes("/")) {
    cleanArr = str.split("/").map(Number);
  } else if (str.includes("*")) {
    cleanArr = str.split("*").map(Number);
  } else if (str.includes("-")) {
    cleanArr = str.split("-").map(Number);
  } else {
    cleanArr.push(Number(str));
  }
  return cleanArr;
}

function isAddition(str) {
  if (str.includes("+")) {
    return true;
  } else {
    return false;
  }
}
function isSoustraction(str) {
  if (str.includes("-") && !str.includes("/") && !str.includes("*")) {
    return true;
  } else {
    return false;
  }
}
function isMultiplication(str) {
  if (str.includes("*")) {
    return true;
  } else {
    return false;
  }
}
function isDivision(str) {
  if (str.includes("/")) {
    return true;
  } else {
    return false;
  }
}
