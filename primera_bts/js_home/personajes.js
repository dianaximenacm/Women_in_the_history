function ada() {
    var nombrePer = prompt("Ingresa el nombre del personaje");
    nombrePer = nombrePer.toLowerCase();
    if (nombrePer == "ada") {
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

function joan(){
    var nombrepersonaje = prompt("ingresa el nombre del personaje");

    nombrepersonaje = nombrePersonaje.tolowerCase()
    if (nombrepersonaje == "joan")
        alert("Bien!")
    else {
        swal("oh, no es correcto,¡intenta de nuevo!")
    }
}