const BASE_URL = process.env.NEXT_PUBLIC_HOST_URL;

export async function loadSubMenu(Props: { id: number }) {
  const { id } = Props;

  const res = await fetch(`${BASE_URL}/api/obtenerSubcategorias?id=${id}`);
  const data = await res.json();
  //  console.log(`data`);
  return data;
}
