import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { APIX } from '../services/pokemon';
// import XXX from '../services';

const store = configureStore({
  reducer: {
    // ...XXX.reducers,
    [APIX.reducerPath]: APIX.reducer,
  },

  // devTools: true,

  // getDefaultMiddleware().concat(APIX.middleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(APIX.middleware),
  // ...APIX.middlewares,
});

// setupListeners(store.dispatch);
export default store;
