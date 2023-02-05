import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

const formatIndexNumber = (number: number) =>
  Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 3,
  }).format(number);

export const PokemonPage = () => {
  const { pokemon } = useLoaderData() as { pokemon: any };
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={pokemon}>
        <div>
          <h1 className="capitalize">{pokemon.name}</h1>
          <img
            loading="eager"
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatIndexNumber(
              pokemon.id,
            )}.png`}
            srcSet={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${formatIndexNumber(
              pokemon.id,
            )}.png 2x`}
          />
        </div>
      </Await>
    </Suspense>
  );
};
