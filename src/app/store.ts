import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore } from "redux-persist";

import rootReducer from "../redux/reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
