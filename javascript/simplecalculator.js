
function dis(x) {
    let element = document.getElementById("input");
    if (element.value == 0) {
        element.value = x;
    } else {
        element.value = element.value + x;
    }
}

function solve() {
    let element = document.getElementById("input")
    let x = element.value;
    element.value = eval(x);
}

function clean() {
    document.getElementById("input").value = 0;
}


