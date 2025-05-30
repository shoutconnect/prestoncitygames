// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function ExtraGolf({ img, title, href }) {
  return (
    <div className="fixed z-[9999] top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[#0f172a]/30 backdrop-blur-md">
      <section
        data-aos="fade-down"
        id="Football"
        className={`text-center hover:scale-105 max-sm:hover:scale-100`}
      >
        <div
          className={`flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden
      hover:shadow-2xl hover:shadow-[rgb(125,211,252)]/20`}
        >
          <div
            className={`flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(125,211,252)]`}
          >
            <Image
              src={img}
              width={500}
              height={300}
              alt={`Vector of someone playing ${title}`}
              className="-mb-16 z-10 w-auto h-48"
            />
          </div>
          <div className="-mt-2 -mb-8 transform -scale-y-100 w-full">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 16 100 38"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill={`rgba(125,211,252,0.7)`}
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill={`rgba(125,211,252,0.5)`}
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill={`rgba(125,211,252,0.3)`}
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="7"
                  fill={`rgba(125,211,252)`}
                />
              </g>
            </svg>
          </div>
          <div className="px-4 text-slate-600 text-center">
            <h1
              className={`font-title text-[28px] tracking-wide text-[rgb(125,211,252)] mb-2`}
            >
              Programmation
            </h1>

            <p className="mb-10">
              Shotgun start <br />
              <br />
              9.00am - all players arrive at Ashton and Lea Golf Club
              <br />
              <br />
              9.30am - players head to their designated tee
              <br />
              <br />
              10.00am - tee off
              <br />
              <br />
              3.30pm - 2 Course meal and presentation
            </p>
            {/* <div className="py-4 border-b-2 border-slate-200/80">
            <p
              className={`uppercase text-xs font-bold text-[rgb(125,211,252)]`}
            >
              9.30am - players head to their designated tee
            </p>
            <p>{teamsRequirements}</p>
          </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center -mt-5">
          <a
            href={href}
            className={`relative rounded py-2 px-10 mb-6 overflow-hidden group bg-[rgb(125,211,252)] hover:bg-gradient-to-r hover:from-[rgb(125,211,252)] hover:to-[rgba(125,211,252)],0.5)] text-white font-semibold hover:ring-2 hover:ring-offset-2 
            
            
           hover:ring-[rgb(125,211,252)] transition-all ease-out duration-300`}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Register</span>
          </a>
        </div>
      </section>
    </div>
  );
}
