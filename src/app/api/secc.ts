const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function loadArticulos(Props: { id: number | null | undefined }) {
  const { id } = Props;

  // Verificar que id no sea null o undefined
  if (id === null || id === undefined) {
    console.error('ID no válido: debe ser un número.');
    return null; // O devuelve un objeto vacío, un valor por defecto, etc.
  }

  try {
    const res = await fetch(
      `${BASE_URL}/api/articulos?filters[id_subCat][$eq]=${id}&populate=*`
    );

    // Verifica si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error al cargar artículos:', error);
    // Manejo adicional del error, si es necesario
    return null; // O devuelve un valor por defecto o un objeto de error
  }
}
