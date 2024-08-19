const BASE_URL = process.env.NEXT_PUBLIC_HOST_URL;

export async function loadMenu() {
  const res = await fetch(`${BASE_URL}/api/menuF`);
  const data = await res.json();
  return data;
}
