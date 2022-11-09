



    
let cambioImgEstado = false;
let cambioImgEscudo = false;
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
    let numestados =  parseInt(localStorage.getItem("numEstados"));
    numestados=numestados-1;
    localStorage.setItem("numEstados",numestados);
    crearAlerta(mensaje);
    listarEstados();

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
            tabla+=getImagen(elemento.imagenEstado,"idEstado"+i.toString())+"<br>"+"<button id='-"+i.toString()+"' onclick='nuevaImagen(-"+i+")'>Nueva</button>";
            tabla+="<div id='-"+(i+"file")+"'></div>";
            tabla+="</td>";
            tabla+="<td>";
            tabla+=getImagen(elemento.imagenEscudo,"idEscudo"+i.toString())+"<br>"+"<button id='"+i+"' onclick='nuevaImagen("+i+")'>Nueva</button>";
            tabla+="<div id='"+(i+"file")+"'></div>";
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<button onclick="getImagenes('+i+')">Guardar</button><br><br>';
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
    cambioImgEstado = false;
    cambioImgEscudo = false;
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

    let llave = key+"";

    console.log(llave+"file");

    let boton = document.getElementById(llave+"file");

    

    if (llave[0]=='-') {
        boton.innerHTML='<input type="file" id="idEstado'+llave+'" accept=".jpg, .jpeg, .png">';
        cambioImgEstado = true;
    }else{
        boton.innerHTML='<input type="file" id="idEscudoNuevo'+llave+'" accept=".jpg, .jpeg, .png">';
        cambioImgEscudo = true;
    }



    

}

function guardarModificado(key) {
    
    let llave = key+"";
    let estado = JSON.parse(localStorage.getItem(key));
    let nombre = document.getElementById("nombreM").value;
    let clave = document.getElementById("claveM").value;
    let capital = document.getElementById("capitalM").value;
    let habitantes = document.getElementById("habitantesM").value;
    let pueblos = estado.pueblos;
    let imageEstado = imagenes[0];
    let imageEscudo = imagenes[1];;

    let estadoModificado = {
        clave: clave,
        nombre: nombre,
        capital: capital,
        habitantes: habitantes,
        pueblos: pueblos,
        imagenEstado: imageEstado,
        imagenEscudo: imageEscudo
    }

    console.log("modificado");

    console.log(estadoModificado);
    localStorage.setItem(key,JSON.stringify(estadoModificado));
    //alert("se actualizo con exito");
    let alerta = "<h2>Se actualizo con exito<h2>";
    alerta+="<p><img src='img/bien.png' width='100' height='100'></p>";
    alerta+="<button id='close'>OK</button>";
    crearAlerta(alerta);
    listarEstados();


    
    

}

function getImagenes(key) {

    //console.log('idEstado'+key);

    //let dimgEstado = document.getElementById('idEstado'+key).files[0];

    //if ((document.getElementById('idEstado-'+key).files[0])==null) {
      //  console.log(null);
    //}

    let estadoimg = "";
    let escudoimg = "";
    imagenes = [];

    let estadOriginal = document.getElementById('idEstado'+key).src;
    let escudOriginal = document.getElementById('idEscudo'+key).src;

    
    if (cambioImgEstado==true) {
        let es = document.getElementById('idEstado-'+key).files[0];
        readImage(es,key);
    }

    console.log('idEscudoNuevo'+key);

    if (cambioImgEscudo==true) {
        let esc = document.getElementById('idEscudoNuevo'+key).files[0];
        readImage(esc,key);
    }

    if (cambioImgEstado==false && cambioImgEscudo==false) {
        imagenes.push(estadOriginal);
        imagenes.push(escudOriginal);
        guardarModificado(key);
    }

   // if ((document.getElementById('idEscudo'+key).value)==undefined) {
      //  console.log(document.getElementById('idEscudo'+key));
   // }


    
   
}


function readImage(file,key) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        
        prueba = event.target.result;

        let estadOriginal = document.getElementById('idEstado'+key).src;
        let escudOriginal = document.getElementById('idEscudo'+key).src;
        
        if (cambioImgEstado==true && cambioImgEscudo==true) {
            imagenes.push(event.target.result);
            if (imagenes.length==2) {
                guardarModificado(key);
            }
        }
        
        if (cambioImgEstado==true && cambioImgEscudo==false) {
            imagenes.push(event.target.result);
            imagenes.push(escudOriginal);
            guardarModificado(key);
            

        }

        if (cambioImgEstado==false && cambioImgEscudo==true) {
            imagenes.push(estadOriginal);
            imagenes.push(event.target.result);
            guardarModificado(key);
        }

        
    });
    reader.readAsDataURL(file);
  }

function previsualizarCambioDeImagen(base,id) {
    document.getElementById(id).src=base;
}