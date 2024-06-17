import axios from "axios";
import { BASE_URL } from "../constant/URL";
import { UserProps } from "../types/types";

export async function getCategoris() {
  const data = await fetch(`${BASE_URL}/categories`);
  return data.json();
}

export async function getProducts(category: string) {
  const { data } = await axios.get(`${BASE_URL}/products?category=${category}`);
  return data;
}

export async function getUsersByEmailPass(user: UserProps) {
  const { data } = await axios.get(
    `${BASE_URL}/users?email=${user.email}&password=${user.password}`
  );
  return data;
}
