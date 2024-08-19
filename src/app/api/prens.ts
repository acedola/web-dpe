const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadPrensa() {
  const res = await fetch(`${BASE_URL}/api/prensas?populate=*`);
  const data = await res.json();
  return data;
}
