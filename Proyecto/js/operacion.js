var random1 = 0;
var random2 = 0;

var random1 = 0;

const generar = () => {

    random1 = Math.floor(Math.random() * 10);
    document.getElementById("a").innerHTML = random1;

    random2 = Math.floor(Math.random() * 101);
    document.getElementById("b").innerHTML = random2;

    random3 = Math.floor(Math.random() * 50);
    document.getElementById("c").innerHTML = random3;

}
const operacionesArit = () => {

    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("n3").value;
    let operacion = (random1 * num1) + (random2 * num2) + (random3 * num3);
    var res = operacion;

    return document.getElementById("resultado").innerHTML = res;

}