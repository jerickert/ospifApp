function muestroFicha() {
  var ApellidoYNombre, AfiliadoRelacion, fechaNac;
  var AfiliadoNumero,
    doc,
    plan,
    estadoPlan,
    telefono,
    telefonoCelular,
    fechaIngreso;

  let datosTitular = JSON.parse(localStorage.getItem("usuario"));

  console.log("datos tiular en ficha titular linea 12", datosTitular);

  const fotoElement = document.getElementById("foto");

  let status = datosTitular.affiliate.status;
  telefono = datosTitular.affiliate.telephone;

  function formateoTelefonos() {
    if (telefono == null || typeof telefono == "string") {
      telefono = "Telefono: sin dato";
    } else {
      telefono = "Telefono: " + telefono;
    }
      telefonoCelular = datosTitular.affiliate.cellphone;
      
    if (telefonoCelular == null || typeof telefonoCelular == "string") {
      telefonoCelular = "Teléfono celular: sin dato";
    } else {
      telefonoCelular = "Teléfono celular: " + telefonoCelular;
    }
  }

  function formateoFotos() {
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
  }
  const arrayFamiliar = datosTitular.affiliate.affiliates;

  function desactivoFamilia() {
    const miGrupoFamiliar = document.getElementById("miGrupoFamiliar");
    miGrupoFamiliar.style.display = "none";
    console.log("sin array familiar", arrayFamiliar);
  }

  function evaluoGrupoFamiliar() {
    if (typeof arrayFamiliar == "undefined") {
      desactivoFamilia();
    } else {
      cantFlia = arrayFamiliar.length;
      if (cantFlia == 0) {
        desactivoFamilia();
      }
    }
  }

  function formateoFechas() {
    fechaNac =
      "Fecha de Nacimiento: " + datosTitular.affiliate.birthDateFormateado;
    plan = "PLAN: " + datosTitular.affiliate.namePlan;
    estadoPlan = "ESTADO: " + datosTitular.affiliate.status;

    fechaIngreso =
      "Fecha de ingreso: " + datosTitular.affiliate.registerDateFormateado;
    console.log("afiliados del grupo, ", datosTitular.affiliate.affiliates);
  }
  function evaluoEstadoPlan() {
    var elementoH4 = document.getElementById("ApellidoYNombre");
    var estadoAfiliadoNro = document.getElementById("AfiliadoNro");
    var estadoDelPlan = document.getElementById("estadoPlan");
    var estadoAfiliadoRelacion = document.getElementById("AfiliadoRelacion");
    // Verifica si la variable nombre está vacía
    if (status !== "Activo") {
      // Aplica un estilo CSS al elemento si la variable está vacía
      elementoH4.style.color = "red";
      estadoAfiliadoNro.style.color = "red";
      estadoDelPlan.style.color = "red";
      estadoAfiliadoRelacion.style.color = "red";
    }
  }
  function muestroVariblesEnHTML() {
    AfiliadoRelacion = datosTitular.affiliate.relationship.name;
    ApellidoYNombre = datosTitular.affiliate.name;
    AfiliadoNumero = "Afiliado N°: ";
    AfiliadoNumero += datosTitular.affiliate.affiliateNumber;
    doc =
      datosTitular.affiliate.documentType +
      ": " +
        datosTitular.affiliate.documentId;
      empresa = "Empresa: " + datosTitular.affiliate.company.name;
    document.getElementById("ApellidoYNombre").textContent = ApellidoYNombre;
    document.getElementById("AfiliadoNro").textContent = AfiliadoNumero;
    document.getElementById("AfiliadoRelacion").textContent = AfiliadoRelacion;
    document.getElementById("estadoPlan").textContent = status;
    document.getElementById("fechaDeNacimiento").textContent = fechaNac;
    document.getElementById("tipoYNroDoc").textContent = doc;
    document.getElementById("telefono").textContent = telefono;
    document.getElementById("telefonoCelular").textContent = telefonoCelular;
      document.getElementById("plan").textContent = plan;
      document.getElementById("empresa").textContent = empresa;
      
    document.getElementById("estadoPlan").textContent = estadoPlan;
    document.getElementById("fechaIngreso").textContent = fechaIngreso;
  }
  /* CARGO LAS VARIABLES DESDE EL localStorage */
  formateoFotos();
  formateoFechas();
  formateoTelefonos();
  evaluoGrupoFamiliar();
  evaluoEstadoPlan();
  muestroVariblesEnHTML();

  console.log("Status", status);
}

muestroFicha();
