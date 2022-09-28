let vec = [];
function crearObjeto() {
    let numero = getDato("numeroControl");
    let nombre = getDato("nombre");
    let paterno = getDato("paterno");
    let materno = getDato("materno");
    let genero = getDato("genero");
    let correo = getDato("correo");
    let fnacimiento = getDato("fnacimiento");
    let alumno = new Object();
    alumno['numeroControl']=numero;
    alumno['nombre']=nombre;
    alumno['paterno']=paterno;
    alumno['materno']=materno;
    alumno['genero']=genero;
    alumno['correo']=correo;
    alumno['fnacimiento']=fnacimiento;
    alumno.toString=function(){
        return numeroControl+", "+nombre+", "+paterno+", "+materno+", "+genero+", "+correo+", "+fnacimiento;
    }

    return alumno;
}

function agregar() {
    vec.push(crearObjeto());
    getListElements();

}

function avanzarFoco(element,event) {
    if (event.keyCode==13) {
        let input = document.getElementById(element);
        input.focus();
    }

    if (element=='agregar') {
        let input = document.getElementById(element);
        input.focus();
    }
    
}






function getDato(campo) {
    return document.getElementById(campo).value;
}

function getListElements() {
    let salida = "";
    for (let alumno of vec) {
        salida+=alumno+"<br>";
    }
    let capaSalida = document.getElementById("capaSalida");
    capaSalida.innerHTML = salida;
    visibilizarComponente();
}

function visibilizarComponente() {
    document.getElementById("capaSalida").style.visibility='visible';
}
