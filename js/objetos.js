let vec = [];


document.addEventListener("keyup", e=>{

   // console.log(e.target.value);

    if (e.target.matches("#buscar")){
  
        let coincidencias = [];
        for (let alumno of vec) {
            if (alumno.numeroControl.includes(e.target.value)) {
                coincidencias.push(alumno);
            }
        }

        crearTabla(coincidencias);
  
    }
  
  
  })

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

    let alumnoNuevo = crearObjeto();
    let registrado = false;
    for (let alumnoRegistrado of vec) {
        if (alumnoRegistrado.numeroControl==alumnoNuevo.numeroControl) {
            alert("El numero de control "+alumnoNuevo.numeroControl+" ya se encuentra registrado, por favor escribe otro");
            registrado = true;
        }
    }

    if (registrado==false) {

        if (alumnoNuevo.numeroControl.length!=8) {
            alert("Por favor ingresa un numero de control de 8 digitos");
        }else{
            vec.push(alumnoNuevo);
            getListElements();
        }

        
    }

    if (vec.length>0) {
        document.getElementById("acciones").style.visibility='visible';
    }

    

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


function crearTabla(alumnos) {
    let salida = "<table>";
    salida+="<thead>";
    salida+="<tr>";
    salida+="<td>";
    salida+="Numero de control";
    salida+="</td>";
    salida+="<td>";
    salida+="Nombre";
    salida+="</td>";
    salida+="<td>";
    salida+="Paterno";
    salida+="</td>";
    salida+="<td>";
    salida+="Materno";
    salida+="</td>";
    salida+="<td>";
    salida+="Genero";
    salida+="</td>";
    salida+="<td>";
    salida+="Correo";
    salida+="</td>";
    salida+="<td>";
    salida+="Fecha de nacimiento";
    salida+="</td>";
    salida+="<td>";
    salida+="Acciones";
    salida+="</td>";
    salida+="</tr>";
    salida+="</thead>";
    for (let alumno of alumnos) {
        salida+='<tr>';
        salida+='<td>';
        salida+=alumno.numeroControl;
        salida+='</td>';
        salida+='<td>';
        salida+='<input id="nombreM" class="entrada" type="text" value="'+alumno.nombre+'">';
        salida+='<div class="valores">'+alumno.nombre+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<input id="paternoM" class="entrada" type="text" value="'+alumno.paterno+'">';
        salida+='<div class="valores">'+alumno.paterno+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<input id="maternoM" class="entrada" type="text" value="'+alumno.materno+'">';
        salida+='<div class="valores">'+alumno.materno+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<div class="entrada"><input class="entrada" type="radio" id="generoM" value="femenino" name="generoM">Femenino</input><input class="entrada" type="radio" id="generoM" value="masculino" name="generoM">Masculino</input></div>';
        salida+='<div class="valores">'+alumno.genero+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<input id="correoM" class="entrada" type="text" value="'+alumno.correo+'">';
        salida+='<div class="valores">'+alumno.correo+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<input id="fnacimientoM" class="entrada" type="date" placeholder="Fecha de nacimiento" id="fnacimiento"';
        salida+='<div class="valores">'+alumno.fnacimiento+'</div>';
        salida+="</td>";
        salida+="<td>";
        salida+='<button id="eliminar" onclick="eliminar('+alumno.numeroControl+')" >Eliminar</button>';
        salida+='<button id="modificar" onclick="modificar('+alumno.numeroControl+')" >Modificar</button>';
        salida+='<button id="guardar" onclick="guardarModificado('+alumno.numeroControl+')" >Guardar</button>';
        salida+="</td>";
        salida+="</tr>";

        
    }

    salida+="</table>";

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = salida;
}


function eliminar(numero) {
    console.log("numero a eliminar "+numero);
    let alumnos = [];
    alumnos = vec.filter((item) => item.numeroControl != numero);
    vec = alumnos;
    crearTabla(vec);
}

function modificar(numero) {
    let alumnos = [];
    for (let alumno of vec) {
        
        if (alumno.numeroControl == numero) {
            alumnos.push(alumno);
            crearTabla(alumnos);
            habilitarInputs();
            
        }
    }
}

function guardarModificado(numero) {
    for (let alumno of vec) {
        if (alumno.numeroControl==numero) {
            alumno.nombre=getDato("nombreM");
            alumno.paterno=getDato("paternoM");
            alumno.materno=getDato("maternoM");
            alumno.genero=getDato("generoM");
            alumno.correo=getDato("correoM");
            alumno.fnacimiento=getDato("fnacimientoM");
            console.log("se guardo con exito");
            crearTabla(vec);
        }
    }
}


function habilitarInputs() {

    const boxes = document.querySelectorAll('.entrada');

    boxes.forEach(box => {
    box.style.visibility = 'visible';
    });

    const cajas = document.querySelectorAll('.valores');

    cajas.forEach(caja => {
    caja.style.visibility = 'hidden';
    });

    document.getElementById("eliminar").style.visibility='hidden';
    document.getElementById("modificar").style.visibility='hidden';
    document.getElementById("guardar").style.visibility='visible';

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
   crearTabla(vec);


}

function visibilizarComponente() {
    document.getElementById("capaSalida").style.visibility='visible';
}
