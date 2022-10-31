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

    correcta = correcto.nombre;
    console.log(correcta);


    //generamos las opciones

    opciones.push(correcta);

    while (opciones.length < 4) {
        let opcion = estados[Math.floor(Math.random() * estados.length)].nombre;
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
    tabla+="<h1>¿Que estado es el de la imagen?</h1>";
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
    tabla+="<button onclick='siguiente()'>Siguiente</button>";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</table>";
    table.innerHTML=tabla;

}

function mostrarImagen() {
    let img = estadoCorrecto.imagenEstado;
    let imagen = "<img src='"+img+"' alt='' width='400' height='400'>";
    return imagen;
}

function mostrarOpciones() {
    let botones = "";
    for (let i = 0; i < opciones.length; i++) {
        botones += "<button onclick='validar("+i+")'>"+opciones[i]+"</button><br><br>";

    }
    return botones;
}


function validar(opcion) {
    let elegida = opciones[opcion];
    if (elegida==correcta) {
        alert("¡Felicidades! es la respuesta correcta");
    }else{
        alert("Upps :( respuesta incorrecta");
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