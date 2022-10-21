import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const APIX: any = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`,
    }),
  }),
});

// export const reducer = { [APIX.reducerPath]: APIX.reducer };
// export const middleware = APIX.middleware;

// export default {
//   ...APIX,
//   reducer,
//   middleware,
// };

export const { useGetPokemonByNameQuery } = APIX;
export default APIX;
