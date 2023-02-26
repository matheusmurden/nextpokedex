import { Name } from "pokenode-ts"
import { FC, useCallback } from "react"
import { type SupportedLanguagesMap } from 'types'
import { formattedLanguageNames } from "utils"

interface PokemonNameListProps {
    names: Name[]
}

export const PokemonNameList: FC<PokemonNameListProps> = ({ names }) => {
    const romaji = names?.find(name => name?.language?.name === 'roomaji')!
    const japanese = names?.find(name => name?.language?.name === 'ja')!
    const english = names?.find(name => name?.language?.name === 'en')!
    const spanish = names?.find(name => name?.language?.name === 'es')!
    const french = names?.find(name => name?.language?.name === 'fr')!
    const deustch = names?.find(name => name?.language?.name === 'de')!

    const dataArray = [japanese, english, spanish, french, deustch]

    const ListItem = useCallback(({ item }: { item: Name }) => {
        const languageName = formattedLanguageNames?.[item?.language?.name as keyof SupportedLanguagesMap];
        if(languageName !== 'japanese') {
            return (
                <li className="grid grid-cols-2 gap-1">
                    <b>{languageName}</b>
                    <em>{item?.name}</em>
                </li>
            )
        }
        return (
            <li className="grid grid-cols-2 gap-1">
                <b>{languageName}</b>
                <abbr className="no-underline" title={romaji?.name}><em>{item?.name}</em></abbr>
            </li>
        )
    }, [formattedLanguageNames, romaji])

    return (
        <div>
            <h4 className="text-lg font-bold">Name</h4>
            <ul className="grid leading-loose text-sm capitalize">
                {dataArray?.map((name) => <ListItem key={`${name?.language?.name}-${name?.name}`} item={name} />)}
            </ul>
        </div>
    )
}
    