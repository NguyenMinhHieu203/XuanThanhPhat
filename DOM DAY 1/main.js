const form = document.getElementsByClassName("form-control");
const numberA = form[0];
const numberB = form[1];
const operator = form[2];

const btns = document.getElementsByClassName("btn btn-primary");
const btnConfirm = btns[0];
btnConfirm.addEventListener("click", () => {
    let result = +0;
    const numA = + numberA.value;
    const numB = + numberB.value;
    const operation = operator.value;
    if (operation === "+") {
        result = numA + numB;
    } else if (operation === "-") {
        result = numA - numB;
    } else if (operation === "*") {
        result = numA * numB;
    } else {
        if (numB === 0) {
            result = "mau so bang 0";
        } else {
            result = numA / numB;
        }
    }
    // const p = document.getElementById("result");
    // p.innerText = result;
    const p = document.createElement("h1");
    p.innerText = result;
    const div = document.getElementsByClassName("container");
    div[0].append(p);
})
