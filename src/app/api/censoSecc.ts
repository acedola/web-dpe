const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadCensos(Props: { id: number }) {
  const { id } = Props;
  const res = await fetch(
    `${BASE_URL}/api/censos?populate=*&filters[id_categoria]=${id}`
  );

  const data = await res.json();
  return data; //.next as { data: CensosData[] }; // Asegúrate de que data tiene la estructura esperada
}
