import Image from 'next/image'

export default function Home() {
  const date = new Date();
  const dateConverted = date.toDateString();
  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="font-bold uppercase text-md md:text-xl">Matches</h1>
      </div>
      <div className="rounded-md px-4 py-0 md:py-1 bg-slate-600 text-textPrimary text-sm">
        <p className="">{ dateConverted }</p>
      </div>
    </section>
  )
}
