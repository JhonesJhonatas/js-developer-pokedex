import { useCallback, useEffect, useState } from 'react'
import api from '../services/api'

type TypeSchema =
  | 'normal'
  | 'grass'
  | 'fire'
  | 'water'
  | 'electric'
  | 'ice'
  | 'ground'
  | 'flying'
  | 'poison'
  | 'fighting'
  | 'psychic'
  | 'dark'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'dragon'
  | 'fairy'

interface PokemonListSchema {
  number: number
  name: string
  type: TypeSchema
  types: TypeSchema[]
  imageUrl: string
}

type GetDetailsAndPutInListProps = {
  name: string
  url: string
}[]

const useGetPokemonItens = () => {
  const [pokemonItensIsLoading, setPokemonItensIsLoading] = useState(false)
  const [pokemonList, setPokemonList] = useState<PokemonListSchema[]>([])
  const [limit, setLimit] = useState(10)

  const getDetailsAndPutInList = useCallback(
    async (results: GetDetailsAndPutInListProps) => {
      try {
        const updatedList = await Promise.all(
          results.map(async (result) => {
            const response = await fetch(result.url)
            const pokeDetail = await response.json()

            const types: string[] = pokeDetail.types.map(
              (typeSlot: { type: { name: unknown } }) => typeSlot.type.name,
            )

            const [type] = types

            return {
              number: pokeDetail.id as number,
              name: pokeDetail.name as string,
              type: type as TypeSchema,
              types: types as TypeSchema[],
              imageUrl: pokeDetail.sprites.other.dream_world
                .front_default as string,
            }
          }),
        )

        setPokemonList(updatedList)
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  const handleUpdateItens = useCallback(async () => {
    try {
      setPokemonItensIsLoading(true)
      const response = await api.get(`pokemon?offset=0&limit=${limit}`)
      await getDetailsAndPutInList(response.data.results)
    } finally {
      setPokemonItensIsLoading(false)
    }
  }, [getDetailsAndPutInList, limit])

  const handleLoadMoreItens = useCallback(() => {
    setLimit((currentLimit) => currentLimit + 10)
  }, [])

  useEffect(() => {
    handleUpdateItens()
  }, [handleUpdateItens])

  return {
    pokemonItensIsLoading,
    pokemonList,
    handleLoadMoreItens,
  }
}

export { useGetPokemonItens }
