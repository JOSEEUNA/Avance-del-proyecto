//cuarta funcion
const pares = () => {
    //la variable listpar se esta igualando al ID  que se esta obteniedo
    //  de los input en el html evaluandolo como un entero
    var listpar = document.getElementById("numeros").value;
    // En esta condicion .
    if (listpar % 2 == 0) {
        return document.getElementById("numero").innerHTML = listpar + " = Es un numero Par";
    } else {
        return document.getElementById("numero").innerHTML = listpar + " = Es un numero impar";
    }


};