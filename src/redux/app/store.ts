import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  authReducer,
  cartReducer,
  dashboardReducer,
  productCategoryReducer,
  productReducer,
  productVariantReducer,
  transactionReducer,
  userReducer,
} from "../features";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  productCategory: productCategoryReducer,
  product: productReducer,
  productVariant: productVariantReducer,
  transaction: transactionReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
