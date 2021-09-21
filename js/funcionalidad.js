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
    var num = parseInt(document.getElementById("numero").value);
    for (var i = 0; i < num; i++) {
        var mostrar = document.getElementById("mostrarCajas")
        var caja=document.createElement("div");
        caja.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp";
        caja.style.display="inline-block";
        caja.style.margin="7px 7px";
        caja.style.backgroundColor='red';
        caja.style.border='solid';
        mostrar.appendChild(caja);
    }
    
}

function mostrarRespuestas(){
    document.getElementById("encuesta").style.display="none";
    document.getElementById("mostrarResp").style.display="block";
    document.getElementById("tituloResp").innerHTML="Resultados<br>";
    var pregunta1="¿Qué tipo de comida prefiere comer en la escuela?";
    var respuesta1=document.getElementById("respuesta1").value;
    var pregunta2="¿Qué deporte práctica dentro del campus?";
    var respuesta2=document.getElementById("respuesta2").value;
    var pregunta3="¿Cuál es su materia favorita?";
    var respuesta3=document.getElementById("respuesta3").value;
    var pregunta4="¿Qué le gustaría que se incluyera en el campus?";
    var respuesta4=document.getElementById("respuesta4").value;
    var pregunta5="¿Cómo llegas al campús?";
    var respuesta5=document.getElementById("respuesta5").value;
    document.getElementById("preg1").innerHTML=pregunta1+"<br>"+respuesta1;
    document.getElementById("preg2").innerHTML=pregunta2+"<br>"+respuesta2;
    document.getElementById("preg3").innerHTML=pregunta3+"<br>"+respuesta3;
    document.getElementById("preg4").innerHTML=pregunta4+"<br>"+respuesta4;
    document.getElementById("preg5").innerHTML=pregunta5+"<br>"+respuesta5;
}



