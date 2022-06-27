import * as React from 'react'
import { useGetPokemonByNameQuery } from '../../services/pokemon'

export default function PokemonView() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isError, isFetching, isSuccess } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
console.log("isLoading",isLoading, "isError",isError, "isFetching",isFetching, "isSuccess",isSuccess);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}