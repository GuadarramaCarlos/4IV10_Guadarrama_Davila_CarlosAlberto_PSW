/*
JavaScript es un lenguje
que posee un paradigma orientado
a objetos y a funciones, y a eventos
por tal motivo presenta una particularidad que es:

No tipado
no existe int, float, string, ni char, ni nada :(

Todo es var -> variable
de acuerdo al estandar ES6 se manejan 3 tipos de variable

VAR
LET es una variable de tipo "Protected"
CONST es un valor constante


*/

function validar(formulario){

    if(formulario.nombre.valor.length <= 3){
        alert("Favor de ingresar mas de 3 caracteres en el campo nombre HIJO DE PUTA");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "qertyuiopasdfghjklzxcvbnm" + 
    "QWERTYUIOPASDFGHJKLZXCVBNM";

    var cadenaNombre = formulario.nombre.value;

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.metodo.checarAt(i);
        for(var j = 0; j < checarABC.length;){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido == false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

}

var edad = parseInt(formulario.edad.value);

function validar(formulario){

    if((edad < 0) || (edad >= 99)){
        alert("Favor de ingresar una edad valida de entre 01 y 99 años");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "0123456789";

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.metodo.checarAt(i);
        for(var j = 0; j < checarABC.length;){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido == false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo mu,erps en el campo edad");
        formulario.nombre.focus();
        return false;
    }

}