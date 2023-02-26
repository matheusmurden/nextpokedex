import { PokemonType } from "pokenode-ts"
import { FC } from "react"

interface PokemonTypesListProps {
    types: PokemonType[]
}

export const PokemonTypesList: FC<PokemonTypesListProps> = ({ types }) => {
    return (
        <div>
            <h4 className="text-lg font-bold">Type</h4>
            <ul className="grid grid-cols-2 text-sm leading-loose capitalize">
                {types?.map((item) => (
                    <li key={`${item?.slot}-${item?.type?.name}`}>
                        <b>{item?.type?.name}</b>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
    