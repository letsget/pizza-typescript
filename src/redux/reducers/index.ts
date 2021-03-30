import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
});

export { rootReducer };
