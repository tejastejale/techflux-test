import React, { useEffect } from "react";
import { getProducts } from "../API/Requests";
import { useDispatch, useSelector } from "react-redux";

function Example() {
  useEffect(() => {
    getProducts(dispatch);
    dispatch({ type: "append", payload: data });
  }, []);

  const data = [1, 2, 3];
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.ProductsReducer);
  console.log(reduxData);
  return <div>Example</div>;
}

export default Example;
