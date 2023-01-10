import Informacion from "./modules/info.js";
import Validar from "./modules/validacion.js";

//variables para almacenar informacion
const listCard = document.getElementById("Lista__cards");
const form = document.getElementById("form");
const verMas = document.getElementById("vermas");
const btn = document.getElementById("nav__btn");
const menu = document.getElementById("menu");

//inputs form
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

//Obtiene la informacion del json y la muestra en las cards
document.addEventListener("DOMContentLoaded", () => {
  Informacion.obtenerInfo(listCard);
});

btn.addEventListener("click", () => {
  activarClases();
});

menu.addEventListener("click", () => {
  activarClases();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let validNombre = Validar.texto(nombre);
  let validCorreo = Validar.correo(correo);
  let validMensaje = Validar.texto(mensaje);

  if (validNombre && validCorreo && validMensaje) {
    form.submit();
  }
});

verMas.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(".hidden");
  if (cards.length > 0) {
    verMas.innerText = "Ver menos proyectos";
    cards.forEach((element) => {
      element.classList.remove("hidden");
    });
  } else {
    verMas.innerText = "Ver mas proyectos";
    Informacion.obtenerInfo(listCard);
  }
});

function activarClases() {
  btn.classList.toggle("active");
  menu.classList.toggle("activar");
}
