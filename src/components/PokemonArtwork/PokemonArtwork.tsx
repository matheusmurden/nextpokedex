import { Pokemon } from "pokenode-ts";
import { FC } from "react";
import { formatDexNumber } from "utils/formatDexNumber";
import cx from 'classnames'

interface PokemonArtworkProps {
    pokemon: Pokemon,
    height?: number | 'full' | 'auto';
    className?: string;
    order?: number;
    lazy?: boolean;
}

export const PokemonArtwork: FC<PokemonArtworkProps> = ({ pokemon, className, height, order, lazy = true }) => (
    <img
        className={cx("aspect-square", className, { 'h-60': !height, [`h-${height}`]: !!height })}
        loading={lazy ? 'lazy' : 'eager' }
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatDexNumber(
            order ?? pokemon.order,
        )}.png`}
        srcSet={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${formatDexNumber(
            order ?? pokemon.order,
        )}.png 3x`}
    />
)