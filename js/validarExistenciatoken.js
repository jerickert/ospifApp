var token = localStorage.getItem("token");

var tokenConComillas = token;

var baererToken = "Bearer " + tokenSinComillas;

if (token !== null && token !== undefined) {
  console.log("El token está guardado en el localStorage:", token);
  var tokenConComillas = token;
  var tokenSinComillas = tokenConComillas.replace(/^"|"$/g, "");
  console.log(tokenSinComillas);
  var baererToken = "Bearer " + tokenSinComillas;
  console.log("baererToken: ", baererToken);
  var url = "https://ospif.intelligentia.com.ar" + "/api/v1/affiliates";

  var opciones = {
    method: "GET",
    headers: {
      Authorization: baererToken,
    },
  };

  
 /*  console.log("url index: ", url);
  console.log("opciones index: ", opciones); */
  fetch(url, opciones)
    .then(function (response) {
      console.log("statusCode: ", response.statusCode);
      console.log("status: ", response.status);
      if (response.status === 200) {
        console.log(response.json());
        var url = "./pages/credencial.html";
        window.location.href = url;
      } else {
        // La solicitud no fue exitosa, maneja el error según corresponda
        console.log(
          "en la linea 60 del index, el error es: ",
          response.statusText
        );
        console.log(
          "en la linea 60 del index, el codig error es: ",
          response.statusCode
        );
        console.log("response.json: ", response.json());
        console.error("Error en la solicitud:", response.statusText);
      }
    })

    .catch(function (error) {
      // Maneja los errores de la solicitud aquí
      console.error("Error:", error);
      console.log(
        "en la linea 60 del index, el error es: ",
        response.statusText
      );
      console.log(
        "en la linea 60 del index, el codig error es: ",
        response.statusCode
      );
      console.log("response.json: ", response.json());
      console.error("Error en la solicitud:", response.statusText);
    });
} else {
  console.log("El token no está guardado en el localStorage.");
  // Puedes manejar la situación cuando el token no está presente

  var url = "../pages/login.html";
  window.location.href = url;
}
