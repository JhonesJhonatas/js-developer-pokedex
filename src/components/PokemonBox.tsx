import { useMemo } from 'react'

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

interface PokemonBoxProps {
  number: number
  name: string
  type: TypeSchema
  types: TypeSchema[]
  imageUrl: string
}

export function PokemonBox({
  name,
  imageUrl,
  type,
  types,
  number,
}: PokemonBoxProps) {
  const bgBasedOnType = useMemo(() => {
    return {
      normal: 'bg-warm-gray-400',
      grass: 'bg-emerald-500',
      fire: 'bg-orange-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      ice: 'bg-cyan-300',
      ground: 'bg-yellow-600',
      flying: 'bg-violet-500',
      poison: 'bg-purple-700',
      fighting: 'bg-red-600',
      psychic: 'bg-pink-400',
      dark: 'bg-gray-700',
      rock: 'bg-yellow-800',
      bug: 'bg-lime-500',
      ghost: 'bg-indigo-700',
      steel: 'bg-gray-300',
      dragon: 'bg-indigo-600',
      fairy: 'bg-rose-300',
    }
  }, [])

  return (
    <div
      className={`${bgBasedOnType[type]} p-4 rounded-md flex gap-4 w-52 h-32 justify-between`}
    >
      <div className="flex flex-col gap-2">
        <span className="font-bold text-lg text-zinc-50 capitalize">
          {name}
        </span>

        <div className="flex flex-col gap-1">
          {types.map((type) => {
            return (
              <span
                key={number}
                className={`${bgBasedOnType[type]} rounded-full  drop-shadow-xl text-center text-zinc-50 px-3 py-0.5 w-fit text-sm font-bold`}
              >
                {type}
              </span>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="text-gray-800 opacity-30 text-sm font-bold">
          # {number}
        </span>
        <img className="max-w-16" src={imageUrl} alt={`Image of ${name}`} />
      </div>
    </div>
  )
}
