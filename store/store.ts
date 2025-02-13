import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "@/store/budgetSlice";

const store = configureStore({ reducer: { budget: budgetSlice } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
