const generar = () => {

    var random1 = Math.floor(Math.random() * 10);
    document.getElementById("a").innerHTML = random1;

    var random2 = Math.floor(Math.random() * 101);
    document.getElementById("b").innerHTML = random2;

    var random3 = Math.floor(Math.random() * 50);
    document.getElementById("c").innerHTML = random3;

}
const operacionesArit = () => {

    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("n3").value;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    let operacion = (a * num1) + (b * num2) + (c * num3);
    var res = operacion;

    return document.getElementById("resultado").innerHTML = res;

}