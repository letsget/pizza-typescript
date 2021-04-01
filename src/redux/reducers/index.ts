import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
