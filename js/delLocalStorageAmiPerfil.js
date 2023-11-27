(function () {
    const obtenerFotoSrc = (hex) => {
        const input = hex.substring(1, hex.length).replace(/[^A-Fa-f0-9]/g, "");
        if (input.length % 2) {
            console.log("cleaned hex string length is odd.");
            return;
        }

        const binary = [];
        for (let i = 0; i < input.length / 2; i++) {
            const h = input.substr(i * 2, 2);
            binary[i] = parseInt(h, 16);
        }

        const byteArray = new Uint8Array(binary);

        const src = window.URL.createObjectURL(
            new Blob([byteArray], { type: "application/octet-stream" })
        );

        return src;
    };

    function desactivoFamilia() {
        const miGrupoFamiliar = document.getElementById("miGrupoFamiliar");
        miGrupoFamiliar.style.display = "none";
        /*  console.log("sin array familiar"); */
    }

    var datosTitular, telefono, telefonoCelular;

    datosTitular = JSON.parse(localStorage.getItem("usuario"));
    console.log("datos titular en perfil: ", datosTitular);
    const fotoElement = document.getElementById("foto");
    let status = datosTitular.affiliate.statusPlan;

    if (
        datosTitular.affiliate.photoHex === null ||
        datosTitular.affiliate.photoHex === undefined
    ) {
        console.log("foto nula");
        const fotoDefault = "../images/foto.png";
        datosTitular.affiliate.photo = fotoDefault;
        fotoElement.src = fotoDefault;
    } else {
        fotoElement.src = obtenerFotoSrc(datosTitular.affiliate.photoHex);
    }

    /* CARGO LAS VARIABLES DESDE EL localStorage */

    telefono = datosTitular.affiliate.telephone;
    if (telefono == null || telefono == 0) {
        telefono = "Telefono: sin dato";
    } else {
        telefono = "Telefono: " + telefono;
    }
    telefonoCelular = datosTitular.affiliate.cellphone;
    if (telefonoCelular == null || telefonoCelular == 0) {
        telefonoCelular = "Teléfono celular: sin dato";
    } else {
        telefonoCelular = "Teléfono celular: " + telefonoCelular;
    }

    if (typeof datosTitular.affiliate.affiliates == "undefined") {
        desactivoFamilia();
        console.log("La variable pepito no existe., desactive menu");
    } else {
        console.log(
            "La variable pepito existe. linea 60, del local a mi perfil"
        );
        const arrayFamiliar = datosTitular.affiliate.affiliates;
        const cantFlia = arrayFamiliar.length;

        if (cantFlia === 0) {
            const miGrupoFamiliar = document.getElementById("miGrupoFamiliar");
            if (miGrupoFamiliar) {
                // Verifica que el elemento exista
                desactivoFamilia();
            }
        }
    }

    // Verifica si la variable nombre está vacía
    if (status !== "Activo") {
        var elemento = document.getElementById("ApellidoYNombre");

        // Aplica un estilo CSS al elemento
        elemento.style.color = "red"; // Cambia el color del texto a rojo
        elemento.style.fontWeight = "bold"; // Establece la negrita
        elemento.style.fontSize = "24px"; // Establece el tamaño de fuente
        // Puedes agregar más estilos de la misma manera
    }

    document.getElementById("ApellidoYNombre").textContent =
        datosTitular.affiliate.name;
    document.getElementById("AfiliadoNro").textContent =
        "Afiliado N°: " + datosTitular.affiliate.affiliateNumber;
    document.getElementById("AfiliadoRelacion").textContent =
        datosTitular.affiliate.relationship.name;

    document.getElementById("tipoYNroDoc").textContent =
        datosTitular.affiliate.documentType +
        ": " +
        datosTitular.affiliate.documentId;
    document.getElementById("telefono").textContent = telefono;
    document.getElementById("telefonoCelular").textContent = telefonoCelular;
    document.getElementById("plan").textContent =
        "PLAN: " + datosTitular.affiliate.namePlan;
    document.getElementById("estadoPlan").textContent =
        "ESTADO: " + datosTitular.affiliate.statusPlan;
    document.getElementById("email").textContent =
        "email: " + datosTitular.affiliate.email;
    document.getElementById("empresa").textContent =
        "Empresa: " + datosTitular.affiliate.company.name;
    document.getElementById("fechaIngreso").textContent =
        "Fecha de Ingreso: " + datosTitular.affiliate.registerDateFormateado;
    document.getElementById("fechaNacimiento").textContent =
        "Fecha de Nacimiento: " + datosTitular.affiliate.birthDateFormateado;
    document.getElementById("edad").textContent =
        "Edad: " + datosTitular.affiliate.age + " años";
})();
