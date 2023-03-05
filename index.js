let numero = parseInt(prompt("Ingrese numero"));
let saludo = prompt("Saludo");
let numero2 = prompt("ingrese otro numero");


if ((numero > 1000) && (saludo === "hola") && ((numero2>10)&&(numero2<50))) {
    alert("El numero ingresado es mayor de 10000 ");
    console.log( saludo + " Bienvenido por consola");
    alert("El numero se encuentra entre 10 y 50 ");

}
else{
    alert("Datos Invalidos");
}