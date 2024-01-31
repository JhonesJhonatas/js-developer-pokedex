import { useMemo } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

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
      normal: {
        normal: 'bg-gray-400',
        hover: 'hover:bg-gray-500',
      },
      grass: {
        normal: 'bg-emerald-500',
        hover: 'hover:bg-emerald-700',
      },
      fire: {
        normal: 'bg-orange-500',
        hover: 'hover:bg-orange-600',
      },
      water: {
        normal: 'bg-blue-500',
        hover: 'hover:bg-blue-600',
      },
      electric: {
        normal: 'bg-yellow-400',
        hover: 'hover:bg-yellow-500',
      },
      ice: {
        normal: 'bg-cyan-300',
        hover: 'hover:bg-cyan-400',
      },
      ground: {
        normal: 'bg-yellow-600',
        hover: 'hover:bg-yellow-700',
      },
      flying: {
        normal: 'bg-violet-500',
        hover: 'hover:bg-violet-600',
      },
      poison: {
        normal: 'bg-purple-700',
        hover: 'hover:bg-purple-800',
      },
      fighting: {
        normal: 'bg-red-600',
        hover: 'hover:bg-red-700',
      },
      psychic: {
        normal: 'bg-pink-400',
        hover: 'hover:bg-pink-500',
      },
      dark: {
        normal: 'bg-gray-700',
        hover: 'hover:bg-gray-800',
      },
      rock: {
        normal: 'bg-yellow-800',
        hover: 'hover:bg-yellow-900',
      },
      bug: {
        normal: 'bg-lime-500',
        hover: 'hover:bg-lime-700',
      },
      ghost: {
        normal: 'bg-indigo-700',
        hover: 'hover:bg-indigo-800',
      },
      steel: {
        normal: 'bg-gray-300',
        hover: 'hover:bg-gray-400',
      },
      dragon: {
        normal: 'bg-indigo-600',
        hover: 'hover:bg-indigo-700',
      },
      fairy: {
        normal: 'bg-rose-300',
        hover: 'hover:bg-rose-400',
      },
    }
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={`${bgBasedOnType[type].normal} hover:scale-105 ${bgBasedOnType[type].hover}  p-4 rounded-md flex gap-4 w-52 h-32 justify-between transition-all cursor-pointer`}
        >
          <div className="flex flex-col gap-2">
            <span className="font-bold text-lg text-zinc-50 capitalize">
              {name}
            </span>

            <div className="flex flex-col gap-1">
              {types.map((type) => {
                return (
                  <span
                    key={type}
                    className={`${bgBasedOnType[type].normal} rounded-full  drop-shadow-xl text-center text-zinc-50 px-3 py-1 w-fit text-sm font-bold leading-none`}
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
            <img
              className="max-w-16 max-h-20"
              src={imageUrl}
              alt={`Image of ${name}`}
            />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-800 bg-opacity-40 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className={`bg-zinc-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-2/4 w-2/4 translate-x-[-50%] translate-y-[-50%] rounded-[6px] shadow-lg focus:outline-none overflow-hidden`}
        >
          <div className="w-full h-full flex justify-between">
            <div className="p-16 flex flex-col gap-16">
              <Dialog.Title className="text-5xl font-bold capitalize">
                {name}
              </Dialog.Title>

              <div className="flex flex-col gap-4">
                <span className="text-2xl font-bold">Tipos:</span>
                {types.map((type) => {
                  return (
                    <span
                      key={type}
                      className={`${bgBasedOnType[type].normal} p-4 text-zinc-50 rounded-full font-bold text-center capitalize`}
                    >
                      {type}
                    </span>
                  )
                })}
              </div>
            </div>
            <div
              className={`${bgBasedOnType[type].normal} h-full w-1/4 flex flex-col justify-center`}
            >
              <img
                className="ml-[-150px]"
                src={imageUrl}
                alt={`Image of ${name}`}
              />
            </div>
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-[10px] right-[16px]  ">
              <span>X</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
