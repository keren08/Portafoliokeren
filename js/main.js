import Informacion from "./modules/info.js";
import Validar from "./modules/validacion.js";

//variables para almacenar informacion
const listCard = document.getElementById("Lista__cards");
const form = document.getElementById("form");
const verMas = document.getElementById("vermas");

//inputs form
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

//Obtiene la informacion del json y la muestra en las cards
document.addEventListener("DOMContentLoaded", () => {
  Informacion.obtenerInfo(listCard);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    Validar.texto(nombre) &&
    Validar.correo(correo) &&
    Validar.texto(mensaje)
  ) {
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
