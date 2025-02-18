import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import budgetSlice from "@/store/budgetSlice";
import investmentSlice from "@/store/investmentSlice";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  budget: budgetSlice,
  investment: investmentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
