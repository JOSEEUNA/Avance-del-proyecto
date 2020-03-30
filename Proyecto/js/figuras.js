//Secundo avance del proyecto
//resto de las funciones
//Calcular el area y perimetro de las figuras


const opeRectanguloPerim = () => {
    var perimetro = "P = 2b + 2h";
    var Rectbase = document.getElementById("Rectbase").value;
    var Rectaltura = document.getElementById("Rectaltura").value;
    var multRect1 = 2 * Rectbase;
    var multRect2 = 2 * Rectaltura;
    var resultRect = multRect1 + multRect2;
    document.getElementById("rectPrimp").innerHTML = "Primer paso: " + Rectbase + " x " + "2" + "=" + multRect1;
    document.getElementById("rectSecunp").innerHTML = "Secundo paso: " + Rectaltura + " x " + "2" + "=" + multRect2;
    document.getElementById("rectResult").innerHTML = "Ultimo paso" + multRect1 + " + " + multRect2 + "=" + resultRect;

    return document.getElementById("Rectresul").innerHTML = "EL PERÍMETRO ES: " + resultRect;


};
const opeRectanguloArea = () => {
    var area = "bxh";
    var Rectbase = document.getElementById("Rectbase1").value;
    var Rectaltura = document.getElementById("Rectaltura2").value;

    var resultRect = Rectbase * Rectaltura;
    document.getElementById("rectSolo").innerHTML = "Solo un paso: " + Rectbase + " x " + Rectaltura + "=" + resultRect;


    return document.getElementById("Rectresul2").innerHTML = "EL ÁREA ES: " + resultRect;


};
const opeCuadradoPerim = () => {
    //igualamos una variable con el id obtenido
    var cualado = document.getElementById("cuaLado").value;
    //se realiza la operacion, siguiendo la formula para calcular el perimetro del cuadrado "4a"
    var opecuadrado = 4 * cualado;
    //retornamos el resultado obtenido
    return document.getElementById("resultCua").innerHTML = "Resultado: " + opecuadrado;

};
const opeCuadradoArea = () => {
    //igualamos una variable con el id obtenido
    var cualado = document.getElementById("cuaLado1").value;
    //se realiza la operacion, siguiendo la formula para calcular el perimetro del cuadrado "4a"
    var opecuadrado = Math.pow(cualado, 2);
    //retornamos el resultado obtenido
    return document.getElementById("resultCua1").innerHTML = "Resultado: " + opecuadrado;

};
const opeCirculoPerim = () => {
    //declaramos una variable, igualando a la id que estamos obtenido  del input html
    var cirdiametro = document.getElementById("cirDiametro").value;
    //igualmos pi con su valos 3.1416
    var pi = 3.1416;
    var cirResult = cirdiametro * pi;
    //retornamos el resultado con el innerHTML del id de una etiqueta del html
    return document.getElementById("cirResult").innerHTML = "Resultado: " + cirResult;

};
const operCirculoArea = () => {
    //declaramos la variable cirradio, para igualar el id que estamos obteniedo de un input del html
    var cirradio = document.getElementById("cirRadio").value;
    //realizamos la operacion del cuadrado con math pow
    var cirCuad = Math.pow(cirradio, 2);
    //hacemos la multiplicacion del cuadrado con el pi 3.1416
    var reculArea = 3.1416 * cirCuad;
    //retornamos el resultdo, enviandolo a una equiqueta de html por su id
    return document.getElementById("cirResult1").innerHTML = "Resultado: " + reculArea;
};
const opeTrapecioPerim = () => {
    //declaramos 4 variables e igualamos con los id de los input del html donde ingresaremos los dato
    var traLado1 = document.getElementById("traLado1").value;
    var traLado2 = document.getElementById("traLado2").value;
    var traLado3 = document.getElementById("traLado3").value;
    var traLado4 = document.getElementById("traLado4").value;
    //declaramos una variable para realizar la suma de los variables anteriores
    var traResult = traLado1 + traLado2 + traLado3 + traLado4;
    //returnamos el resultado que se obtuvo por un id de la etiqueta de html
    return document.getElementById("traResul").innerHTML = "Resultado: " + traResult;

};

