import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Style1 from "@/components/Style1";
import up from "@/assets/up.png";
import Image from "next/image";
import WhyUs from "@/components/WhyUs";
import { useEffect, useState } from "react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  // ? showing button after a certain scroll point in the y axis
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 700) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
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
      <main className="mt-24 mb-[80px] overflow-hidden sm:flex flex-col items-center">
        <Banner />
        <div className="sm:hidden">
          <Style1 />
        </div>
        <Services />
        <WhyUs />
        <Testimonials />
        {showButtons && (
          <div className="fixed bottom-[90px] mb-5 flex items-center justify-between w-full px-6">
            <button className=" bg-gradient-to-r p-2 text-2xl text-white font-bold rounded-lg from-green-400 to-green-700">
              Book Now
            </button>
            <button onClick={handleUpScroll} className="mr-2">
              <Image src={up} width={50} alt="up arrow" />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
