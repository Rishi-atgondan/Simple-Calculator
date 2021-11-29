
function dis(x) {
    const element = document.getElementById("input");
    element.value += x;
}

function solve() {
    const element = document.getElementById("input")
    let x = element.value;
    element.value = eval(x);
}

function clean() {
    document.getElementById("input").value = "";
}


