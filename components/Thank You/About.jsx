// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function ThankYouAbout() {
  return (
    <div className="py-24 max-sm:py-16" id="about">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex max-lg:flex-col items-center gap-8">
          <div className="w-1/2 max-lg:w-full" data-aos="fade-right">
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
          <div
            className="w-1/2 max-lg:w-full max-lg:text-center"
            data-aos="fade-left"
          >
            <p className="text-white text-3xl font-title tracking-wide max-lg:mt-10">
              About <span className="text-amber-400">Preston City Games</span>
            </p>
            <p className="text-white text-lg">
              <br />
              Preston City Games is a fun, one day sporting festival that pits
              teams of businesses and charities against each other in
              tournaments of rounders, football, netball and boccia.
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
        {/* <div
          className="text-white text-lg mt-14 flex flex-col items-center gap-14 max-lg:text-center"
          data-aos="fade-up"
        >
          <p className="text-2xl font-bold text-amber-400">
            Preston City Games 2024 was amazing, we can't wait to meet you all
            again in 2025!
          </p>
          <p className="w-full text-center">
            Preston City Games brought together businesses and charities for a
            day of friendly competition. In rounders, football, netball and
            golf, teams battled it out with sheer determination and competitive
            spirit.{" "}
            <span className="font-bold">
              Take a look at our gallery below to see how fantastic the day was.
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
}
