
//   Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
//   Podrás configurar generar contraseñas con los siguientes parámetros:
//   - Longitud: Entre 8 y 16.
//   - Con o sin letras mayúsculas.
//   - Con o sin números.
//   - Con o sin símbolos.
//   (Pudiendo combinar todos estos parámetros entre ellos)

//Traer elementos del html
var password = document.getElementsByClassName('Password');
var showPassword = document.getElementsByClassName('showPassword');

//Variables 
var lowerCase = 'abcdefghijklmopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
var nums = '1234567890';
var symbols = '#$%&()*+,-./:;<=>?@[]^_`{|}~';

//funcion

function createPassword(up,n,sym) {
    alert('Bienvenido a el generador de contraseñas')

    up = prompt('Quiere que su contraseña lleve letras mayusculas? (y/n): ');
    n = prompt('Quiere que su contraseña lleve numeros? (y/n): ');
    sym = prompt('Quiere que su contraseña lleve simbolos? (y/n): ');
    lon = parseInt(prompt('De cuantos caracteres quiere que sea su contraseña: (min 8 max 16): '));

    password = '';

    if(up == 'n' && n == 'n' && sym == 'n'){
        for (i=0; lon; i++) {
            ind = Math.floor(Math.random()*lowerCase.length);
            for (j = ind in lowerCase){
                password += j;
            }
        }
    }
    console.log(password)
}

createPassword()