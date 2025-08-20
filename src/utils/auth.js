export function getAfiliado() {
  const data = localStorage.getItem("afiliado");
  return data ? JSON.parse(data) : null;
}

export function getToken() {
  return localStorage.getItem("token");
}
