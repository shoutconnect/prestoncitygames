// Design and images
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function Hero() {
  return (
    <div className="py-24 max-sm:py-16 ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex max-lg:flex-col-reverse max-lg:gap-8 max-lg:items-center items-start">
          <div
            data-aos="zoom-out"
            className="w-1/2 max-lg:w-full flex flex-col items-start max-lg:items-center justify-center gap-6 max-lg:text-center"
          >
            <h1 className="z-[60] text-7xl max-xl:text-6xl max-md:text-5xl max-xl:leading-[65px] font-title text-white tracking-wide leading-[75px]">
              Are you a <span className="text-amber-400">business</span> or{" "}
              <span className="text-amber-400 ">charity team</span> with a
              competitive edge?
            </h1>
            <p className="text-lg text-white w-3/4">
              Entries are now open to compete in Preston's one day sport
              tournament, Preston City Games.
            </p>
            <p className="font-bold text-lg text-amber-200  w-3/4">
              Friday 3rd July 2026
              <br />
              University of Lancashire Sports Arena <br />
            </p>
            <div className="flex mt-6 ">
              <a
                href="#register"
                className="relative rounded py-2 px-10 mb-6 overflow-hidden group bg-amber-400 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-300 text-white font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Register now</span>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="relative w-1/2 max-lg:w-full flex items-center justify-center"
          >
            <div className="relative">
              <div className="relative z-40 h-[450px] w-[450px] max-lg:h-[300px] max-lg:w-[300px]">
                {/* <a
                  href="https://www.linkedin.com/company/prestoncitygames"
                  target="_blank"
                  className="absolute bottom-52 max-lg:bottom-36 -left-12 max-lg:-left-10 z-50 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-sky-500 text-sky-500 hover:text-white rounded-full shadow-md "
                >
                  <RiLinkedinFill className=" text-3xl" />
                </a>
                <a
                  href="https://twitter.com/pr_citygames"
                  target="_blank"
                  className="absolute z-50 bottom-48 max-lg:bottom-28 -right-10 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-cyan-400 text-cyan-400 hover:text-white rounded-full shadow-md "
                >
                  <RiTwitterFill className=" text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/shoutnetworkofficial/"
                  target="_blank"
                  className="absolute z-50 right-14 max-lg:right-6 top-8 max-lg:top-2 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-pink-600 text-pink-600 hover:text-white rounded-full shadow-md "
                >
                  <RiInstagramFill className=" text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/prestoncitygames"
                  target="_blank"
                  className="absolute z-50 top-8 max-lg:top-2 left-20 max-lg:left-14 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow-md "
                >
                  <RiFacebookCircleFill className=" text-3xl" />
                </a> */}
                <Image
                  src="/imgs/Preston City Games Logo SVG.svg"
                  fill
                  alt="Preston City Games logo"
                  className=""
                  priority
                />
              </div>
              <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 bottom-32 left-0 bg-teal-400 rounded-full blur-2xl animate-pulse" />
              <div className="absolute z-20 h-80 max-lg:h-60 w-80 max-lg:w-60 bottom-0 left-0 bg-slate-700 rounded-full blur-3xl" />
              <div className="absolute z-30 h-52 max-lg:h-32 w-52 max-lg:w-32 top-32 right-4 bg-teal-400 rounded-full blur-2xl animate-pulse" />
              <div className="absolute z-20 h-80 max-lg:h-72 w-80 max-lg:w-72 top-0 right-0 bg-slate-700 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
