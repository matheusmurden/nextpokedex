import { PokemonArtwork, PokemonNameList, PokemonDexNumberList, PokemonTypesList, PokemonClassificationList, PokemonHeight, PokemonWeight, PokemonGenderRatio } from 'components';
import { PokemonLoaderDTO } from 'loaders/Pokemon';
import { Suspense, useMemo } from 'react';
import { Await, useLoaderData, useParams } from 'react-router-dom';

export const PokemonPage = () => {
  const { pokemon, species } = useLoaderData() as PokemonLoaderDTO;

  const { id } = useParams();

  const pokemonId = useMemo(() => Number(id), [id])

  console.log(
    {
      pokemon,
      species
    }
  )

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={pokemon}>
        <div className='container mx-auto'>
          <section className="grid grid-cols-4 items-start gap-8">
            <div className='row-span-2'>
              <h4 className="text-lg font-bold">Picture</h4>
              <PokemonArtwork
                pokemon={pokemon}
                order={pokemonId}
                height='auto'
              />
            </div>
            <PokemonNameList names={species?.names} />
            <PokemonDexNumberList dexEntries={species?.pokedex_numbers} />
            <PokemonTypesList types={pokemon?.types} />
            <PokemonClassificationList genera={species?.genera} />
            <PokemonHeight height={pokemon?.height} />
            <PokemonWeight weight={pokemon?.weight} />
            <PokemonGenderRatio ratio={species?.gender_rate} />
          </section>
        </div>
      </Await>
    </Suspense>
  );
};
