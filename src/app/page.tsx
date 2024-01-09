import { getMatchesFootballFinished, getMatchesfootball } from '@/api';
import Status from '@/components/Status';

export default async function Home() {
  const getDatas = await getMatchesfootball();
  const getDatasFinished = await getMatchesFootballFinished();

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  console.log(getMatchesfootball());

  const date = new Date();
  const dateConverted = date.toDateString();
  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="font-bold uppercase text-md md:text-xl">Matches</h1>
        <div className="rounded-md px-4 py-0 md:py-1 bg-slate-600 text-textPrimary text-sm">
        <p>{`${dateConverted}`}</p>
      </div>
      </div>
      <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
