// Design and images
// Libraries
// Components
// Outside data
"use client";
import Image from "next/image";
import PriceCard from "./components/PriceCard";
import ExtraGolf from "./components/ExtraGolf";
import { useState } from "react";

/////////////////////////////

export default function Price() {
  const [modalGolf, setModalGolf] = useState(false);
  const [modalBocce, setModalBocce] = useState(false);
  return (
    <div className="" id="register">
      <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-8 ">
        <PriceCard
          img="/imgs/Football SVG.svg"
          title="Male Football Team"
          date="3rd July 2026"
          venue="University of Lancashire Sports Arena"
          startTime="11am"
          teamsRequirements="7-9 players per team"
          price="£100 (per team)"
          href="/registration"
          green
        />
        <PriceCard
          img="/imgs/Football SVG.svg"
          title="Female Football Team"
          date="3rd July 2026"
          venue="University of Lancashire Sports Arena"
          startTime="11am"
          teamsRequirements="7-9 players per team"
          price="£100 (per team)"
          href="/registration"
          pink
        />
        <PriceCard
          img="/imgs/Netball SVG.svg"
          title="Netball Team"
          date="3rd July 2026"
          venue="University of Lancashire Sports Arena"
          startTime="12 noon"
          teamsRequirements="7-12 players per team"
          price="£125 (per team)"
          href="/registration"
          orange
        />
        <PriceCard
          img="/imgs/Rounders SVG.svg"
          title="Rounders Team"
          date="3rd July 2026"
          venue="University of Lancashire Sports Arena"
          startTime="11:30am"
          teamsRequirements="9-15 players per team"
          price="£150 (per team)"
          href="/registration"
          purple
        />
        <div>
          <PriceCard
            img="/imgs/Bocce SVG.svg"
            title="Boccia Team"
            date="3rd July 2026"
            venue="University of Lancashire Sports Arena"
            startTime="12 noon"
            teamsRequirements="Mixed teams of 3 players"
            price="£20 per person"
            href="/registration"
            yellow
          />

          {/* <p
            className="cursor-pointer text-center animate-bounce uppercase text-xs font-bold text-amber-600"
            onClick={() => setModalBocce(true)}
          >
            Click here for more information
            <br /> about the Boccia sport
          </p> */}
        </div>
        {/* <div>
          <PriceCard
            img="/imgs/Golf SVG.svg"
            title="Golf Team"
            date="5th July 2024"
            venue="Ashton and Lea Golf Club"
            teamsRequirements="Min. 1 players, Max. 4 players"
            price="£60 per person"
            href="/registration"
            blue
          />

          <p
            className="cursor-pointer text-center animate-bounce uppercase text-xs font-bold text-cyan-700"
            onClick={() => setModalGolf(true)}
          >
            Click here for more information
            <br /> about the Golf Day
          </p>
        </div> */}
      </div>

      {modalGolf && (
        <section>
          <div
            className="fixed z-[888] top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[#0f172a]/40 backdrop-blur-md"
            onClick={() => setModalGolf(false)}
          >
            <section
              data-aos="fade-down"
              className={`relative z-[999] text-center w-1/2 max-sm:w-auto`}
            >
              <div
                className={`flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden
      hover:shadow-2xl hover:shadow-[rgb(125,211,252)]/20`}
              >
                <div
                  className={`flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(125,211,252)]`}
                >
                  <Image
                    src="/imgs/Golf SVG.svg"
                    width={500}
                    height={300}
                    alt={`Vector of someone playing golf`}
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
                    Event Details
                  </h1>

                  <p className="mb-10">
                    Shotgun start
                    <br />
                    <br />
                    9.00am - All players arrive at Ashton and Lea Golf Club
                    <br />
                    <br />
                    9.30am - Players head to their designated tee
                    <br />
                    <br />
                    10.00am - Tee off
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
                  href="https://www.cognitoforms.com/ShoutConnectLimited/_2024PrestonCityGamesRegistrationForm"
                  target="_blank"
                  className={`relative rounded py-2 px-10 mb-6 overflow-hidden group bg-[rgb(125,211,252)] hover:bg-gradient-to-r hover:from-[rgb(125,211,252)] hover:to-[rgba(125,211,252)],0.5)] text-white font-semibold hover:ring-2 hover:ring-offset-2  hover:ring-[rgb(125,211,252)] transition-all ease-out duration-300`}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Register</span>
                </a>
              </div>
            </section>
          </div>
        </section>
      )}
      {modalBocce && (
        <section>
          <div
            className="fixed z-[888] top-0 left-0 w-[100vw] h-[100%] flex items-center justify-center bg-[#0f172a]/40 backdrop-blur-md"
            onClick={() => setModalBocce(false)}
          >
            <section
              data-aos="fade-down"
              className={`relative z-[999] text-center w-1/2 max-lg:w-[80%]`}
            >
              <div
                className={`flex flex-auto flex-col items-center bg-neutral-50 rounded-lg overflow-hidden
      hover:shadow-2xl hover:shadow-[rgb(251,191,36)]/20`}
              >
                <div
                  className={`flex flex-col items-center justify-center w-full p-4 text-white bg-[rgb(251,191,36)]`}
                >
                  <Image
                    src="/imgs/Bocce SVG.svg"
                    width={500}
                    height={300}
                    alt={`Vector of someone playing golf`}
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
                        fill={`rgba(251,191,36,0.7)`}
                      />
                      <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="3"
                        fill={`rgba(251,191,36,0.5)`}
                      />
                      <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        fill={`rgba(251,191,36,0.3)`}
                      />
                      <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="7"
                        fill={`rgba(251,191,36)`}
                      />
                    </g>
                  </svg>
                </div>
                <div className="px-4 text-slate-600 text-center">
                  <h1
                    className={`font-title text-[28px] tracking-wide text-[rgba(251,191,36)] mb-2`}
                  >
                    Compete from your seat!
                  </h1>

                  <p className="mb-10 md:w-[80%] mx-auto">
                    For 2024 we are introducing a fifth sport, boccia, a seated
                    bowling game for competitive players keen to participate in
                    a less physically demanding sport than the other Preston
                    City Games tournaments.
                  </p>
                  <p className="font-bold text-[rgba(251,191,36)] uppercase mb-10">
                    What is boccia?
                  </p>
                  <div className="md:w-[80%] mx-auto grid lg:grid-cols-2 gap-10 mb-10">
                    <ul className="text-left space-y-5">
                      <li>
                        • Boccia is a mixed gender, Italian bowling game that
                        has roots in ancient Greece and Egypt.{" "}
                      </li>
                      <li>• Participants are seated throughout the game.</li>
                      <li>• It became a Paralympic sport in 1984. </li>
                      <li>
                        • The aim of boccia, similar to boules, is to throw the
                        closest ball to the jack for a point. The team with the
                        highest number of points at the end of play is the
                        winner.{" "}
                      </li>
                    </ul>
                    <ul className="text-left space-y-5">
                      <li>• Players can roll or throw the ball.</li>
                      <li>
                        {" "}
                        • Offensive and defensive strategies are used, such as
                        knocking opponents’ balls away from the jack.{" "}
                      </li>
                      <li>
                        • It is believed that Sir Frances Drake refused to
                        defend England against the Spanish Armada until he
                        finished a game of boccia!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center -mt-5">
                <a
                  href="https://www.cognitoforms.com/ShoutConnectLimited/_2024PrestonCityGamesRegistrationForm"
                  target="_blank"
                  className={`relative rounded py-2 px-10 mb-6 overflow-hidden group bg-[rgb(251,191,36)] hover:bg-gradient-to-r hover:from-[rgb(251,191,36)] hover:to-[rgb(251,191,36)],0.5)] text-white font-semibold hover:ring-2 hover:ring-offset-2  hover:ring-[rgb(125,211,252)] transition-all ease-out duration-300`}
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Register</span>
                </a>
              </div>
            </section>
          </div>
        </section>
      )}
    </div>
    // </div>
  );
}
