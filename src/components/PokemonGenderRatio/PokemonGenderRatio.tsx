import { FC } from "react";

interface PokemonGenderRatioProps {
    ratio: number
}

export const PokemonGenderRatio: FC<PokemonGenderRatioProps> = ({ ratio }) => {
    const chanceOfFemale = (ratio / 8) * 100;
    const chanceOfMale = 100 - chanceOfFemale

    return (
        <div>
            <h4 className="text-lg font-bold">Gender Ratio</h4>
            <ul className="grid text-sm leading-loose">
                <li>♀ {chanceOfFemale}%</li>
                <li>♂ {chanceOfMale}%</li>
            </ul>
        </div>
    )
}