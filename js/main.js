/*FUD SOLUCIONES*/
/*let titulo = "FUD SOLUCIONES WEB ";
let palabrasArray = ["TIENDA ONLINE", "BLOGS", "MARKETING DIGITAL", "FOTOGRAFÍA DE PRODUCTOS", "DISEÑO DE LOGO", "DISEÑO GRÁFICO", "IDENTIDAD DE MARCA", "DESARROLLO WEB", "OPTIMIZACIÓN SEO", "GESTIÓN DE REDES SOCIALES", "PUBLICIDAD EN LÍNEA", "ANÁLISIS DE DATOS", "CREACIÓN DE CONTENIDO", "BRANDING", "DISEÑO DE INTERFAZ DE USUARIO", "DISEÑO DE EXPERIENCIA DE USUARIO", "DESARROLLO DE APLICACIONES MÓVILES", "GESTIÓN DE PROYECTOS", "SOPORTE TÉCNICO"];
let colores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "brown", "pink", "purple", "cyan", "magenta", "lime", "maroon", "olive", "teal", "silver", "gray", "black"];
let indiceLetraTitulo = 0;
let letraActualTitulo = "";

function escribirTitulo() {
    if (indiceLetraTitulo < titulo.length) {
        letraActualTitulo = titulo.slice(0, ++indiceLetraTitulo);
        document.getElementById("titulo").textContent = letraActualTitulo;
        setTimeout(escribirTitulo, 200); // Espera 200ms antes de escribir la siguiente letra
    } else {
        mostrarPalabras(0);
    }
}

function mostrarPalabras(i) {
    if (i < palabrasArray.length) {
        var palabra = document.createElement("span");
        palabra.textContent = palabrasArray[i];
        palabra.style.color = colores[i];
        document.getElementById("palabras").innerHTML = ''; // Borra la palabra anterior
        document.getElementById("palabras").appendChild(palabra);
        setTimeout(function() { mostrarPalabras(i + 1); }, 800); // Espera 0.5 segundos antes de mostrar la siguiente palabra
    } else {
        mostrarPalabras(0); // Comienza de nuevo cuando se han mostrado todas las palabras
    }
}

escribirTitulo();*/


/*---MATIAS URETA-PROGRAMADOR---*/

/*let textoArray = ["Matias Ureta", "Programador"];
let indiceTexto = 0;
let indiceLetra = 0;
let textoActual = "";
let letraActual = "";


function maquinaDeEscribir() {
    if (indiceTexto < textoArray.length) {
        textoActual = textoArray[indiceTexto];
        letraActual = textoActual.slice(0, ++indiceLetra);
        document.getElementById("texto").textContent = letraActual;
        if (letraActual.length === textoActual.length) {
            indiceTexto++;
            indiceLetra = 0;
            setTimeout(maquinaDeEscribir, 2000); 
        } else {
            setTimeout(maquinaDeEscribir, 200); 
        }
    } else {
        indiceTexto = 0;
        maquinaDeEscribir();
    }
}

maquinaDeEscribir();*/



