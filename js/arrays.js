let vec=[];

function agregar() {
    let num = document.getElementById("numero");
    let numero = num.value;
    vec.push(numero);
    fijarFoco();
}

function visualizar() {
    escribir(vec);
}

function getElementList() {
    let salida = "";
    for (let item of vec) {
        salida+=item+"<br>";
        let capa = document.getElementById("capa");
        capa.innerHTML=salida;
    }

}

function fijarFoco() {
    let caja = document.getElementById("numero");
    caja.value="";
    caja.focus();

}