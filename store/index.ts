import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import APIX from "../services";

const store = configureStore({
  reducer: {
    ...APIX.reducers,
  },

  devTools: true,

  // getDefaultMiddleware().concat(APIX.middleware),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...APIX.middlewares,
  ],

  // getDefaultMiddleware().concat(APIX.middleware),
});

setupListeners(store.dispatch);
export default store;
