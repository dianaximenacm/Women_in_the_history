var login1 = document.getElementById("login1")
var login2 = document.getElementById("login2")
var loginUser = document.getElementById("loginUser")




function show_1(){
      var element = document.getElementById('text_1');

      if(element.style.visibility == 'visible'){
          element.style.visibility = 'hidden';

      } else
      element.style.visibility = 'visible';

 }

function show_2(){
    var element = document.getElementById('text_2');

    if(element.style.visibility == 'visible'){
        element.style.visibility = 'hidden';

    } else
    element.style.visibility = 'visible';

}


if(localStorage.getItem('name')){
    loginUser.innerHTML = localStorage.getItem('name');
}


function iniciarSesion(){
    var usuario = prompt("ingresa tu nombre")

    //almacenamiento local del computador; la propiedad de solo lectura permite
                 // acceder al objeto local storage ; los datos persisten almacenados
                    //entre las diferentes sesiones de navegación

                    //un objeto storage que se puede utilizar para acceder al espacio
                    // de almacenmiento local del origen actual.


    localStorage.setItem('name', usuario)

    //innerHTML sirve para "escribir dentro de un elemento HTML"
    // DOMString
    loginUser.innerHTML = usuario;
}

function cerrarSesion(){

    loginUser.innerHTML= " ";
    localStorage.clear();
}

login1.onclick = function(){iniciarSesion()};


login2.onclick = cerrarSesion;
