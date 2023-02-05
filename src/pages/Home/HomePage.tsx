import { Suspense } from 'react';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';

const formatIndexNumber = (number: number) =>
  Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 3,
  }).format(number);

export const RootPage = () => {
  const { pokemon } = useLoaderData() as { pokemon: any[] };

  const navigate = useNavigate();
  
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={pokemon}>
        <div className="container mx-auto py-4">
          <h1 className="text-6xl font-bold mb-12 text-center">Pokédex</h1>
          <div className="grid gap-3 grid-cols-3">
            {pokemon?.map((i: any, index: number) => (
              <div
                onClick={() => navigate(`/pokemon/${index + 1}`)}
                className="rootPageCard rounded-md p-1 justify-center flex flex-col place-self-center bg-neutral-300 dark:bg-neutral-700"
                key={`${index}-${i?.name}`}
              >
                <p className="flex mt-0 gap-2 align-center place-self-start">
                  <em>#{formatIndexNumber(index + 1)}</em> <b className="capitalize">{String(i?.name)}</b>
                </p>
                <img
                  loading="lazy"
                  alt={i?.name}
                  className="w-[80%] mx-auto"
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${formatIndexNumber(
                    index + 1,
                  )}.png`}
                />
              </div>
            ))}
          </div>
        </div>
      </Await>
    </Suspense>
  );
};
