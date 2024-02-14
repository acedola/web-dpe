export async function loadPrensa() {
  const res = await fetch(
    `http://www-backend.desa.estadistica.ec.gba.gov.ar/api/prensas?populate=*`
  );
  const data = await res.json();
  return data;
}
