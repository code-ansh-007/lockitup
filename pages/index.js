import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Style1 from "@/components/Style1";
import up from "@/assets/up.png";
import Image from "next/image";
import WhyUs from "@/components/WhyUs";
import { useEffect, useState } from "react";
import Testimonials from "@/components/Testimonials";
import { Support } from "@/components/Support";
import Head from "next/head";
import Contact from "@/components/Contact";

export default function Home() {
  // ? showing button after a certain scroll point in the y axis
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ? handle up scroll function

  const handleUpScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>LockItUp</title>
      </Head>
      <main className="mt-24 mb-[80px] sm:mb-0 overflow-hidden sm:flex flex-col items-center">
        <Banner />
        <div className="sm:hidden">
          <Style1 />
        </div>
        {/* <Contact /> */}
        <Services />
        <WhyUs />
        <div className="lg:flex lg:items-start sm:mt-10 sm:mb-20">
          <Testimonials />
          <Support />
        </div>
        <button
          onClick={handleUpScroll}
          className="mr-2 fixed bottom-[235px] right-[18px] sm:right-[50px]"
        >
          {showButton && <Image src={up} width={50} alt="up arrow" />}
        </button>
      </main>
    </>
  );
}
