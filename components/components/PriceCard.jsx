// Design and images
// Libraries
// Components
// Outside data

import Image from "next/image";

/////////////////////////////

export default function PriceCard({
  img,
  title,
  date,
  venue,
  startTime,
  teamsRequirements,
  price,
  href,
  green,
  purple,
  orange,
  pink,
  blue,
  yellow,
}) {
  return (
    <section
      data-aos="fade-down"
      id="Football"
      className={`text-center hover:scale-105 max-sm:hover:scale-100 w-full`}
    >
      <h1
        className={`font-title text-[28px] tracking-wide ${
          green
            ? "text-[rgb(34,197,94)]"
            : purple
              ? "text-[rgb(192,132,252)]"
              : orange
                ? "text-[rgb(251,146,60)]"
                : pink
                  ? "text-[rgb(236,72,153)]"
                  : blue
                    ? "text-[rgb(125,211,252)]"
                    : yellow
                      ? "text-[rgb(251,191,36)]"
                      : ""
        } mb-2`}
      >
        {title}
      </h1>
      <div
        className={`border-[1px] border-slate-200 flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden
      hover:shadow-2xl ${
        green
          ? "hover:shadow-[rgb(34,197,94)]/20"
          : purple
            ? "hover:shadow-[rgb(192,132,252)]/20"
            : orange
              ? "hover:shadow-[rgb(251,146,60)]/20"
              : pink
                ? "hover:shadow-[rgb(236,72,153)]/20"
                : blue
                  ? "hover:shadow-[rgb(125,211,252)]/20"
                  : yellow
                    ? "hover:shadow-[rgb(251,191,36)]/20"
                    : ""
      }`}
      >
        <div
          className={`flex flex-col items-center justify-center w-full p-4 text-white ${
            green
              ? "bg-[rgb(34,197,94)]"
              : purple
                ? "bg-[rgb(192,132,252)]"
                : orange
                  ? "bg-[rgb(251,146,60)]"
                  : pink
                    ? "bg-[rgb(236,72,153)]"
                    : blue
                      ? "bg-[rgb(125,211,252)]"
                      : yellow
                        ? "bg-[rgb(251,191,36)]"
                        : ""
          }`}
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
                fill={`${
                  green
                    ? "rgba(34,197,94,0.7)"
                    : purple
                      ? "rgba(192,132,252,0.7)"
                      : orange
                        ? "rgba(251,146,60,0.7)"
                        : pink
                          ? "rgba(236,72,153,0.7)"
                          : blue
                            ? "rgba(125,211,252,0.7)"
                            : yellow
                              ? "rgba(251,191,36, 0.7)"
                              : ""
                }`}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill={`${
                  green
                    ? "rgba(34,197,94,0.5)"
                    : purple
                      ? "rgba(192,132,252,0.5)"
                      : orange
                        ? "rgba(251,146,60,0.5)"
                        : pink
                          ? "rgba(236,72,153,0.5)"
                          : blue
                            ? "rgba(125,211,252,0.5)"
                            : yellow
                              ? "rgba(251,191,36, 0.5)"
                              : ""
                }`}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill={`${
                  green
                    ? "rgba(34,197,94,0.3)"
                    : purple
                      ? "rgba(192,132,252,0.3)"
                      : orange
                        ? "rgba(251,146,60,0.3)"
                        : pink
                          ? "rgba(236,72,153,0.3)"
                          : blue
                            ? "rgba(125,211,252,0.3)"
                            : yellow
                              ? "rgba(251,191,36, 0.3)"
                              : ""
                }`}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill={`${
                  green
                    ? "rgba(34,197,94)"
                    : purple
                      ? "rgba(192,132,252)"
                      : orange
                        ? "rgba(251,146,60)"
                        : pink
                          ? "rgba(236,72,153)"
                          : blue
                            ? "rgba(125,211,252)"
                            : yellow
                              ? "rgba(251,191,36)"
                              : ""
                }`}
              />
            </g>
          </svg>
        </div>
        <div className="px-4 text-slate-600 text-center">
          <div className="pb-4 border-b-2 border-slate-200/80">
            <p
              className={`uppercase text-xs font-bold ${
                green
                  ? "text-[rgb(34,197,94)]"
                  : purple
                    ? "text-[rgb(192,132,252)]"
                    : orange
                      ? "text-[rgb(251,146,60)]"
                      : pink
                        ? "text-[rgb(236,72,153)]"
                        : blue
                          ? "text-[rgb(125,211,252)]"
                          : yellow
                            ? "text-[rgb(251,191,36)]"
                            : ""
              }`}
            >
              Date
            </p>
            <p>{date}</p>
          </div>
          <div className="py-4 border-b-2 border-slate-200/80">
            <p
              className={`uppercase text-xs font-bold ${
                green
                  ? "text-[rgb(34,197,94)]"
                  : purple
                    ? "text-[rgb(192,132,252)]"
                    : orange
                      ? "text-[rgb(251,146,60)]"
                      : pink
                        ? "text-[rgb(236,72,153)]"
                        : blue
                          ? "text-[rgb(125,211,252)]"
                          : yellow
                            ? "text-[rgb(251,191,36)]"
                            : ""
              }`}
            >
              Venue
            </p>
            <p>{venue}</p>
          </div>
          <div className="py-4 border-b-2 border-slate-200/80">
            <p
              className={`uppercase text-xs font-bold ${
                green
                  ? "text-[rgb(34,197,94)]"
                  : purple
                    ? "text-[rgb(192,132,252)]"
                    : orange
                      ? "text-[rgb(251,146,60)]"
                      : pink
                        ? "text-[rgb(236,72,153)]"
                        : blue
                          ? "text-[rgb(125,211,252)]"
                          : yellow
                            ? "text-[rgb(251,191,36)]"
                            : ""
              }`}
            >
              Start Time
            </p>
            <p>{startTime}</p>
          </div>
          <div className="py-4 border-b-2 border-slate-200/80">
            <p
              className={`uppercase text-xs font-bold ${
                green
                  ? "text-[rgb(34,197,94)]"
                  : purple
                    ? "text-[rgb(192,132,252)]"
                    : orange
                      ? "text-[rgb(251,146,60)]"
                      : pink
                        ? "text-[rgb(236,72,153)]"
                        : blue
                          ? "text-[rgb(125,211,252)]"
                          : yellow
                            ? "text-[rgb(251,191,36)]"
                            : ""
              }`}
            >
              Team Requirements
            </p>
            <p>{teamsRequirements}</p>
          </div>
          <div className="py-4 mb-6">
            <p
              className={`uppercase text-xs font-bold ${
                green
                  ? "text-[#22c55e]"
                  : purple
                    ? "text-[#c084fc]"
                    : orange
                      ? "text-[#fb923c]"
                      : pink
                        ? "text-[#ec4899]"
                        : blue
                          ? "text-[#7dd3fc]"
                          : yellow
                            ? "text-[#fbbf24]"
                            : ""
              }`}
            >
              Price to enter
            </p>
            <p>{price}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center -mt-5">
        <a
          href={href}
          className={`relative rounded py-2 px-10 mb-6 overflow-hidden group ${
            green
              ? "bg-[rgb(34,197,94)]"
              : purple
                ? "bg-[rgb(192,132,252)]"
                : orange
                  ? "bg-[rgb(251,146,60)]"
                  : pink
                    ? "bg-[rgb(236,72,153)]"
                    : blue
                      ? "bg-[rgb(125,211,252)]"
                      : yellow
                        ? "bg-[rgb(251,191,36)]"
                        : ""
          } hover:bg-gradient-to-r ${
            green
              ? "hover:from-[rgb(34,197,94)]"
              : purple
                ? "hover:from-[rgb(192,132,252)]"
                : orange
                  ? "hover:from-[rgb(251,146,60)]"
                  : pink
                    ? "hover:from-[rgb(236,72,153)]"
                    : blue
                      ? "hover:from-[rgb(125,211,252)]"
                      : yellow
                        ? "hover:from-[rgb(251,191,36)]"
                        : ""
          } ${
            green
              ? "hover:to-[rgba(34,197,94)]"
              : purple
                ? "hover:to-[rgba(192,132,252)]"
                : orange
                  ? "hover:to-[rgba(251,146,60)]"
                  : pink
                    ? "hover:to-[rgba(236,72,153)]"
                    : blue
                      ? "hover:to-[rgba(125,211,252)]"
                      : yellow
                        ? "hover:to-[rgb(251,191,36)]"
                        : ""
          },0.5)] text-white font-semibold hover:ring-2 hover:ring-offset-2 ${
            green
              ? "hover:ring-[rgb(34,197,94)]"
              : purple
                ? "hover:ring-[rgb(192,132,252)]"
                : orange
                  ? "hover:ring-[rgb(251,146,60)]"
                  : pink
                    ? "hover:ring-[rgb(236,72,153)]"
                    : blue
                      ? "hover:ring-[rgb(125,211,252)]"
                      : yellow
                        ? "hover:ring-[rgb(251,191,36)]"
                        : ""
          } transition-all ease-out duration-300`}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Register</span>
        </a>
      </div>
    </section>
  );
}
