import pokemon from './pokemon';

const reducers = {
  ...pokemon.reducer,
  // [pokemon.reducerPath]: pokemon.reducer,
};

const middlewares = [pokemon.middleware];

export default {
  ...pokemon,
  reducers,
  middlewares,
};
