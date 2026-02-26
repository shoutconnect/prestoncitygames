// Design and images
// Libraries
// Components
// Outside data
import Image from "next/image";
import Price from "./Price";

/////////////////////////////

export default function NewPrice() {
  return (
    <div className="relative bg-white overflow-hidden -mt-28" id="register">
      {/* <div className="absolute top-0  transform -scale-y-100 w-full">
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
              fill="rgba(15,23,42,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(15,23,42,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(15,23,42,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(15,23,42)" />
          </g>
        </svg>
      </div> */}
      <div className="py-40 max-sm:py-24 px-6 mx-auto max-w-7xl lg:px-8 flex flex-col items-center justify-center gap-20">
        <h1
          className="text-6xl max-xl:text-5xl font-title text-slate-900 tracking-wide text-center"
          data-aos="fade-down"
        >
          Register your team for <br className="max-sm:hidden" />
          <span className="text-amber-400">Preston City Games 2026</span>
        </h1>
        <p className="text-slate-500 text-lg font-normal w-4/5 text-center">
          <span className="font-semibold">
            To participate in this year's Preston City Games, just pick your
            preferred sport and fill out the form.
          </span>
          <br />
          We are only accepting bookings from full teams this year through the
          website. If you can’t get together a full team – don’t worry – e-mail
          info@shoutconnect.co.uk and we’ll combine you with another team.
        </p>
        <Price />
      </div>
      <div className="absolute bottom-0  transform -scale-y-100 w-full rotate-180">
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
              fill="rgba(15,23,42,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(15,23,42,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(15,23,42,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(15,23,42)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
