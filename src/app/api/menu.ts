

export async function loadMenu() {
    const res = await fetch("http://localhost:3000/api/menuF");
    const data = await res.json();
    return data;
  }