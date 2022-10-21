import pokemon from "./pokemon";

const rtk = { ...pokemon };

const reducers = { ...pokemon.reducer };

const middlewares = [pokemon.middleware];

export default { ...rtk, reducers, middlewares };
