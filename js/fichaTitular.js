function muestroFicha() {
  var ApellidoYNombre, fechaNac;
  var AfiliadoNumero,
    doc,
    plan,
    estadoPlan,
    telefono,
    telefonoCelular,
    fechaIngreso;

  let datosTitular = JSON.parse(localStorage.getItem("usuario"));

  const fotoElement = document.getElementById("foto");

   if (
    datosTitular.affiliate.photoHex === null ||
    datosTitular.affiliate.photoHex === undefined
  ) {
    const fotoDefault = "../images/foto.png";
    datosTitular.affiliate.photo = fotoDefault;
    fotoElement.src = fotoDefault;
  } else {
    fotoElement.src = obtenerFotoSrc(datosTitular.affiliate.photoHex);
  } 

  /* CARGO LAS VARIABLES DESDE EL localStorage */
  ApellidoYNombre = datosTitular.affiliate.name;
  AfiliadoNumero = "Afiliado N°: ";
  AfiliadoNumero += datosTitular.affiliate.affiliateNumber;
  doc =
    datosTitular.affiliate.documentType +
    ": " +
    datosTitular.affiliate.documentId;
  AfiliadoRelacion = datosTitular.affiliate.relationship;

  fechaNac =
    "Fecha de Nacimiento: " + datosTitular.affiliate.birthDateFormateado;
  plan = "PLAN: " + datosTitular.affiliate.namePlan;
  estadoPlan = "ESTADO: " + datosTitular.affiliate.statusPlan;

  telefono = datosTitular.affiliate.telephone;
  if (telefono == null) {
    telefono = "Telefono: sin dato";
  } else {
    telefono = "Telefono: " + telefono;
  }
  telefonoCelular = datosTitular.affiliate.cellphone;
  if (telefonoCelular == null) {
    telefonoCelular = "Teléfono celular: sin dato";
  } else {
    telefonoCelular = "Teléfono celular: " + telefonoCelular;
  }

  fechaIngreso =
    "Fecha de ingreso: " + datosTitular.affiliate.registerDateFormateado;

  const arrayFamiliar = datosTitular.affiliate.affiliates;
  const cantFlia = arrayFamiliar.length;
  if (cantFlia === 0) {
    // Si es nula, oculta el elemento con la clase "ocultar-elemento"
    const miGrupoFamiliar = document.getElementById("miGrupoFamiliar");
    if (miGrupoFamiliar) {
      // Verifica que el elemento exista
      miGrupoFamiliar.style.display = "none";
    }
  }

  document.getElementById("ApellidoYNombre").textContent = ApellidoYNombre;
  document.getElementById("AfiliadoNro").textContent = AfiliadoNumero;
  document.getElementById("AfiliadoRelacion").textContent = AfiliadoRelacion;
  document.getElementById("fechaDeNacimiento").textContent = fechaNac;
  document.getElementById("tipoYNroDoc").textContent = doc;
  document.getElementById("telefono").textContent = telefono;
  document.getElementById("telefonoCelular").textContent = telefonoCelular;
  document.getElementById("plan").textContent = plan;
  document.getElementById("estadoPlan").textContent = estadoPlan;
  document.getElementById("fechaIngreso").textContent = fechaIngreso;
}

muestroFicha();
