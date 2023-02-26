import { PokemonArtwork } from 'components';
import { HomeLoaderDTO } from 'loaders/Home';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { formatDexNumber } from 'utils';

export const HomePage = () => {
  const { pokemonArray } = useLoaderData() as HomeLoaderDTO;

  const navigate = useNavigate();

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={pokemonArray}>
        <div className="container mx-auto py-4">
          <h1 className="text-6xl font-bold mb-12 text-center">Pokédex</h1>
          <div className="grid gap-3 grid-cols-3">
            {pokemonArray?.map((pokemon, index: number) => (
              <div
                onClick={() => navigate(`/pokemon/${index + 1}`)}
                className="rootPageCard rounded-md p-6 pt-3 justify-between flex flex-col bg-neutral-300 dark:bg-neutral-700"
                key={`${index}-${pokemon?.name}`}
              >
                <p className="flex mt-0 gap-2 align-center place-self-start">
                  <em>#{formatDexNumber(index + 1)}</em> <b className="capitalize">{String(pokemon?.name)}</b>
                </p>
                <PokemonArtwork
                  pokemon={pokemon}
                  height='auto'
                  order={index+1}
                  className='mx-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};
