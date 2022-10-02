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
  /*  let salida = "";
    for (let alumno of vec) {
        salida+=alumno+"<br>";
    }
    let capaSalida = document.getElementById("capaSalida");
    capaSalida.innerHTML = salida;
    visibilizarComponente();

    */
   let salida = "<table>";
    for (let alumno of vec) {
        salida+="<tr>";
        salida+="<td>";
        salida+=alumno.numeroControl;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.nombre;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.paterno;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.materno;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.genero;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.correo;
        salida+="</td>";
        salida+="<td>";
        salida+=alumno.fnacimiento;
        salida+="</td>";
        salida+="</tr>";
    }
    salida+="</table>";

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = salida;



}

function visibilizarComponente() {
    document.getElementById("capaSalida").style.visibility='visible';
}
