import { get_all_products } from ".";
import * as API from "./index";

const getProducts = async (dispatch) => {
  try {
    const res = await API.get_all_products();
    dispatch({ type: "products", payload: res.data.products });
  } catch (error) {
    console.log(error);
  }
};

const makeLogin = async (body) => {
  try {
    const res = await API.login(body);
    // console.log(res);
    return res;
  } catch (error) {
    return error;
  }
};

export { getProducts, makeLogin };
