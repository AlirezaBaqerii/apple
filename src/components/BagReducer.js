const BagReducer = (state, action) => {
  if (action.type === 'ADD_TO_BAG') {
    const newTotal = state.total + action.payload.price;
    return {
      ...state,
      total: newTotal,
      bagList: [...state.bagList, action.payload],
    };
  }

  // if (action.type === "GET_TOTAL") {

  // }

  return state;
};

export default BagReducer;
