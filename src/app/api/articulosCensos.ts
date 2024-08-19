const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadArticulosCensos(Props: { id: number }) {
  const { id } = Props;
  const res = await fetch(
    `${BASE_URL}/api/articulo-censos?filters[id][$eq]=${id}&populate=*`
  );
  const data = await res.json();
  return data;
}
