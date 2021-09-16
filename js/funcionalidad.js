document.getElementById('opciones').addEventListener("change", programaSeleccionado);

//Función para inicializar variables y limpiar articulos, y mostrar cajas
function programaSeleccionado() {
    document.getElementById("numero").value = null;

    //getElementsByTagName convierte en arreglo porque guarda más de un elemento
    capas = document.getElementsByTagName("article");

    //Ocultar varios elementos
    for (i = 0; i < capas.length; i++) {
        capas[i].style.display = "none";
    }

    //Almacenar el dato de la opción del usuario
    var articulo = document.getElementById("opciones").value;
    document.getElementById(articulo).style.display = "block";
}

function mostrarCajas() {
    var num = document.getElementById("numero").value;
    for (var i = 0; i < num.length; i++) {
        var ctx = num.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
        document.getElementById("cajas");
    }
    document.getElementById("resultado").innerHTML = ctx;
}

function respuestas() {
    var answers = document.getElementsByTagName("input").value;
    "Tus resultados";
    document.getElementById("resultado").innerHTML = answers;
}




