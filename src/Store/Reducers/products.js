const initialState = {
  products: {},
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products": {
      return { ...state, products: action.payload };
    }
    case "append": {
      return { ...state, products: { ...state.products, ...action.payload } };
    }
    default:
      return state;
  }
};

export default ProductsReducer;
