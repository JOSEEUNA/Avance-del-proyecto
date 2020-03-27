const dividirCadena = () => {
    var espacio = " ";
    var coma = ",";
    var cadenaVerso = document.getElementById("orden").value;
    var arrayDeCadenas = cadenaVerso.split(espacio);
    document.getElementById("res").innerHTML = " Total de numeros que escribiste: " + arrayDeCadenas.length;
    //Mayor A MENOR
    arrayDeCadenas.sort(function(a, b) {
        return b - a
    });

    document.getElementById("ordenado2").innerHTML = "Mayor a menor: " + arrayDeCadenas;
    //MENOR A MAYOR
    arrayDeCadenas.sort(function(a, b) {
        return a - b
    });

    return document.getElementById("ordenado").innerHTML = "Menor a mayor: " + arrayDeCadenas;


}