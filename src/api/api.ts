import { BASE_URL } from "../constant/URL";

export default async function getCategoris() {
  const data = await fetch(`${BASE_URL}/categories`);
  return data.json();
}
