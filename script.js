function verificarDia() {
    var dia = document.getElementById("diaInput").value.toLowerCase(); // Obtener el valor del input y convertir a minúsculas

    var esLaborable = false;

    if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes") {
        esLaborable = true;
    } else if (dia === "sábado" || dia === "domingo") {
        esLaborable = false;
    } else {
        alert("Por favor, ingrese un día válido de la semana."); // Mensaje de error si el usuario ingresa un día no válido
        return; // Salir de la función si el día ingresado no es válido
    }

    var mensaje = "El día " + dia + " es ";

    if (esLaborable) {
        mensaje += "un día laborable.";
        document.getElementById("resultado").style.backgroundColor = "#7FFF00"; // Verde para día laborable
    } else {
        mensaje += "un día de fin de semana.";
        document.getElementById("resultado").style.backgroundColor = "#FF6347"; // Rojo para día de fin de semana
    }

    document.getElementById("resultado").innerText = mensaje;
}