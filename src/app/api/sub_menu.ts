

export async function loadSubMenu(Props: {id: number}) {
  const {id} = Props
  
  const res = await fetch(`http://localhost:3000/api/obtenerSubcategorias?id=${id}`);
  const data = await res.json();
//  console.log(`data`);
  return data;
}