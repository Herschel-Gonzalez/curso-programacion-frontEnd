let a = prompt("ingresa un valor");
let aux = Number(a);
if (!aux||aux<0) {
    escribir("Por favor ingresa un numero que sea mayor a 0");
}else{
    let salida = a;
    let resultado = a;
        for (let j = a-1; j > 0; j--) {
            salida+="X"+j;
            resultado*=j;
        }
        
    salida+="="+resultado;
    escribir(salida);
}

function escribir(texto) {
    document.write(texto+"<br>");
}