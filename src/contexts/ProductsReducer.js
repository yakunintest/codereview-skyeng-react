export const sortByValueASC = (arr) => {
  return arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

export const sortByValueDESC = (arr) => {
  return arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
};


export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      if (action.payload === 'DESC') {
        return {
          ...state,
          products: sortByValueDESC(state.products)
        }
      }
      if (action.payload === 'ASC') {
        return {
          ...state,
          products: sortByValueASC(state.products)
        }
      }
      break;
    default:
      return state
  }
}
