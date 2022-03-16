var a = parseInt(prompt("Escribe el 1er número:")); 
var b = parseInt(prompt("Escribe el 2do número:")); 
var c = parseInt(prompt("Escribe el 3er número:")); 
if(a>b && a>c){
alert('El número mayor de los 3 es: '+a)
}else if (b>a && b>c){
    alert('El número mayor de los 3 es: '+b)
}else{
    alert('El número mayor de los 3 es: '+c)

}
//El parseInt se agregó para convertir las variables a tipo entero.
