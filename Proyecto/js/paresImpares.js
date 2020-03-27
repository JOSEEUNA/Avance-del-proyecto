const pares = () => {
    var listpar = document.getElementById("numeros").value;

    if (listpar % 2 == 0) {
        return document.getElementById("numero").innerHTML = listpar + " = Es un numero Par";
    } else {
        return document.getElementById("numero").innerHTML = listpar + " = Es un numero impar";
    }


};