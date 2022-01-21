const initialState = {
  items: {
    cartItems: [],
    name: "",
  },
};

export const cartReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD":
      return {
        items: {
          ...state,
          cartItems: [...state.items.cartItems, action.payload],
        },
      };
    case "REMOVE":
      return {};
    default:
      return state;
  }
};