const opeTrapecioArea = () => {
    //declaramos los variables e igualamos con los id de las etiquetas de los input del html
    var traAltura = document.getElementById("traAltura").value;
    var baseMenor = document.getElementById("baseMenor").value;
    var baseMayor = document.getElementById("baseMayor").value;
    //primero hacemos la suma de los bases mayor y menor
    var sumasBase = baseMayor + baseMenor;
    //secundo multiplicaoms la altura con la sumas de los bases
    var mulbasealtura = traAltura * sumasBase;
    //por ultimo devidimos la multiplicacion con 2
    var divisio = mulbasealtura / 2;
    //retornamod el resultado por el id de una etuqueta del html
    return document.getElementById("traResul1").innerHTML = "Resultado; " + divisio;

};

//declaramos esta variable como gloval para utilizarlo en la funcion openPentagonoArea
var opePen = 0;
const opePentagonoPerim = () => {
    //declaramos una variable e igualamos al id del input
    var penBase = document.getElementById("penBase").value;
    // se realiza la operacion
    opePen = 5 * penBase;
    //returnamos el resultado por el id de una etiqueta html
    return document.getElementById("penResul").innerHTML = "Resultado; " + opePen;
};
const openPentagonoArea = () => {
        //    //declaramos una variable e igualamos al id del input
        var penApotema = document.getElementById("penApotema").value;
        //obtenemos la variable opePen para realizar la operacion del area
        var multPen = opePen * penApotema;
        //realizos la division
        var penresul = multPen / 2;
        //retornamos el resultado por un id de una etiqueta html
        return document.getElementById("penResul1").innerHTML = "Resultado: " + penresul;
    }
    //declaramos esta variable como gloval para utilizarlo en la funcion openHexagonoArea
var opeHex = 0;
const opeHexagonoPerim = () => {
    //declaramos una variable e igualamos al id del input
    var hexBase = document.getElementById("hexBase").value;
    // se realiza la operacion
    opeHex = 6 * hexBase;
    //returnamos el resultado por el id de una etiqueta html
    return document.getElementById("hexResul").innerHTML = "Resultado; " + opeHex;
};
const openHexagonoArea = () => {
    //    //declaramos una variable e igualamos al id del input
    var hexApotema = document.getElementById("hexApotema").value;
    //obtenemos la variable opePen para realizar la operacion del area
    var multHex = opeHex * hexApotema;
    //realizos la division
    var hexresul = multHex / 2;
    //retornamos el resultado por un id de una etiqueta html
    return document.getElementById("hexResul1").innerHTML = "Resultado: " + hexresul;
};


const dibujar = () => {
    const ALTURA_CANVAS = 1000,
        ANCHURA_CANVAS = 1000;
    var canvas = document.getElementById('miCanvas');
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    var contexto = canvas.getContext('2d');
    var n1 = document.f1.txtn1.value;
    var v1 = parseInt(25) + parseInt(n1);
    var n2 = document.f1.txtn2.value;
    var v2 = parseInt(25) + parseInt(n2);
    // curva cuadratica, esquina bien redondeada 
    contexto.beginPath();
    contexto.moveTo(v1, 25); //aqui va le numero 1
    contexto.lineTo(25, 25);
    contexto.quadraticCurveTo(25, 25, 25, 75);
    contexto.lineTo(25, v2); // aqui va el numero 2
    contexto.fillStyle = 'red';
    contexto.fill();
};

const rectangulo = () => {
    const ALTURA_CANVAS = 130,
        ANCHURA_CANVAS = 250;
    // Obtener el elemento del DOM

    document.getElementById('miCanvasRect').innerHTML = "b=base    h=altura";

    var canvas = document.getElementById('miCanvasRect');
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar

    var contexto = canvas.getContext('2d');
    contexto.beginPath();
    contexto.rect(50, 20, 200, 100);
    contexto.lineWidth = 2;
    contexto.strokeStyle = 'black';
    contexto.stroke();
}
const Cuadrado = () => {
    const ALTURA_CANVAS = 130,
        ANCHURA_CANVAS = 250;
    var canvas = document.getElementById('miCanvasCua');
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    var contexto = canvas.getContext('2d');
    contexto.beginPath();
    contexto.rect(50, 20, 100, 100);
    contexto.lineWidth = 2;
    contexto.strokeStyle = 'black';
    contexto.stroke();
}
const circulo = () => {
    const ALTURA_CANVAS = 280,
        ANCHURA_CANVAS = 200;
    var canvas = document.getElementById('miCanvasCir');
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.stroke();
};

