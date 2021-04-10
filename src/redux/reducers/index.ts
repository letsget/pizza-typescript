import { combineReducers } from "redux";

import { cartReducer } from "./cartReducer";
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  app: appReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
