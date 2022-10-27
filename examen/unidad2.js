let pixeles = [];
let estilo = "claro";

function registrar() {
    pixeles.push(crearPixel());
    let mensaje = document.getElementById('mensajes');
    mensaje.innerHTML="Se agrego con exito el Pixel";
    mensaje.style.visibility='visible';
}

function crearPixel() {
    let color = document.getElementById('color').value;
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

    let pixel = new Object();
    pixel['color'] = color;
    pixel['x'] = x;
    pixel['y'] = y;

    pixel.toString=function() {
        return color+","+x+","+y;
    }

    return pixel;

}

function generarFormulario() {
    document.getElementById('formulario').style.visibility='visible';
}

function quitarFormulario() {
    document.getElementById('formulario').style.visibility='hidden';
    document.getElementById('mensajes').style.visibility='hidden';
}

function listarPixeles() {
    let tabla = document.getElementById('tabla');
    let table = "<table>";
    table+="<thead>";
    table+="<tr>";
    table+="<td>";
    table+="Color";
    table+="</td>";
    table+="<td>";
    table+="Coordenada";
    table+="</td>";
    table+="</tr>";
    table+="</thead>";
    for (const pixel of pixeles) {
        table+="<tr>";
        table+="<td>";
        table+=pixel.color;
        table+="</td>";
        table+="<td>";
        table+= "("+pixel.x+","+pixel.y+")";
        table+="</td>";
        table+="</tr>";
    }
    table+="</table>";
    tabla.innerHTML=table;
}

function cambiarEstilo() {
   
    switch (estilo) {
        case "claro":
            document.getElementById("estilo").style.backgroundColor='black';
            document.getElementById("estilo").style.color='white';
            estilo="obscuro";
            break;
        case "obscuro":
            document.getElementById("estilo").style.backgroundColor='white';
            document.getElementById("estilo").style.color='black';
            estilo="claro";
            break;
    
        default:
            break;
    }


}