import PrivacyPolicyText from "@/components/PrivacyPolicyText";
import Head from "next/head";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/////////////////////////////

export default function Players() {
  return (
    <>
      <Head>
        <title>
          Players | Preston City Games | Sporting festival in Preston, UK
        </title>
        <meta
          name="description"
          content="Participant Form | Preston City Games is a fun, one day sporting festival that pits teams of businesses and charities against each other in a tournament of rounders, football, netball and golf."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white relative">
        <section className="w-full bg-slate-900">
          <div className="relative w-full max-lg:w-full flex items-center justify-center">
            <div className="relative z-40 h-[100px] w-[100px] flex">
              <Image
                src="/imgs/Preston City Games Logo SVG.svg"
                fill
                alt="Preston City Games logo"
                className=""
                priority
              />
            </div>
          </div>
        </section>
        <div className="transform -scale-y-100 w-full ">
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

        <div class="py-24 max-sm:py-16">
          <div class="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
            <div class="flex flex-col items-center text-center gap-8 -mt-20">
              <h1 class="text-6xl max-xl:text-5xl max-md:text-4xl max-xl:leading-[55px] font-title text-slate-900 tracking-wide leading-[65px] mb-4">
                Player Registration Form
              </h1>

              {/* <h2 class="text-3xl max-md:text-2xl font-title text-slate-900 tracking-wide mb-8">
                Thank you very much for
                <span class="text-amber-400"> participating </span>
                in the 2025 Preston City Games tournament.
              </h2> */}

              <div class="bg-slate-50 rounded-2xl p-8   w-full mb-8">
                <h3 class="text-2xl font-title text-slate-900 mb-6 text-center tracking-wide ">
                  Event Details
                </h3>
                <div class="text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>
                    The event will take place on{" "}
                    <span class="font-bold text-slate-900">
                      Friday 3rd July 2026
                    </span>{" "}
                    at University of Lancashire Sports Arena, Tom Benson Way,
                    Preston PR2 1SG.
                  </p>
                  <p>
                    Events include Rounders, Netball, Boccia and Football. The
                    competitions will take place throughout the afternoon,
                    starting at 11am.
                  </p>
                </div>
              </div>

              <div class="bg-slate-100 rounded-2xl p-8   w-full mb-8">
                <h3 class="text-2xl font-title text-slate-900 mb-6 text-center tracking-wide">
                  Please view Code of Conduct and Venue Plan Below
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="text-center">
                    <h4 class="text-xl font-semibold text-slate-900 mb-4">
                      Code of Conduct
                    </h4>
                    <a
                      href="/Preston City Games Code of Conduct.pdf"
                      download="Preston City Games Code of Conduct.pdf"
                      class="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      Download PDF
                    </a>
                  </div>
                  <div class="text-center">
                    <h4 class="text-xl font-semibold text-slate-900 mb-4">
                      Venue Plan
                    </h4>
                    <a
                      href="/PCG Site Plan 2025.pdf"
                      download="PCG Site Plan 2025.pdf"
                      class="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>

              <div class="bg-slate-50 rounded-2xl p-8   w-full mb-8">
                <h3 class="text-2xl font-title text-slate-900 mb-6 text-center tracking-wide">
                  Your call to Action!
                </h3>
                <div class="text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>
                    Please can you check each sport's rules and regulations
                    below and complete the player registration form! Please have
                    this completed by{" "}
                    <span class="font-bold text-slate-900">
                      Thursday 2nd July 2026.
                    </span>{" "}
                    Thank you and we look forward to seeing you play.
                  </p>
                  <p>
                    Please can all competitors report to{" "}
                    <span class="font-bold text-slate-900">Event HQ</span> on
                    arrival, this will be situated on the grass verge next to
                    the car park.
                  </p>
                  <p>
                    All team captains will be required to report to the
                    registration desk to sign in and collect fixture lists,
                    information packs and t-shirts for their teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-title text-slate-900 tracking-wide w-full text-center mt-6 mb-12">
          Sports Rules and Regulations
        </h1>

        <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-boccia-content"
              id="panel-boccia-header"
              className="hover:bg-gray-50 px-6 py-4"
            >
              <Typography
                component="span"
                className="text-2xl font-bold text-gray-800"
              >
                Boccia
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-6 py-6 bg-gray-50 border-t border-gray-200">
              <div className="text-gray-700 text-base leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>Kit:</strong> Teams are advised to wear the
                    same-coloured tops or individual competitors can wear
                    comfortable clothing which allows movement.
                  </li>
                  <li>
                    <strong>Venue:</strong> UCLan Sports Arena – Outdoor Grass
                    Pitches or Indoor sports hall in adverse weather
                  </li>
                  <li>
                    <strong>Teams:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Mixed gender teams of 3 players or can be played
                        individually
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Format:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • From a seated position, players propel balls to land
                        as close as possible to a white marker ball known as a
                        Jack.
                      </li>
                      <li>
                        • Two sides compete as individuals, pairs or as a team
                        of three over a set number of ends (4 for individuals
                        and pairs, and 6 for teams).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rules:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • All games will be umpired according to rules and
                        regulations.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-football-content"
              id="panel-football-header"
              className="hover:bg-gray-50 px-6 py-4"
            >
              <Typography
                component="span"
                className="text-2xl font-bold text-gray-800"
              >
                Football
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-6 py-6 bg-gray-50 border-t border-gray-200">
              <div className="text-gray-700 text-base leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>Kit:</strong> Teams are advised to wear the same
                    coloured tops
                  </li>
                  <li>
                    <strong>Venue:</strong> UCLan Sports Arena, Outdoor 5 A-Side
                    astroturf grids
                  </li>
                  <li>
                    <strong>Teams:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Men only - Each team can have between 7-9 players
                      </li>
                      <li>
                        • At the end of every match the captain must sign the
                        referee score card to confirm the scores
                      </li>
                      <li>
                        • Substitutions are roll-on/roll-off and can be made
                        throughout the game in a break in play, but the referee
                        must be notified
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Format:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Teams are entered into a round robin format and will
                        play each other once or twice depending on number of
                        teams entered
                      </li>
                      <li>
                        • All games will be started and ended by the referee's
                        whistle
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rules:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • All games will be umpired according to FA rules and
                        regulations. See{" "}
                        <a
                          href="http://thefa.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          http://thefa.com
                        </a>
                      </li>
                      <li>
                        • All players must ensure they wear shin pads and do NOT
                        wear blades, studs or moulded footwear. AstroTurf shoes
                        or trainers are acceptable
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-netball-content"
              id="panel-netball-header"
              className="hover:bg-gray-50 px-6 py-4"
            >
              <Typography
                component="span"
                className="text-2xl font-bold text-gray-800"
              >
                Netball
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-6 py-6 bg-gray-50 border-t border-gray-200">
              <div className="text-gray-700 text-base leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>Kit:</strong> Teams should try to wear some type of
                    identical kit (t-shirts or dresses), shorts or skirts. Bibs
                    will be provided on the day
                  </li>
                  <li>
                    <strong>Venue:</strong> UCLan Sports Arena, Outdoor Netball
                    Courts
                  </li>
                  <li>
                    <strong>Teams:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • Mixed – teams of 7 players at least 1 male, squad of
                        up to 12
                      </li>
                      <li>• Each team must have a captain</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Format:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • All teams will play each other once or twice depending
                        on the number of teams entered
                      </li>
                      <li>
                        • Length of matches will be determined by the number of
                        teams entered, but it is likely to be 8 minutes each way
                      </li>
                      <li>
                        • Games will be monitored by a central timer and horn
                        will sound for the start and end of games
                      </li>
                      <li>
                        • The individual games will then be started and ended by
                        umpires whistle
                      </li>
                      <li>
                        • Captains will be required to sign the umpire score
                        card at the end of each match
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rules:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • All games will be umpired according to the world
                        netball rules and regulations. See{" "}
                        <a
                          href="https://netball.sport/game/the-rules-of-netball"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          https://netball.sport/game/the-rules-of-netball
                        </a>
                      </li>
                      <li>
                        • Players must ensure that their nails are cut short so
                        they cannot be seen over the tip of your finger and no
                        jewellery can be worn at all even if taped
                      </li>
                      <li>
                        • Substitutions can be made at half time in games, in
                        case of injuries substitutions can be made however only
                        the injured player can switch and it has to be a
                        straight swap
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="px-6 mx-auto max-w-7xl lg:px-8 max-lg:my-16 my-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-rounders-content"
              id="panel-rounders-header"
              className="hover:bg-gray-50 px-6 py-4"
            >
              <Typography
                component="span"
                className="text-2xl font-bold text-gray-800"
              >
                Rounders
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-6 py-6 bg-gray-50 border-t border-gray-200">
              <div className="text-gray-700 text-base leading-relaxed">
                <ul className="space-y-3">
                  <li>
                    <strong>Kit:</strong> Teams are advised to wear the
                    same-coloured tops
                  </li>
                  <li>
                    <strong>Venue:</strong> UCLan Sports Arena – Outdoor Grass
                    Pitches
                  </li>
                  <li>
                    <strong>Teams:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Mixed gender</li>
                      <li>
                        • Squad numbers can be between 9–12 with a maximum of 9
                        playing at any one time
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Format:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • At the end of every match the captain must sign the
                        umpire's score card to confirm the scores
                      </li>
                      <li>
                        • Substitutions can only be made during the game if
                        there is an injury to one of the 9 players and is at the
                        discretion of the umpire
                      </li>
                      <li>
                        • All teams are entered into a round robin group and
                        will play each other once
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rules:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>
                        • All games will be started and ended by the umpires
                      </li>
                      <li>
                        • All games will be umpired according to RE rules and
                        regulations. See{" "}
                        <a
                          href="https://www.roundersengland.co.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          https://www.roundersengland.co.uk
                        </a>
                      </li>
                      <li>
                        <div className="flex flex-col gap-4 items-start">
                          • Please click the button below to download the rules
                          and regulations for rounders.
                          <a
                            href="/pdfs/Preston_City_Games_Rounders_Rules.jpg"
                            download="Preston_City_Games_Rounders_Rules.jpg"
                            className="inline-flex items-center mb-4 px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-300 transition-colors duration-200 font-medium"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                              ></path>
                            </svg>
                            Download Rules
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <h1 className="text-4xl font-title text-slate-900 tracking-wide w-full text-center mt-16 mb-8">
          Player Registration Form
        </h1>

        <div className="px-6 mx-auto max-w-7xl lg:px-8 pt-8 pb-28">
          <div className="flex max-lg:flex-col-reverse max-lg:gap-8 max-lg:items-center items-start">
            <iframe
              src="https://www.cognitoforms.com/f/42nSYhyX7UC-l4nHKMTwuQ/111"
              allow="payment"
              height="754"
              className="w-full"
            ></iframe>
            <script src="https://www.cognitoforms.com/f/iframe.js"></script>
          </div>
        </div>
        <div className="absolute bottom-0 transform -scale-y-100 w-full rotate-180">
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
      </main>
    </>
  );
}
