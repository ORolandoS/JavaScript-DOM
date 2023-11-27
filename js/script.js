let ExpNombre = new RegExp("[a-zA-Z]");
let rexExpCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
let ejecutar = document.querySelector(".ejecutar");
ejecutar.addEventListener("click", (e) => {
  let estado = true;
  let nombre = document.getElementById("nombre");
  // INICIO DE VALIDACION DEL NOMBRE
  switch (true) {
    case nombre.value.length == 0:
      mensaje("divnombre", "EL NOMBRE NO PUEDE ESTAR VACIO.");
      estado = false;
      break;
    case ExpNombre.test(nombre.value) == false:
      mensaje("divnombre", "EL NOMBRE NO PUEDE SER SOLO NUMERO.");
      estado = false;
      break;
    default:
      break;
  }
  // INICIO DE VALIDACION DEL CORREO
  let correo = document.getElementById("correo");
  switch (true) {
    case correo.value.length == 0:
      mensaje("divcorreo", "EL CORREO NO PUEDE ESTAR VACIO.");
      estado = false;
      break;
    case rexExpCorreo.test(correo.value) == false:
      mensaje("divcorreo", "EL CORREO NO ES VALIDO.");
      estado = false;
      break;
    default:
      break;
  }
  if (estado == true) {
    // let correcto = document.querySelector(".botones");
    mensaje("botones", "SE ENVIO EL MENSAJE");
    nombre.value = correo.value = "";
    nota1.value = "0";
  }
});

function mensaje(padre, texto) {
  let sms = document.createElement("p");
  sms.textContent = texto;
  let divnombre = document.getElementById(padre);
  divnombre.appendChild(sms);
  setTimeout(() => {
    divnombre.removeChild(sms);
  }, 3000);
}
