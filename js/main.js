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


