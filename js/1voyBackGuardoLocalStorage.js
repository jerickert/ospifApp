function guardoUsuYPass(usu, pass) {
  if (typeof Storage == "undefined") {
    document.write(
      "Inconvenientes con LocalStorage, comunicarse con atencion al cliente"
    );
  } else {
    function limpioArrayGrupo(repetidos, grupoFamiliar) {
      repetidos.forEach((original) => {
        grupoFamiliar.splice(original, 1);
      });
      return grupoFamiliar;
    }

    const urlOspifLogin =
      "https://ospif.intelligentia.com.ar" + "/api/v1/auth/email/login";

    let usuarioLogin = {
      email: usu,
      password: pass,
    };

    fetch(urlOspifLogin, {
      method: "POST",
      body: JSON.stringify(usuarioLogin),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const respuesta = data;

        if (respuesta.errors) {
          console.log("error ");
          if (respuesta.errors.email) {
            function timeout(ms) {
              return new Promise((resolve, reject) => {
                  setTimeout(resolve, ms);
              });
          }
            console.log("email incorrecto ");
            var div = document.getElementById("miDiv");
            div.style.display = "block";
            timeout(2500) 
            .then(() => {
              window.location.href = "../pages/login.html";
            })
            .catch((error) => {
                console.error("Ocurrió un error:", error);
            });
            

          } else {
            console.log("pass incorrecta ");
          }

        } else {
          const token = JSON.stringify(respuesta.token);
          const usuario = respuesta.user;
          const usuarioDni = usuario.affiliate.documentId;
          var repetido = [];

          console.log("usuarioDni: ", usuarioDni);

          usuario.affiliate.birthDateFormateado = formateoFecha(
            usuario.affiliate.birthDate
          );
          usuario.affiliate.age = calcularEdad(usuario.affiliate.birthDate);
          usuario.affiliate.registerDateFormateado = formateoFecha(
            usuario.affiliate.registerDate
          );

          usuario.affiliate.affiliates.forEach((objeto, indice) => {
            objeto.birthDateFormateado = formateoFecha(objeto.birthDate);

            objeto.age = calcularEdad(objeto.birthDate);

            if (objeto.photo === null || objeto.photo === undefined) {
              objeto.photo = "../images/foto.png"; //DEBERIA TOMARLO DEL LOCALSTORAGE
            }

            if (objeto.documentId == usuarioDni) {
              repetido.push(indice);
            } else {
              // si susuario es conyuge, sacar al titular del grupo familiar
              if (objeto.relationshipCode == 0) {
                repetido.push(indice);
              }
            }
          });

          if (repetido) {
            repetido.sort((a, b) => b - a);
            usuario.affiliate.affiliates = limpioArrayGrupo(
              repetido,
              usuario.affiliate.affiliates
            );
          }
          var fechaActual = new Date();

          localStorage.setItem("token", token);
          localStorage.setItem("usuario", JSON.stringify(usuario));
          localStorage.setItem("afiliado", JSON.stringify(usuario.affiliate));
          localStorage.setItem(
            "grupo",
            JSON.stringify(usuario.affiliate.affiliates)
          );

          localStorage.setItem("fechatoken", fechaActual);

          
          window.location.href = "../pages/credencial.html";
        }
      })

      .catch((error) => {
        console.log("error en el pedido, salgo por catch", error);

        var url = "../pages/offline.html";
        window.location.href = url;
      });
  }
}
