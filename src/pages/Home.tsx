import { PokemonBox } from '../components/PokemonBox'
import { useGetPokemonItens } from '../hooks/getPokemonItens'

export function Home() {
  const { pokemonList } = useGetPokemonItens()

  return (
    <main className="w-screen h-screen bg-zinc-200 flex flex-col items-center justify-center">
      <div className="bg-zinc-50 p-8 shadow-md rounded-lg flex flex-col justify-between items-center gap-4 w-80 h-4/5 lg:w-3/5 overflow-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Pokedex</h1>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {pokemonList.map((pokemon) => {
              return (
                <PokemonBox
                  key={pokemon.number}
                  number={pokemon.number}
                  name={pokemon.name}
                  type={pokemon.type}
                  types={pokemon.types}
                  imageUrl={pokemon.imageUrl}
                />
              )
            })}
          </div>
        </div>
        <button className="bg-blue-500 text-zinc-50 font-bold rounded-full py-2 px-4 w-fit text-sm hover:bg-blue-600 transition-all">
          Carregar Mais
        </button>
      </div>
    </main>
  )
}
