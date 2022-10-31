



    
let cambioImagenEstado = false;
let cambioImagenEscudo = false;
listarEstados();



let imagenes = [];

function getPueblos(pueblos) {
    let lista = "<ul>";
    
    
    for (let pueblo of pueblos) {
        lista+="<li>";
        lista+=pueblo.nombre;
        lista+="</li>";
    } 
    lista+="</ul>";
    return lista;
}

function getImagen(base,id) {
    let imagen = "<img src='"+base+"' alt='' width='100' height='100' id='"+id+"'>";
    return imagen;
}

function eliminar(key) {
    let llave = key+"";
    let contenidoAlerta = "<h1>¿Estas seguro que deseas eliminar el estado?</h1><p>Esta accion no se puede revertir</p>";
    contenidoAlerta+='<button id="close">Cancelar</button>  ';
    contenidoAlerta+='<button id="close" onclick="eliminarPueblo('+llave+')">Eliminar</button>';
    crearAlerta(contenidoAlerta);
}

function eliminarPueblo(key) {
    localStorage.removeItem(key);
    let mensaje = "<h1>Se elimino correctamente el estado</h1>";
    mensaje+='<button id="close">OK</button>';
    crearAlerta(mensaje);
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

function modificar(key) {
    let docTabla = document.getElementById("tabla");
    let tabla = "<table>";
    tabla+="<thead>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="Nombre";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Clave";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Capital";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Numero de habitantes";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Pueblos magicos";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Mapa del estado";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Escudo del estado";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Acciones";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</thead>";
    tabla+="</table>";

    let numeroEstados = parseInt(localStorage.getItem("numEstados"));

    for (let i = 1; i <= numeroEstados; i++) {
        let elemento = JSON.parse(localStorage.getItem(i+""));
        console.log(elemento);

        if (i==key) {
            
            tabla+="<tr>";
            tabla+="<td>";
            tabla+='<input type="text" id="nombreM" value="'+elemento.nombre+'">';
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<input type="number" id="claveM" value="'+elemento.clave+'">';
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<input type="text" id="capitalM" value="'+elemento.capital+'">';
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<input type="number" id="habitantesM" value="'+elemento.habitantes+'">';
            tabla+="</td>";
            tabla+="<td>";
            tabla+=pueblosComoBoton(i);
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getImagen(elemento.imagenEstado,"idEstado"+i.toString())+"<br>"+"<button id='-"+i.toString()+"' onclick='nuevaImagen(-"+(i.toString())+")'>Nueva</button>";
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getImagen(elemento.imagenEscudo,"idEscudo"+i.toString())+"<br>"+"<button id='"+i+"' onclick='nuevaImagen("+i+")'>Nueva</button>";
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<button onclik="getImagenes('+i+')">Guardar</button><br><br>';
            tabla+='<button onclick="listarEstados()">Cancelar</button>';
            tabla+="</td>";
            tabla+="</tr>";
        }else{
            tabla+="<tr>";
            tabla+="<td>";
            tabla+=elemento.nombre;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=elemento.clave;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=elemento.capital;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=elemento.habitantes;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getPueblos(elemento.pueblos);
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getImagen(elemento.imagenEstado);
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getImagen(elemento.imagenEscudo);
            tabla+="</td>";
            tabla+="<td>";
            tabla+="<button onclick='eliminar("+i+")'>Eliminar</button><br><br>";
            tabla+='<button onclik="modificar('+i+')">Modificar</button>';
            tabla+="</td>";
            tabla+="</tr>";
        }

        

    }

    docTabla.innerHTML=tabla;
}

function pueblosComoBoton(key) {
    let llave = key+"";
    let pueblo = JSON.parse(localStorage.getItem(llave));
    let pueblosMagicos = pueblo.pueblos;
    let salida = "";
    let contador = 0;
    for (let pueblo of pueblosMagicos) {
        salida+="<button onclick='modificarPuebloMagico("+key+","+contador+")'>";
        salida+=pueblo.nombre;
        salida+="</button>";
        salida+="<br>";
        contador++;
    }

    return salida;
}

function modificarPuebloMagico(key,numPueblo) {
    let estado = JSON.parse(localStorage.getItem(key));
    let pueblos = estado.pueblos;
    let pueblo = pueblos[numPueblo];
    let formulario = "<h1>Modificar pueblo magico</h1>";
    formulario+=" <p>Modifica los campos que requieras</p>";
    formulario+='Nombre: <input type="text" id="nombrePueblo" value="'+pueblo.nombre+'"><br>Fecha de la fiesta principal: <input type="date" id="fechaPueblo" value="'+pueblo.fecha+'"><br>Fiesta principal: <input type="text" id="fiestaPrincipal" value="'+pueblo.fiesta+'"><br><br>';
    formulario+='<button id="close">Cerrar</button> ';
    formulario+='<button id="close" onclick="guardarPuebloModificado()">Guardar</button>';
    crearAlerta(formulario);
}

function listarEstados() {
    cambioImagenEstado = false;
    cambioImagenEscudo = false;
    let docTabla = document.getElementById("tabla");
    let tabla = "<table>";
    tabla+="<thead>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="Nombre";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Clave";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Capital";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Numero de habitantes";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Pueblos magicos";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Mapa del estado";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Escudo del estado";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Acciones";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</thead>";
    tabla+="</table>";

    let numeroEstados = parseInt(localStorage.getItem("numEstados"));

    for (let i = 1; i <= numeroEstados; i++) {
        let elemento = JSON.parse(localStorage.getItem(i+""));
        console.log(elemento);

        tabla+="<tr>";
        tabla+="<td>";
        tabla+=elemento.nombre;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=elemento.clave;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=elemento.capital;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=elemento.habitantes;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=getPueblos(elemento.pueblos);
        tabla+="</td>";
        tabla+="<td>";
        tabla+=getImagen(elemento.imagenEstado);
        tabla+="</td>";
        tabla+="<td>";
        tabla+=getImagen(elemento.imagenEscudo);
        tabla+="</td>";
        tabla+="<td>";
        tabla+="<button onclick='eliminar("+i+")'>Eliminar</button><br><br>";
        tabla+='<button onclick="modificar('+i+')">Modificar</button>';
        tabla+="</td>";
        tabla+="</tr>";

    }

    docTabla.innerHTML=tabla;
}

function nuevaImagen(key) {

    let boton = document.getElementById(key);

    let llave = key+"";

    if (llave[0]=='-') {
        boton.innerHTML='<input type="file" id="estadoIMG" accept=".jpg, .jpeg, .png">';
        cambioImagenEstado = true;
    }else{
        boton.innerHTML='<input type="file" id="escudoIMG" accept=".jpg, .jpeg, .png">';
        cambioImagenEscudo = true;
    }



    

}

function guardarModificado(key) {
    let llave = key+"";
    let estado = localStorage.getItem(key);
    let nombre = document.getElementById("nombreM").value;
    let clave = document.getElementById("claveM").value;
    let capital = document.getElementById("capitalM").value;
    let habitantes = document.getElementById("habitantesM").value;
    let pueblos = estado.pueblos;
    let imageEstado;
    let imageEscudo;

    if (imagenes.length>0) {
        imageEstado = imagenes[0];
        if (imagenes.length>1) {
            imageEscudo = imagenes[1];
        }else{
            imageEscudo =  estado.imagenEscudo;
        }
    }else{
        imageEstado =  estado.imagenEstado;
        imageEscudo =  estado.imagenEscudo;
    }

    let estadoModificado = {
        clave: clave,
        nombre: nombre,
        capital: capital,
        habitantes: habitantes,
        pueblos: pueblos,
        imagenEstado: imageEstado,
        imagenEscudo: imageEscudo
    }

    console.log(estadoModificado);

    console.log("modificado");
    

}

function getImagenes(key) {
    

    if (cambioImagenEstado==true) {
        let dimgEstado = document.getElementById('estadoIMG').files[0];
        readImage(dimgEstado,key);
        
    }

    if (cambioImagenEscudo==true) {
        let dimgEscudo = document.getElementById('escudoIMG').files[0];
        readImage(dimgEscudo,key);
    }


    
   
}


function readImage(file,key) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagenes.push(event.target.result);
        prueba = event.target.result;
        console.log(cambioImagenEstado);
        if (cambioImagenEscudo==true && cambioImagenEstado==true){
            if (imagenes.length==2) {
                guardarModificado(key);
            }
        }else{
            previsualizarCambioDeImagen(prueba,"idEstado"+key);
            console.log(prueba);
            guardarModificado(key);
        }

        
    });
    reader.readAsDataURL(file);
  }

function previsualizarCambioDeImagen(base,id) {
    document.getElementById(id).src=base;
}