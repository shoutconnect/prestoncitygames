// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function ThankYouHero() {
  return (
    <div className="relative py-24 max-sm:py-16 -mt-10">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex flex-col items-center justify-center">
        <div
          data-aos="zoom-out"
          className="relative w-full flex items-center justify-center"
        >
          <div className="relative">
            <div className="relative z-40 h-[450px] w-[450px] max-lg:h-[300px] max-lg:w-[300px]">
              <Image
                src="/imgs/Preston City Games Logo SVG.svg"
                fill
                alt="Preston City Games logo"
                priority
              />
            </div>
            <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 bottom-32 left-0 bg-teal-400 rounded-full blur-2xl animate-pulse" />
            <div className="absolute z-20 h-80 max-lg:h-60 w-80 max-lg:w-60 bottom-0 left-0 bg-slate-700 rounded-full blur-3xl" />
            <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 top-32 right-4 bg-teal-400 rounded-full blur-2xl animate-pulse" />
            <div className="absolute z-20 h-80 max-lg:h-72 w-80 max-lg:w-72 top-0 right-0 bg-slate-700 rounded-full blur-3xl" />
          </div>
        </div>

        <p
          data-aos="zoom-out"
          className="font-bold text-xl max-md:text-lg text-white text-center mt-10 w-[80%] max-w-3xl"
        >
          A huge congratulations to all of our Preston City Games winners 🏆 —
          and a huge well done to every team that took part!
        </p>
      </div>
    </div>
  );
}
