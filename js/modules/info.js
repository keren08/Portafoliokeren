class Informacion {
  static obtenerInfo(listCard) {
    $.get("../../Assets/doc/proyectos.json", (data, status) => {
      Informacion.mostrarHtml(data, listCard);
    });
  }

  static mostrarHtml(listaProyectosJson, listCard) {
    listCard.innerHTML = "";
    listaProyectosJson.forEach((proyecto, index) => {
      let visible = index > 1 ? "hidden" : "";
      let HTML = `  <div class="col mb-2">
      <div class="card ${visible}">
        <img
          src="Assets/img/${proyecto.img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${proyecto.nombre}</h5>
          <p class="card-text">
            ${proyecto.description}
          </p>
        </div>
        <div class="card-body d-flex justify-content-center">
          <a
            href="${proyecto.link}"
            class="btn btn-primary btn--color"
            >Ver mas</a
          >
        </div>
      </div>
    </div>`;

      listCard.insertAdjacentHTML("beforeend", HTML);
    });
  }
}

export default Informacion;
