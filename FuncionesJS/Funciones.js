/*
Las variables que se ocupan en js son 3
Var -----> Actualmente esta en sustitucion
let -----> Es una variable "protegida"  porque solo esta dentro de una funcion o metodo declarado en un fragmento de codigo
CONST ------>La cual es un valor constante en el documento y no se puede cambiar su estado
*/

let x = "x"

if(true){
    const x = "y"
    console.log(x);
}

//Por ejemplo vamos a dar dos numeros

//La comilla se utiliza para modificar el comportamiento de html o queremos incrustar en javascipt codigo de html

function sumarfuncionnormal(n1 , n2){
    return n1+n2

}

console.log('la suma de  ( 3 , 4)' +':'  )

/*
Una funcion de flecha tiene como estructura:
"cadena" -> id , clase , name , atributo
*/

const sumarfuncionnormal = (n1 , n2) => 
n1 + n2;

const razasperros =[
"gran danes" ,
"chihuahua",
"pitbull",
"dalmata",
"San bernardo"
]

//Con un for normal
for(let indice = 0 ; indice<razasperros.length ; indice++){
    console.log(razasperros[indice]);
}

//For each es poder iterar sobre los elementos del arreglo que no devuelve nada
 //Metodo find
 //Metodo indexof
 //metodo mao
 //metodo sort


