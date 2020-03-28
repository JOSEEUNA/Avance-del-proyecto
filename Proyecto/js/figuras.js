//Secundo avance del proyecto
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


}
const opeRectanguloArea = () => {
    var area = "bxh";
    var Rectbase = document.getElementById("Rectbase1").value;
    var Rectaltura = document.getElementById("Rectaltura2").value;

    var resultRect = Rectbase * Rectaltura;
    document.getElementById("rectSolo").innerHTML = "Solo un paso: " + Rectbase + " x " + Rectaltura + "=" + resultRect;


    return document.getElementById("Rectresul2").innerHTML = "EL ÁREA ES: " + resultRect;


}


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
    document.getElementById('miCanvasRect').innerHTML = "b=base    h=altura";

    var canvas = document.getElementById('miCanvasRect');
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
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