var capa=document.getElementById("capa");

var salida="typeof undefined === undefined is "+(typeof undefined === "undefined");
salida+="<br>";
salida+="typeof true === boolean is "+(typeof true === "boolean");
salida+="<br>";
salida+="typeof 42 === number is "+(typeof 42 === "number");
salida+="<br>";
salida+="typeof '42' === string is "+(typeof "42" === "string");
salida+="<br>";
salida+="typeof { life: 42 } === object is "+(typeof { life: 42 } === "object");
salida+="<br>";
// added in ES6!
salida+="typeof Symbol() === symbol is "+(typeof Symbol() === "symbol");
salida+="<br>";
salida+="typeof null === null is "+(typeof null === null);
capa.innerHTML=salida;