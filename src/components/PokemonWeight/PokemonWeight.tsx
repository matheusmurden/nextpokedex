import { FC } from "react"

interface PokemonWeightProps {
    weight: number
}

export const PokemonWeight: FC<PokemonWeightProps> = ({ weight }) => {
    const conversionRate = 2.2;

    const weightInKg = weight / 10

    const weightInPounds = weightInKg * conversionRate

    const formattedWeightInKg = Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "kilogram",
    }).format(weightInKg)

    const formattedWeightInLbs = Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "pound",
    }).format(weightInPounds)

    return (
        <div>
            <h4 className="text-lg font-bold">Weight</h4>
            <div className="grid text-sm leading-loose">
                <span>
                    <b>{formattedWeightInKg}</b>
                </span>
                <span>
                    <b>{formattedWeightInLbs}</b>
                </span>
            </div>
        </div>
    )
}
    