// Ejercicio 1//
let imagen = document.querySelector(".imagen");

let count = 1

function borde() {
    count++;
    if (count%2 == 0){
        imagen.style.border="2px solid red";
    }
    else{
        imagen.style.border="none";
    }
};