const Trapecio = () => {

    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;

    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasTrap");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#1565C0";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Mover a la esquina superior izquierda
    contexto.moveTo(25, 5);
    // Dibujar la línea hacia la derecha
    contexto.lineTo(125, 5);
    // Ahora la que va hacia abajo
    contexto.lineTo(125, 80); // A 80 porque esa es la altura
    // La que va hacia la izquierda
    contexto.lineTo(5, 80);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
};
const trapezoide = () => {
    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;
    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasTrapZ");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#81C784";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Mover a la esquina superior izquierda
    contexto.moveTo(25, 5);
    // Dibujar la línea hacia la derecha
    contexto.lineTo(115, 25);
    // Ahora la que va hacia abajo
    contexto.lineTo(145, 80); // A 80 porque esa es la altura
    // La que va hacia la izquierda
    contexto.lineTo(5, 80);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
};
const pentagono = () => {
    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;

    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasPen");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#81C784";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Mover a la esquina superior izquierda
    contexto.moveTo(25, 5);
    // Dibujar la línea hacia la derecha
    contexto.lineTo(115, 25);
    // Ahora la que va hacia abajo
    contexto.lineTo(145, 80); // A 80 porque esa es la altura
    // La que va hacia la izquierda
    contexto.lineTo(5, 80);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
}
const hexagono = () => {
    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;

    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasHeg");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#D4E157";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Esquina superior izquierda
    contexto.moveTo(35, 5);
    // Línea recta superior
    contexto.lineTo(95, 5);
    // Esquina central derecha
    contexto.lineTo(125, 55);
    // Esquina inferior derecha
    contexto.lineTo(95, 105);
    // Línea recta inferior
    contexto.lineTo(35, 105);
    // Esquina central izquierda
    contexto.lineTo(5, 55);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
};
const heptagono = () => {
    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;
    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasHep");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#FFEB3B ";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Esquina superior izquierda
    contexto.moveTo(35, 5);
    // Línea recta superior
    contexto.lineTo(95, 5);
    // Esquina central derecha
    contexto.lineTo(125, 45);
    // Esquina inferior derecha
    contexto.lineTo(115, 95);
    // Esquina inferior central
    contexto.lineTo(65, 115);
    // Esquina inferior izquierda
    contexto.lineTo(15, 95);
    // Esquina central izquierda
    contexto.lineTo(5, 45);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
}

const Rombo = () => {
    const ALTURA_CANVAS = 100,
        ANCHURA_CANVAS = 150;

    // Obtener el elemento del DOM
    const canvas = document.querySelector("#miCanvasRom");
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
    // Estilo de dibujo
    // Grosor de línea
    contexto.lineWidth = 5;
    // Color de línea
    contexto.strokeStyle = "#212121";
    // Color de relleno
    contexto.fillStyle = "#C2185B";
    // Comenzamos la ruta de dibujo, o path
    contexto.beginPath();
    // Nos movemos a la "punta" superior
    contexto.moveTo(55, 5);
    // Dibujamos la línea que va hacia la derecha
    contexto.lineTo(105, 55);
    // Ahora la que va hacia abajo
    contexto.lineTo(55, 105);
    // Ahora la que va hacia la izquierda
    contexto.lineTo(5, 55);
    // Y dejamos que la última línea la dibuje JS
    contexto.closePath();
    // Hacemos que se dibuje
    contexto.stroke();
    // Lo rellenamos
    contexto.fill();
}

const limpiar = () => {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    contexto.clearRect(0, 0, canvas.width, canvas.height);
};