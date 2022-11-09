let imagen = "";
let correcta = "";
let opciones = [];
let estadoCorrecto;

generarJuego();
generarTabla();
function generarJuego() {
    let numEstados = parseInt(localStorage.getItem("numEstados"));
    let estados = [];

    for (let i = 1; i <= numEstados; i++) {
        let elemento = JSON.parse(localStorage.getItem(i+""));
        estados.push(elemento);
    }

    let correcto = estados[Math.floor(Math.random() * estados.length)];

    estadoCorrecto = correcto;

    correcta = correcto.capital;
    console.log(correcta);


    //generamos las opciones

    opciones.push(correcta);

    while (opciones.length < 4) {
        let opcion = estados[Math.floor(Math.random() * estados.length)].capital;
        if (!opciones.includes(opcion)) {
            opciones.push(opcion);
        }
    }

    console.log(opciones);



}

function generarTabla() {
    let table = document.getElementById("tabla");
    let tabla = "<table>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="<h1>¿Cual es la capital de este estado?</h1>";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+=mostrarImagen();
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="<br>";
    tabla+=mostrarOpciones();
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="<a href='index.html'><button>Salir del juego</button></a>   <button onclick='siguiente()'>Siguiente</button>";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</table>";
    table.innerHTML=tabla;

}

function mostrarImagen() {
    let img = estadoCorrecto.imagenEstado;
    let imagen = "<img src='"+img+"' alt='' width='250' height='250'>";
    return imagen;
}

function mostrarOpciones() {
    let botones = "";
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i]==correcta) {
            botones += "<button id='open' onclick='validar("+i+")'>"+opciones[i]+"</button>     ";
        }else{
            botones += "<button id='openX' onclick='validar("+i+")'>"+opciones[i]+"</button>    ";
        }
    }
    return botones+"<br><br>";
}


function validar(opcion) {
    let elegida = opciones[opcion];
    if (elegida==correcta) {
        let alerta = "<h1>Felicidades! es la respuesta correcta</h1>";
        alerta+="<p> <img src='img/bien.png' width='100' height='100'><p>";
        alerta+='<button id="close">OK</button>';
        crearAlerta(alerta);
    }else{
        //alert("Upps :( respuesta incorrecta");
        let alerta = "<h1>Upps :( respuesta incorrecta</h1>";
        alerta+="<p> <img src='img/wrong.png' width='100' height='100'><p>";
        alerta+='<button id="close">OK</button>';
        crearAlertaNegativa(alerta);
    }
}


function siguiente() {
    imagen = "";
    correcta = "";
    opciones = [];
    estadoCorrecto;
    generarJuego();
    generarTabla();
}

function crearAlerta(contenido) {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML=contenido;

    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });
    
    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    document.getElementById("open").click();

}

function crearAlertaNegativa(contenido) {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML=contenido;

    const open = document.getElementById('openX');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });
    
    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    document.getElementById("openX").click();

}