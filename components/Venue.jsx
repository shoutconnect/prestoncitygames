// Design and images
// Libraries
// Components
// Outside data

/////////////////////////////

export default function Venue() {
  return (
    <div className="py-24 max-sm:py-16" id="venue">
      <div className="px-6 mx-auto max-w-7xl lg:px-8 flex flex-col gap-12">
        {/* <h1
          data-aos="zoom-out"
          className=" max-lg:m-auto text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-4xl max-xl:leading-[65px] max-lg:text-center font-title text-white tracking-wide leading-[75px]"
        >
          Venue for <br />
          <span className="text-amber-400">Preston City Games</span>
        </h1> */}
        <div className="flex max-sm:flex-col gap-8">
          <div
            data-aos="fade-right"
            className="w-2/3 max-xl:w-3/5 max-lg:w-1/2 max-sm:w-full h-72 rounded-lg overflow-hidden hover:scale-105 max-sm:hover:scale-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.684623557198!2d-2.7588691229163906!3d53.77730154239053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6dcf58aadf7f%3A0x4b55145fca804628!2sUCLan%20Sports%20Arena!5e0!3m2!1sen!2suk!4v1682068348587!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="Google maps address to Univeristy of Lancashire Sports"
            ></iframe>
          </div>
          <div
            data-aos="fade-left"
            className="relative w-1/3 max-xl:w-2/5 max-lg:w-1/2 max-sm:w-full max-sm:h-60 max-sm:text-center text-white flex flex-col justify-between rounded-lg overflow-hidden bg-neutral-50 p-6 hover:scale-105 max-sm:hover:scale-100"
          >
            <div className="absolute z-10 top-0 left-0 transform -scale-y-100 w-full">
              <svg
                className="waves-venue"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 26 100 38"
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
                    fill="rgba(251,191,36,0.7)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(251,191,36,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(251,191,36,0.3)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="rgb(251,191,36)"
                  />
                </g>
              </svg>
            </div>
            <div className="z-50 flex flex-col gap-2 max-sm:gap-0">
              {/* <p className="uppercase text-xs font-bold text-neutral-50 -mb-1">
                Venue
              </p> */}
              <p className="text-3xl font-title text-neutral-50 tracking-wide">
                University of Lancashire
                <br /> Sports Arena
              </p>
            </div>
            <p className="z-50 text-lg text-slate-600 font-medium leading-6">
              Tom Benson Way,
              <br /> Preston <br /> PR2 1SG
            </p>
            <div className="flex items-start justify-start max-sm:justify-center">
              <a
                href="https://www.uclan.ac.uk/facilities/sports-arena"
                target="_blank"
                className="relative rounded py-2 px-8 overflow-hidden group bg-amber-500 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Website</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex max-sm:flex-col-reverse gap-8">
          <div
            data-aos="fade-right"
            className="relative w-1/3 max-xl:w-2/5 max-lg:w-1/2 max-sm:w-full max-sm:h-60 max-sm:text-center text-white flex flex-col justify-between rounded-lg overflow-hidden bg-neutral-50 p-6 hover:scale-105 max-sm:hover:scale-100"
          >
            <div className="absolute z-10 top-0 left-0 transform -scale-y-100 w-full">
              <svg
                className="waves-venue"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 26 100 38"
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
                    fill="rgba(251,191,36,0.7)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(251,191,36,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(251,191,36,0.3)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="rgb(251,191,36)"
                  />
                </g>
              </svg>
            </div>
            <div className="z-50 flex flex-col gap-2 max-sm:gap-0">
              <p className="uppercase text-xs font-bold text-neutral-50">
                Venue
              </p>
              <p className="text-4xl max-md:text-3xl max-sm:text-2xl font-title text-neutral-50 tracking-wide">
                Ashton & Lea Golf Club
              </p>
            </div>
            <p className="z-50 text-lg text-slate-600 font-medium">
              Tudor Avenue,
              <br /> Lea, Preston <br /> PR4 0XA
            </p>
            <div className="flex items-start justify-start max-sm:justify-center">
              <a
                href="https://www.ashtonleagolfclub.co.uk "
                target="_blank"
                className="relative rounded py-2 px-8 overflow-hidden group bg-amber-500 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Website</span>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-2/3 max-xl:w-3/5 max-lg:w-1/2 max-sm:w-full h-72 rounded-lg overflow-hidden hover:scale-105 max-sm:hover:scale-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.0154584876386!2d-2.7734179229167224!3d53.77141214283377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6c35c317642b%3A0xc763353f3e77c3fe!2sAshton%20%26%20Lea%20Golf%20Club!5e0!3m2!1sen!2suk!4v1682068795804!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="Google maps address to UCLAN Sports"
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
}
