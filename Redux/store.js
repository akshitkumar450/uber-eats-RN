import { createStore } from "redux";
import { rootReducer } from "./Reducers/rootReducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, enhancer);
