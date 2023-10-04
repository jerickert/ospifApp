function validarUsuario(e) {
    if (usuario.value == "" || usuario.value == null) {
      error.style.display = "block";
      error.innerHTML += "<li>Por favor completa el nombre</li>";
      e.preventDefault(); /* SI HAY UN ERROR NO ENVIA EL FORMULARIO */
    } else {
      error.style.display = "none";
    }
  }

  function validarContrasena(e) {
    if (contrasena.value == "" || contrasena.value == null) {
      error.style.display = "block";
      error.innerHTML += "<li>Por favor completa le correo</li>";

      e.preventDefault(); /* SI HAY UN ERROR NO ENVIA EL FORMULARIO */
    } else {
      error.style.display = "none";
    }
  }
