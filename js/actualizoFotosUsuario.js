const usuario = JSON.parse(localStorage.getItem("usuario"));
let afiliado = usuario.affiliate;

const actualizarFoto = (afiliado) => {
  
  if (afiliado.photoHex === null || afiliado.photoHex === undefined) {
    const fotoDefault = "../images/foto.png";
    afiliado.photo = fotoDefault;
  } else {
    afiliado.photo = obtenerFotoSrc(afiliado.photoHex ? afiliado.photoHex : "");
  }
};

actualizarFoto(afiliado);

 const grupoFamiliar = afiliado.affiliates;

/*const cantFlia = grupoFamiliar.length;
if (cantFlia > 0) {
  grupoFamiliar.forEach((familiar) => {
    console.log("saque la duplicacion, en teoria del actualizofotosusuario");
     actualizarFoto(familiar); 
  });
} */

localStorage.setItem("usuario", JSON.stringify(usuario));
