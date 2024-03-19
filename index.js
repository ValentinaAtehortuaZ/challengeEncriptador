// Elementos del DOM
const encriptador = document.getElementById("encriptador");
const desincriptadora = document.getElementById("desincriptadora");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const resultadoEncriptar = document.getElementById("resultado-encriptado");
const resultadoDesencriptar = document.getElementById("resultado-desencriptado");
const autoDestruccionEn = document.getElementById("autoDestruccionEn");
const autoDestruccionDes = document.getElementById("autoDestruccionDes");
const encriptadoDisplay = document.getElementById('en');
const desencriptadoDisplay = document.getElementById('des');
const segundos = 6000;
const autoDestruccionMs = "Aparecerá cómo por arte de magia 🪄 "
const mensajeEsperado = " Revelio secreto 🧙🏼"
const libreria = /^[a-z\s]+$/;
const btnLimpiarDesencriptar = document.getElementById('limpiarTexto-desencriptado');



function reiniciarCiclo() {
    document.getElementById('encriptar').value = '';
    document.getElementById('resultadoEncriptar').innerHTML = '';
    document.getElementById('desencriptar').value = '';
    document.getElementById('resultadoDesencriptar').innerHTML = '';

    setTimeout(function() {
        location.reload();
    }, 1000);
}


// Función para limpiar texto
function limpiarTexto(idLimpiar) {
    idLimpiar.value = '';
    idLimpiar.focus();
}

// Función para copiar texto al portapapeles
function copiarTexto(idCopy) {
    idCopy.select();
    idCopy.setSelectionRange(0,99999);
    document.execCommand('copy');
}

// Validación de letras
function validacionLetras(e) {
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();

    if (libreria.test(tecla) === false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Recuerde que solo puede ingresar letras minúsculas y espacios en blanco',
            confirmButtonText: 'Entendido'
        });
        return false;
    }
}

// Mostrar y ocultar resultados
function mostrarResultado(idLimpiar, idDisplay, info, ingreso) {
    ingreso.className = "ocultar-ingreso";
    idDisplay.className = "mostrar-resultado";
    info.innerHTML = autoDestruccionMs;

    setTimeout(function(){
        idDisplay.className = "resultado";
        ingreso.className = "ingreso-texto";
        limpiarTexto(idLimpiar);

        // Cambiar color del encabezado y resultado a negro después de 60 segundos
        //Para encriptar
        document.querySelector("section h2").style.color = "black";
        resultadoEncriptar.style.color = "black";

        document.querySelector("section #en h2").style.color = "black";
        resultadoEncriptar.style.color = "black";

        // Para desencriptar

        document.querySelector("section #desincriptadora h2").style.color = "black";
        resultadoEncriptar.style.color = "black";

        document.querySelector("section #des h2").style.color = "black";
        resultadoEncriptar.style.color = "black";

        document.querySelector("#resultado-desencriptado").style.color = "black";
        resultadoDesencriptar.style.color = "black";


         // Mostrar mensaje esperado
         info.innerHTML = mensajeEsperado;
         setTimeout(function() {
             info.innerHTML = ''; 
         }, 3000); 

    
    }, segundos);
}



// Encriptación del texto
function encriptacion() {
    var texto = encriptar.value;
    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Primero ingrese un texto!!!',
            confirmButtonText: 'Entendido'
        });
        encriptar.focus();
    } else if (libreria.test(texto) === false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Recuerde que no puede ingresar Mayúsculas, Caracteres Especiales, tampoco se permiten acentos',
            confirmButtonText: 'Entendido'
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarTexto(encriptar);
            }
        });
    } else {
        var textoEncriptado = texto.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat").replace(/''/img, "");
        resultadoEncriptar.innerHTML = textoEncriptado;
        
        // Cambiar color del encabezado y resultado a blanco
        document.querySelector("section h2").style.color = "white";
        resultadoEncriptar.style.color = "white";

        document.querySelector("section #en h2").style.color = "white";
        resultadoEncriptar.style.color = "white";

        mostrarResultado(encriptar, encriptadoDisplay, autoDestruccionEn, encriptador);
    }
   
}


// Desencriptación del texto
function desencriptacion() {
    var texto = desencriptar.value;
    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Primero ingrese un texto!!!',
            confirmButtonText: 'Entendido'
        }).then((result) => {
            if (result.isConfirmed) {
                desencriptar.focus();
            }
        });
    } else if (libreria.test(texto) === false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Recuerde que no puede ingresar Mayúsculas, Caracteres Especiales, tampoco se permiten acentos',
            confirmButtonText: 'Entendido'
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarTexto(desencriptar);
            }
        });} 
    else {
        var textoDesencriptado = texto.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u").replace(/''/img, "");
        resultadoDesencriptar.innerHTML = textoDesencriptado;
       
        // Cambiar color del encabezado y resultado a blanco
        document.querySelector("section #desincriptadora h2").style.color = "white";
        resultadoDesencriptar.style.color = "white";

        document.querySelector("section #des h2").style.color = "white";
        resultadoDesencriptar.style.color = "white";

        document.querySelector("#resultado-desencriptado").style.color = "white";
        resultadoDesencriptar.style.color = "white";

        
        mostrarResultado(desencriptar, desencriptadoDisplay, autoDestruccionDes, desincriptadora);
        
    }
    
}

btnLimpiarDesencriptar.addEventListener('click', function() {

    // Recargar la página
    location.reload();
});



