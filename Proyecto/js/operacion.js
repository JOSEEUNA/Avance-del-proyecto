//declaramos 3 variables globales para reurilizarlos en la funcion operacionesArit
var random1 = 0;
var random2 = 0;
var random1 = 0;
//primer funcion
const generar = () => {
        //generamos numeros aleatorios, donde se guardan en los variables random
        random1 = Math.floor(Math.random() * 10);
        document.getElementById("a").innerHTML = random1;

        random2 = Math.floor(Math.random() * 101);
        document.getElementById("b").innerHTML = random2;

        random3 = Math.floor(Math.random() * 50);
        document.getElementById("c").innerHTML = random3;

    }
    //secunda funcion
const operacionesArit = () => {
    //declaramos 3 variables e igualamos con los id de los input html
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("n3").value;
    // realizamos las operaciones, obteniendo los numeros random y los datos que el usuario ingrese
    let operacion = (random1 * num1) + (random2 * num2) + (random3 * num3);
    var res = operacion;
    //returnamos el resultado por medio del id de una etiqueta html
    return document.getElementById("resultado").innerHTML = res;

}