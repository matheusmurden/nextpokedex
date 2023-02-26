import { PokemonSpeciesDexEntry } from "pokenode-ts"
import { FC } from "react"
import { formatDexNumber } from "utils/formatDexNumber"

interface PokemonDexNumberListProps {
    dexEntries: PokemonSpeciesDexEntry[]
}

export const PokemonDexNumberList: FC<PokemonDexNumberListProps> = ({ dexEntries }) => {
    return (
        <div>
            <h4 className="text-lg font-bold">Dex Nº</h4>
            <ul className="grid text-sm leading-loose capitalize">
                {dexEntries?.map((item) => (
                    <li key={`${item?.pokedex?.name}-${item?.entry_number}`} className="grid grid-cols-2 gap-1">
                        <b>{item?.pokedex?.name?.split('-')?.join(' ')?.replace('letsgo', 'let\'s go')}:</b>
                        <em className="font-mono">#{formatDexNumber(item?.entry_number)}</em>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
    