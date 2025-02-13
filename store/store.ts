import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "@/store/budgetSlice";
import investmentSlice from "@/store/investmentSlice";

const store = configureStore({
  reducer: { budget: budgetSlice, investment: investmentSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
