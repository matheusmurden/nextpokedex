import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { formatDexNumber } from 'utils';




export const PokemonPage = () => {
  const { pokemon } = useLoaderData() as { pokemon: any };
console.log(pokemon);

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={pokemon}>
        <div className='container mx-auto'>
          <header className="flex flex-col items-center">
          <img
            style={{
              height: `${pokemon?.height * 30}px`
            }}
            className="aspect-square"
            loading="eager"
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatDexNumber(
              pokemon.order,
            )}.png`}
            srcSet={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${formatDexNumber(
              pokemon.order,
            )}.png 2x`}
          />
          <div className="flex items-center gap-4 mt-6">
            <p className="text-2xl">#{formatDexNumber(pokemon.order)}</p>
            <h1 className="text-5xl font-bold capitalize">{pokemon.name}</h1>
          </div>
          </header>
        </div>
      </Await>
    </Suspense>
  );
};
