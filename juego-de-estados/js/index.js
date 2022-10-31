//logica de ventanas emergentes
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
//termina logica de ventanas emergentes

let pueblosMagicos = [];
let imagenes  = [];



function getImagenes() {
    let dimgEstado = document.getElementById('imagenEstado').files[0];
    readImage(dimgEstado);
    let dimgEscudo = document.getElementById('imagenEscudo').files[0];
    readImage(dimgEscudo);
   
}

function crearEstado() {
    let clave = document.getElementById('clave').value;
    let nombre= document.getElementById('nombre').value;
    let capital = document.getElementById('capital').value;
    let noHabitantes = document.getElementById('habitantes').value;
    let pueblosM= pueblosMagicos; // nombre, fecha, fiesta principal
    
    
    
    console.log(imagenes);

    let estado = {
        clave: clave,
        nombre: nombre,
        capital: capital,
        habitantes: noHabitantes,
        pueblos: pueblosM,
        imagenEstado: imagenes[0],
        imagenEscudo: imagenes[1]
    }


    let numEstados = localStorage.getItem("numEstados");
    let key = parseInt(numEstados)+1;
    localStorage.setItem(key+"",JSON.stringify(estado));
    localStorage.setItem("numEstados",key);
    console.log(estado);
    alert("Se guardo correctamente el estado");
    imagenes = [];
    pueblosMagicos = [];


}

function crearPuebloMagico() {
    let nombre = document.getElementById('nombrePueblo').value;
    let fecha = document.getElementById('fechaPueblo').value;
    let fiesta = document.getElementById('fiestaPrincipal').value;
    let pueblo = {
        nombre: nombre,
        fecha: fecha,
        fiesta: fiesta
    };
    pueblosMagicos.push(pueblo);
    tablaPueblosMagicos();
}

function tablaPueblosMagicos() {
        let salida = "<table>";
        salida+="<thead>";
        salida+="<tr>";
        salida+="<td>";
        salida+="Nombre";
        salida+="</td>";
        salida+="<td>";
        salida+="Fecha";
        salida+="</td>";
        salida+="<td>";
        salida+="Fiesta principal";
        salida+="</td>";
        salida+="</tr>";
        salida+="</thead>";
        for (let pueblo of pueblosMagicos) {
            salida+='<tr>';
            salida+='<td>';
            salida+=pueblo.nombre;
            salida+='</td>';
            salida+='<td>';
            salida+=pueblo.fecha;
            salida+='</td>';
            salida+='<td>';
            salida+=pueblo.fiesta;
            salida+='</td>';
            salida+="</tr>";
            
        }
    
        salida+="</table>";
    
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = salida;
}

function readImage(file) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagenes.push(event.target.result);
        prueba = event.target.result;
        if (imagenes.length==2) {
            crearEstado();
        }
        
    });
    reader.readAsDataURL(file);
  }

 