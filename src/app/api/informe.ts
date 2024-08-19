const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadInformes(Props: { id: number }) {
  const { id } = Props;
  console.log(`el id es ${id}`);
  const res = await fetch(
    `${BASE_URL}/api/historico-informes?filters[id_art][$eq]=${id}&populate=historico-informes`
  );
  const data = await res.json();
  return data;
}
