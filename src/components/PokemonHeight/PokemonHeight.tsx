import { FC } from "react"

interface PokemonHeightProps {
    height: number
}

export const PokemonHeight: FC<PokemonHeightProps> = ({ height }) => {
    const conversionRate = 3.281;

    const heightInMeters = height / 10

    const formattedHeightInMeters = Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "meter",
    }).format(heightInMeters)

    
    const heightInFeet = Number((heightInMeters * conversionRate)?.toFixed(2))

    const onlyFeet = Math.floor(heightInFeet)

    const onlyFeetDecimalPlaces = Number((heightInFeet - onlyFeet)?.toFixed(2))

    const onlyInches = Math.floor(onlyFeetDecimalPlaces * 12)

    const formattedFeet = Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "foot",
        unitDisplay: "narrow"
    }).format(onlyFeet)

    const formattedInches = Intl.NumberFormat(undefined, {
        style: "unit",
        unit: "inch",
        unitDisplay: "narrow"
    }).format(onlyInches)

    return (
        <div>
            <h4 className="text-lg font-bold">Height</h4>
            <div className="grid text-sm leading-loose">
                <span>
                    <b>{formattedHeightInMeters}</b>
                </span>
                <span className="grid">
                    <b>{formattedFeet}{formattedInches}</b>
                </span>
            </div>
        </div>
    )
}
    