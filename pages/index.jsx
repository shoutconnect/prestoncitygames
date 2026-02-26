// Design and images
// Libraries
import Head from "next/head";
// Components
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Price from "@/components/Price";
import Cta from "@/components/Cta";
import About from "@/components/About";
import Images from "@/components/Images";
import ThankYouHero from "@/components/Thank You/Hero";
import ThankYouGallery from "@/components/Thank You/Gallery";
import ThankYouForm from "@/components/Thank You/Form";
import ThankYouAbout from "@/components/Thank You/About";
import ThankYouCta from "@/components/Thank You/Cta";
import ThankYouSocialMedia from "@/components/Thank You/SocialMedia";
import NewPrice from "@/components/NewPrice";
// Outside data

/////////////////////////////

export default function Home() {
  return (
    <>
      <Head>
        <title>Preston City Games | Sporting festival in Preston, UK</title>
        <meta
          name="description"
          content="Preston City Games is a fun, one day sporting festival that pits teams of businesses and charities against each other in a tournament of rounders, football, netball and golf."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden ">
        <Hero />

        {/* <ThankYouHero /> */}
        <ThankYouCta />
        {/* <Images /> */}
        <ThankYouAbout />
        <ThankYouGallery />

        {/* <ThankYouForm /> */}
        {/* <About /> */}
        <NewPrice />
        <Venue />
        {/* <ThankYouSocialMedia /> */}
      </main>
    </>
  );
}
