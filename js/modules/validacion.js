class Validar {
  static texto(input) {
    let text = input.value;
    let esValido = true;
    if (input.nextElementSibling) {
      if (input.nextElementSibling.tagName == "P") {
        input.nextElementSibling.remove();
        input.classList.remove("borde_error");
      }
    }

    if (text == "") {
      input.classList.add("borde_error");
      input.insertAdjacentHTML(
        "afterend",
        "<p class='texto_blanco'>Debe llenar este espacio</p>"
      );
      esValido = false;
    }

    return esValido;
  }

  static correo(input) {
    let text = input.value;
    let esValido = true;
    if (input.nextElementSibling) {
      if (input.nextElementSibling.tagName == "P") {
        input.nextElementSibling.remove();
        input.classList.remove("borde_error");
      }
    }

    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(text)) {
      input.classList.add("borde_error");
      input.insertAdjacentHTML(
        "afterend",
        "<p class='texto_blanco'>El formato de correo no es correcto</p>"
      );
      esValido = false;
    }

    return esValido;
  }
}

export default Validar;
