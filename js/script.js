// EXPRECION REGULAR PARA EL NOMBRE
let ExpNombre = new RegExp("[a-zA-Z]"); 
// EXPRESION REGULAR MARA LA NOTA
let ExpNota = new RegExp("[0-9]");
// EXPRESION REGULAR PARA EL CORREO
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
  // INICIO DE VALIDACION DE LA NOTA 1
  let nota1 = document.getElementById("nota1");
  switch (true) {
    case nota1.value == "0":
      mensaje("divnota1", "LA NOTA NO PUEDE SER CERO.");
      estado = false;
      break;
    case ExpNota.test(nota1.value) == false:
      mensaje("divnota1", "LA NOTA NO PUEDE SER LETRAS.");
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
