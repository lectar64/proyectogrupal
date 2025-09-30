
var longitud = 7;
var maxlongitud = 50; 


var opt = 0;
var id = 0; 
var tabla = new Map(); 
condicion();
opt = 2; 
condicion();
opt = 1;
condicion(); 
 
console.log(tabla);
function condicion(){
    switch(opt){
        case 0: generarcontrasenialeatoria(longitud,maxlongitud); break;//opcion 1, genera contraseña con numeros aleatorios,letras y simbolos
        case 1: generarclavenumeros(longitud,maxlongitud); break;//opcion 2,genera contraseña con numeros aleatorios
        case 2: generarletrasaleatorios(longitud,maxlongitud); break;//opcion 3, genera contraseña solo con letras aleatorias
        default: console.log("Incorrecto, valor fuera de rango");
    }
}
function generarcontrasenialeatoria(long,max){
    id++;
    var letras = "ABCDEFGHIJKLMNOP.QRSTU_VWXYZabcd-efghijklmnopqrstuvwxyz0123456789";//incluye letras,numeros y simbolos
    var caracteractual = '';//la cadena que se va retornar
    var longitudcaracteres = letras.length;
    var aux = 0; 
    if(long < max){//si la longitud del usuario es inferior a la longitud maxima, crea la contraseña
        while(aux < long){
            caracteractual += letras.charAt(Math.random ()* longitudcaracteres);
            aux++;
        }
    }   
    else{
        console.log("te has pasado de tamaño");
        return;
    }
    tabla.set(id,caracteractual);
}
function generarclavenumeros(long,max){
    id++;
    var letras = "0123456789";//incluye solo numeros
    var caracteractual = '';//la cadena que se va retornar
    var longitudcaracteres = letras.length;
    var aux = 0; 
    if(long < max){//si la longitud del usuario es inferior a la longitud maxima, crea la contraseña
        while(aux < long){
            caracteractual += letras.charAt(Math.random ()* longitudcaracteres);
            aux++;
        }
    }   
    else{
        console.log("te has pasado de tamaño");
        return;
    }
    tabla.set(id,caracteractual);
    return caracteractual; 
}
function generarletrasaleatorios(long,max){
    id++;
    var letras = "ABCDEFGHIJKLMNOP.QRSTU_VWXYZabcd-efghijklmnopqrstuvwxyz";//incluye solo letras
    var caracteractual = '';//la cadena que se va retornar
    var longitudcaracteres = letras.length;
    var aux = 0; 
    if(long < max){//si la longitud del usuario es inferior a la longitud maxima, crea la contraseña
        while(aux < long){
            caracteractual += letras.charAt(Math.random ()* longitudcaracteres);
            aux++;
        }
    }   
    else{
        console.log("te has pasado de tamaño");
        return;
    }
    tabla.set(id,caracteractual);
    return caracteractual; 
}