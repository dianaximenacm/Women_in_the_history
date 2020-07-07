function ada() {
    var nombrePer = prompt("Ingresa el nombre del personaje");
    nombrePer = nombrePer.toLowerCase();
    if (nombrePer == "Ada") {
        swal({
            title: "correcto",
            text: "El trabajo de Ada Lovelace fue descubierto a mediados del siglo XX y motivó al Departamento de Defensa de Estados Unidos a nombrar un lenguaje de programación en su honor.",
            type: "success",
            button: "Great"
        })
    } else {
        swal("oh, no es correcto,¡intenta de nuevo!"
        )
    }
}


function joan() {
    var nombrePer = prompt("Ingresa el nombre del personaje");
    nombrePer = nombrePer.toLowerCase();
    if (nombrePer =="Joan") {
        swal({
            title: "correcto",
            text: "Joan Clarke Fue la única mujer que trabajó en el equipo del matemático Alan Turing en el proyecto Enigma, que desencriptó las comunicaciones secretas de la Alemania nazi. ",
            type: "success",
            button: "Great"
        })
    } else {
        swal("oh, no es correcto,¡intenta de nuevo!"
        )
    }
}

function seis() {
    var nombrePer = prompt("¿Cuántas mujeres ?");
    nombrePer = nombrePer.toLowerCase();
    if (nombrePer =="6") {
        swal({
            title: "correcto",
            text: "Muy bien ! Son 6 Kay Antonelli, Jean Bartik, Betty Holberton, Marlyn Meltzer, Frances Spence y Ruth Teitelbaum ",
            type: "success",
            button: "Great"
        })
    } else {
        swal("oh, no es correcto,¡intenta de nuevo!"
        )
    }
}


function grace() {
    var nombrePer = prompt("¿Cuál es su nombre ?");
    nombrePer = nombrePer.toLowerCase();
    if (nombrePer =="grace") {
        swal({
            title: "correcto",
            text: "Muy bien ! Grace Murray Hopper fue una científica de la computación y militar estadounidense con grado de contraalmirante. Fue pionera en el mundo de las ciencias de la computación y la primera programadora que utilizó el Mark I. ",
            type: "success",
            button: "Great"
        })
    } else {
        swal("oh, no es correcto,¡intenta de nuevo!"
        )
    }
}



