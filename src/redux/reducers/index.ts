import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./cartReducer";
import { appReducer } from "./appReducer";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  app: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
