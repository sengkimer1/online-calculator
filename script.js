const display = document.getElementById("display");
function appendToDiplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (err) {
        alert("Invalid Input");
    }
}
function sin() {
    display.value = Math.sin(display.value).toFixed(2);
}
function cos() {
    display.value = Math.cos(display.value) .toFixed(2);
    }
    function tan() {
        display.value = Math.tan(display.value).toFixed(2);
        }
function percent() {
    display.value = display.value / 100;
}
function arithmeticsign() {
    display.value = -1 * display.value;
}
function square() {
    display.value = Math.pow(display.value, 2);
}
function cube() {
    display.value = Math.pow(display.value, 3);
}
// function power(){
//     display.value = Math.pow(display.value,display.value);
// }
function currencyUs() {
    display.value = display.value /4050;
}
function currencyKh() {
    display.value = display.value * 4100;
}
function squareRoot(){
    display.value = Math.sqrt(display.value);
}
function cubeRoot(){
    display.value = Math.cbrt(display.value);
}