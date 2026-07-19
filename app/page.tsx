import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-950 font-sans text-zinc-50">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-black px-16 py-32 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            We have the script.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            Here's this week's projected results. To see that we never miss, you can use the drop down to see our past predictions.
          </p>
        </div>
      </main>
    </div>
  );
}
