formulario.addEventListener("submit", function(event) {
    // Validar el formulario antes de enviarlo
    if (nombre.value === "" || email.value === "" || comentarios.value === "") {
      alert("Por favor, complete todos los campos");
      event.preventDefault();
    }
  });