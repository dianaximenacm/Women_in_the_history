function validarFormulario() {
    /* La propiedad value establece o devuelve el valor del atributo, value de un campo numerico, 
    el atributo, value de un campo numerico, el atributo del valos especifica el valor
    predeterminado oel calos que un usuario escribe . (o un valor establecido por un script) */
    var txtNombre = document.getElementById("nombre").value;
    var txtCorreo = document.getElementById("correo").value;
    var txtTelefono = document.getElementById("telefono").value;
    var txtMensaje = document.getElementById("mensaje").value;
}
if (txtNombre == null || txtNombre.length == 0) {
    alert("ERROR:El campo nombre no debe ir vacio ,ni incompleto");
    return false;
} else {
    //Todos los numeros del 0 al 9 
    if (/^([0-9])*$/.test(txtNombre)) {
        alert("ERROR:el campo nombre no debe tener numeros");
        return false;
    } else {
        //si no son letras, negación¡
        if (!(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(txtNombre))) {
            alert("ERROR:el campo nombre no debe tener carateres");
            return false;
        }
    }
}

if (!(/^\w+([\.-])?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtCorreo))) {
    alert("Error:Debe escribir un correo valido");
    return false;
}

if (txtTelefono == null || txtTelefono.length == 0) {
    alert("ERROR: El campo de telefono no debe ir vacio");
} else {
    if (isNaN(txtTelefono)) {
        alert("ERROR: El telefono no debe llevar letras");

    }
}

if (txtMensaje == null || txtMensaje.length == 0) {
    alert("ERROR: El campo mensaje no debe ir vacio");
}
return true
}