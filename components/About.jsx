// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function About() {
  return (
    <div className="" id="about">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:text-center ">
        <div className="flex max-lg:flex-col gap-8">
          <div className="w-1/2 max-lg:w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-end justify-end text-white text-4xl max-sm:text-3xl font-title tracking-wide text-right">
                <p>Organised by the</p>
                <p>
                  <span className="text-amber-400">dream team</span> of
                </p>
              </div>
              <a
                href="https://shoutconnect.uk/"
                target="_blank"
                className="flex items-center justify-center bg-white/80 hover:bg-white/100 hover:scale-105 border border-white  rounded-lg  h-28 w-auto"
              >
                <div>
                  <Image
                    src="/brands/Shout Connect Logo.svg"
                    alt="Shout Connect Logo"
                    width={1000}
                    height={1000}
                    className="h-16 w-auto object-cover object-center"
                  />
                </div>
              </a>
              <a
                href="https://www.uclan.ac.uk/facilities/sports-arena"
                target="_blank"
                className="flex items-center justify-center bg-white/80 hover:bg-white/100 hover:scale-105 border border-white  rounded-lg  h-28 w-auto"
              >
                <div>
                  <Image
                    src="/brands/University of Lancashire.png"
                    alt="UCLan Logo"
                    width={1000}
                    height={1000}
                    className="h-16 max-sm:h-14 w-auto object-cover object-center "
                  />
                </div>
              </a>
              <a
                href="https://www.preston.gov.uk/"
                target="_blank"
                className="flex items-center justify-center bg-white/80 hover:bg-white/100 hover:scale-105 border border-white  rounded-lg  h-28 w-auto"
              >
                <div>
                  <Image
                    src="/brands/Preston_City_Council.png"
                    alt="Preston City Council Logo"
                    width={1000}
                    height={1000}
                    className="h-16 w-auto object-cover object-center"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <p className="text-white text-3xl font-title tracking-wide">
              <span className="text-amber-400">Preston City Games</span> returns
              to the UCLan Sports Arena on{" "}
              <span className="text-amber-400">
                Friday 30th June 2023, from 12.00 midday.
              </span>
            </p>
            <p className="text-white text-lg">
              <br />
              Preston City Games is a fun, one day sporting festival that pits
              teams of businesses and charities against each other in
              tournaments of rounders, football, netball and golf. New for 2024
              is the addition of <span className="font-bold">boccia</span>, a
              seated bowling game for competitive players, keen to participate
              in a less physically demanding sport.
              <span className="font-bold">
                <br />
                <br />
                Originally launched as the UK Corporate Games in 2012, Preston
                City Games is a great opportunity for businesses and charities
                to take part in a fun, but truly competitive, sporting event.
              </span>
            </p>
          </div>
        </div>
        {/* <p className="text-xl font-bold text-amber-100 text-center mt-10">
          The event is a great opportunity for businesses and charities to take
          part in a fun, but truly competitive, sporting event.
        </p> */}
      </div>
    </div>
  );
}
