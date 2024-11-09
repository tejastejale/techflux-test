import axios from "axios";
import { baseUrl, LOGIN } from "./ApiConstants";
import { useNavigate } from "react-router-dom";

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  console.log("req", req);
  const token = localStorage.getItem("token");
  if (token) req.headers["Authorization"] = `Bearer ${token}`;
  return req;
});

const get_all_products = () => API.get(`${baseUrl}/products`);

const login = (body) => API.post(`${LOGIN}`, body);

export { get_all_products, login };
