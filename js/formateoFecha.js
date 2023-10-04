function formateoFecha(fecha) {
  dia = fecha.slice(8, 10);
  mes = fecha.substring(5, 7);
  anio = fecha.substring(0, 4);
  nuevaFecha = dia + "/" + mes + "/" + anio;
  return nuevaFecha;
}
