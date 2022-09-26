let a = prompt("ingresa un valor");

let n = parseInt(a);

var p = document.getElementById("parrafo");


let salida = '<table class="tabla">'; 

for (let j = 0; j < 10; j++) {
    salida+="<tr>";
    salida+='<td>'+n+'</td>';
    salida+='<td> X </td>';
    salida+='<td>'+j+'</td>';
    salida+='<td> = </td>';
    salida+='<td>'+n*j+'</td>';
    salida+="</tr>"
}
salida+="</table>"
p.innerHTML=salida;

var titulo = document.getElementById("titulo");
titulo.innerHTML="Tabla del "+a;
