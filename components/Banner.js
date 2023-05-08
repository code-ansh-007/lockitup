import React from "react";
import trolley from "@/assets/trolley.png";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-blue-300 to-blue-900 text-white mx-6 p-5 py-6 rounded-br-2xl rounded-tl-2xl flex flex-col sm:flex-row space-y-8 md:w-[700px]">
        <div className="flex flex-col space-y-10 justify-evenly">
          <span className="text-4xl md:text-6xl font-bold">
            We'll keep it{" "}
            <span className="border-b-4 border-orange-400">safe</span> for you
            ;)
          </span>
          <div className="w-full flex items-center space-x-4 sm:space-x-8">
            <Link href="/plans">
              <button className=" w-fit hover:scale-105 transition transform duration-300 ease-in-out active:scale-105 bg-gradient-to-r p-2 text-lg text-white font-bold rounded-lg from-orange-300 to-orange-800">
                Browse Plans
              </button>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdjSCIUCN-4Rya7aPI9GAMIbm0-kX065i1G4GINan1ILYtD0w/viewform">
              <button className="w-fit hover:scale-105 transition transform duration-300 ease-in-out active:scale-105 bg-gradient-to-r p-2 text-lg text-white font-bold rounded-lg from-green-500 to-green-800">
                Book Slot Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block">
          {/* <Image src={bag} width={150} /> */}
          <Image src={trolley} width={300} />
        </div>
      </main>
    </>
  );
};

export default Banner;
