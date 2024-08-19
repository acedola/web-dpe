const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadArticulos(Props: { id: number }) {
  const { id } = Props;
  const res = await fetch(
    `${BASE_URL}/api/articulos?filters[id_subCat][$eq]=${id}&populate=*`
  );
  const data = await res.json();
  return data;
}
