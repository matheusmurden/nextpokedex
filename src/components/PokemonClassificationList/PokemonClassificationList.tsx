import { type Genus } from "pokenode-ts"
import { FC, useCallback } from "react"
import { type SupportedLanguagesMap } from "types"
import { formattedLanguageNames } from "utils"

interface PokemonClassificationListProps {
    genera: Genus[]
}

export const PokemonClassificationList: FC<PokemonClassificationListProps> = ({ genera }) => {

    const romaji = genera?.find(genus => genus?.language?.name === 'roomaji')!
    const japanese = genera?.find(genus => genus?.language?.name === 'ja')!
    const english = genera?.find(genus => genus?.language?.name === 'en')!
    const spanish = genera?.find(genus => genus?.language?.name === 'es')!
    const french = genera?.find(genus => genus?.language?.name === 'fr')!
    const deustch = genera?.find(genus => genus?.language?.name === 'de')!

    const dataArray = [japanese, english, spanish, french, deustch]

    const ListItem = useCallback(({ item }: { item: Genus }) => {
        const languageName = formattedLanguageNames?.[item?.language?.name as keyof SupportedLanguagesMap];
        if(languageName !== 'japanese') {
            return (
                <li className="grid grid-cols-2 gap-1">
                    <b>{languageName}</b>
                    <em>{item?.genus}</em>
                </li>
            )
        }
        return (
            <li className="grid grid-cols-2 gap-1">
                <b>{languageName}</b>
                <abbr className="no-underline" title={romaji?.genus}><em>{item?.genus}</em></abbr>
            </li>
        )
    }, [formattedLanguageNames, romaji])
    
    return (
        <div>
            <h4 className="text-lg font-bold">Classification</h4>
            <ul className="grid text-sm leading-loose capitalize">
                {dataArray?.map((genus) => (
                    <ListItem item={genus} key={`${genus?.language?.name}-${genus?.genus}`} />
                ))
                }
            </ul>
        </div>
    )
}
    