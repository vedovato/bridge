import pokemon from "./pokemon";

const reducers = {
  ...pokemon.reducer,
};

const middlewares = [pokemon.middleware];

export default {
  ...pokemon,
  reducers,
  middlewares,
};
