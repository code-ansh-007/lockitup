import React, { useState } from "react";
import reduction from "@/assets/reduction.png";
import cctv from "@/assets/cctv.png";
import hassle from "@/assets/hassle.png";
import care from "@/assets/care.png";
import Image from "next/image";

const WhyUs = () => {
  const [showWhy1, setShowWhy1] = useState(false);
  const [showWhy2, setShowWhy2] = useState(false);
  const [showWhy3, setShowWhy3] = useState(false);
  const [showWhy4, setShowWhy4] = useState(false);
  return (
    <>
      <main className="flex flex-col mt-10 px-6">
        <span className="text-3xl font-extrabold text-center">
          <span>Why choose us ?</span>
        </span>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {!showWhy1 ? (
            <div
              onClick={() => setShowWhy1(!showWhy1)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-green-400 to-green-700  p-3 rounded-xl"
            >
              <Image src={reduction} width={100} alt="money-pic" />
              <span className="text-xl font-bold text-white">Affordable</span>
            </div>
          ) : (
            <div
              onClick={() => setShowWhy1(!showWhy1)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-green-400 to-green-700  p-3 rounded-xl"
            >
              <span className="text-normal font-normal text-white">
                Our affordable prices are a result of our company's efficient
                space management strategies.
              </span>
            </div>
          )}
          {!showWhy2 ? (
            <div
              onClick={() => setShowWhy2(!showWhy2)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-blue-400 to-blue-700  p-3 rounded-xl"
            >
              <Image src={cctv} width={100} alt="cctv camera pic" />
              <span className="text-xl font-bold text-white">Security</span>
            </div>
          ) : (
            <div
              onClick={() => setShowWhy2(!showWhy2)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-blue-400 to-blue-700  p-3 rounded-xl"
            >
              <span className="text-normal font-normal text-white">
                We use CCTV technology to enhance security in addition to manual
                inspections of storage areas.
              </span>
            </div>
          )}
          {!showWhy3 ? (
            <div
              onClick={() => setShowWhy3(!showWhy3)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-orange-300 to-orange-600  p-3 rounded-xl"
            >
              <Image src={hassle} width={100} alt="hassle free transport pic" />
              <span className="text-xl font-bold text-white">Hassle Free</span>
            </div>
          ) : (
            <div
              onClick={() => setShowWhy3(!showWhy3)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-orange-300 to-orange-600  p-3 rounded-xl"
            >
              <span className="text-normal font-normal text-white">
                Our staff's expertise ensures a hassle-free pickup and retrieval
                process for your belongings.
              </span>
            </div>
          )}
          {!showWhy4 ? (
            <div
              onClick={() => setShowWhy4(!showWhy4)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-pink-300 to-pink-600  p-3 rounded-xl"
            >
              <Image src={care} width={100} alt="care of luggage pic" />
              <span className="text-xl font-bold text-white">Care</span>
            </div>
          ) : (
            <div
              onClick={() => setShowWhy4(!showWhy4)}
              className="flex flex-col space-y-2 items-center bg-gradient-to-r from-pink-300 to-pink-600  p-3 rounded-xl"
            >
              <span className="text-normal font-normal text-white">
                We prioritize care by storing your belongings in safe, hygienic
                environments to maintain their pristine condition.
              </span>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default WhyUs;
