const initialState = {
  cartItems: [],
  name: "",
};

export const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD": {
      // if the the current item is checked then add to cart
      if (action.payload.isChecked) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        //   if the item is unchecked and the item was there it the cart ,,then remove it (this will happen when we uncheck the same item which is already in the cart)
        let temp = state.cartItems?.filter(
          (item) => item.title !== action.payload.title
        );
        return {
          ...state,
          cartItems: temp,
        };
      }
    }
    default:
      return state;
  }
};
