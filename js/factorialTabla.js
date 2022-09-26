

function escribir(texto) {
    document.write(texto + "<br>");
}

function calcular() {
    let parrafo = document.getElementById("parrafo");
    let input = document.getElementById("numero");
    let a = Number(input.value);
    let salida='<table class="tabla">';
    if (!a || a < 0) {
        escribir("Por favor ingresa un numero que sea mayor a 0");
    } else {
        let resultado = a;
        for (let j = a - 1; j > 0; j--) {
            salida+='<tr>';
            salida+='<td>';
            salida += "X" + j;
            resultado *= j;
            salida+='</td>';
            salida+='</tr>';
        }
        salida+='<tr>';
        salida+='<td>';
        salida += "=" + resultado;
        salida+='</td>';
        salida+='</tr>';
        salida+='</table>';
        escribir(salida);
    }
}