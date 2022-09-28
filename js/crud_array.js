let elementos = [];

listar();

let mensajes = document.getElementById("mensajes");

function agregar() {
    let campo = document.getElementById("agregar");
    let numero = parseInt(campo.value);
    
    if (!elementos.includes(numero)) {
        elementos.push(numero);
        listar();
    }else{
        mensajes.innerHTML = "Este elemento ya existe en el array";
    }
    
}

function eliminar() {
    let campo = document.getElementById("eliminar");
    let numero = parseInt(campo.value);

    if (elementos.includes(numero)) {
        elementos = elementos.filter((item) => item !== numero);
        listar();
    }else{
        mensajes.innerHTML = "El elemento "+numero+" no existe en el array";
    }

    
}

function consultar() {
    let campo = document.getElementById("consultar");
    let numero = parseInt(campo.value);
    if (elementos.includes(numero)) {
        let posicion = elementos.indexOf(numero);
        mensajes.innerHTML = "El elemento "+numero+" existe en la posición "+posicion;
    }else{
        mensajes.innerHTML = "El elemento "+numero+" no existe en el array";
    }
}

function modificar() {
    //elemento a modificar
    let campo = document.getElementById("aModificar");
    let numero = parseInt(campo.value);

    //nuevo elemento
    let campoNuevo = document.getElementById("nuevo");
    let numeroNuevo = parseInt(campoNuevo.value);

    if (elementos.includes(numero)) {
        let posicion = elementos.indexOf(numero);
        elementos[posicion]=numeroNuevo;
        listar();
    }else{
        mensajes.innerHTML = "El elemento "+numero+" no existe en el array";
    }
}

function ordenar() {

   let aux =  elementos.sort();
   elementos = aux;
   listar();
    
}

function listar() {
    let tabla = "<table>";
    tabla+="<thead>";
    tabla+="<td>Elementos</td>";
    tabla+="</thead>";

    for (let i = 0; i < elementos.length; i++) {
        const numero = elementos[i];
        tabla+="<tr>";
        tabla+="<td>";
        tabla+=numero;
        tabla+="</td>";
        tabla+="</tr>";
        
    }

    tabla+="</table>";
    let elemento = document.getElementById("tabla");
    elemento.innerHTML = tabla;
    

}