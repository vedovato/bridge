import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import services from "../services";

const store = configureStore({
  devTools: true,
  reducer: services.reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...services.middlewares,
  ],
});

setupListeners(store.dispatch);
export default store;
