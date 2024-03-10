// Ejercicio 3 //
//let can1 = document.getElementById("digito1").value
//let can2 = document.getElementById("digito2").value
//let can3 = document.getElementById("digito3").value

//let resultado = document.getElementById("resultado")
const verificar1 = document.getElementById("ingresar")
verificar1.addEventListener("click",function (e){
    const cant1 = document.getElementById("digito1").value
    const cant2 = document.getElementById("digito2").value
    const cant3 = document.getElementById("digito3").value

    if(cant1 ==9 && cant2 == 1&& cant3 ==1) {
        resultado.innerHTML = "Password 1 Correcto"
    }else {
        resultado.innerHTML = "Password incorrecto";
    }
    }
    )


const verificar2 = document.getElementById("ingresar")
verificar2.addEventListener("click",function (e){
    const cant1 = document.getElementById("digito1").value
    const cant2 = document.getElementById("digito2").value
    const cant3 = document.getElementById("digito3").value

    if(cant1 ==7 && cant2 == 1&& cant3 ==4) {
        resultado.innerHTML = "Password 2 Correcto";
    }else {
        resultado.innerHTML = "Password incorrecto";
    }
    }
    )

   