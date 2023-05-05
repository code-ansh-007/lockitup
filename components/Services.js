import React, { useEffect, useRef, useState } from "react";
import pickup from "@/assets/pickup.png";
import shield from "@/assets/shield.png";
import qr from "@/assets/qr.png";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
  const [showF1, setShowF1] = useState(false);
  const [showF2, setShowF2] = useState(false);
  const [showF3, setShowF3] = useState(false);

  // ! animation code begins

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 40,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 40,
        },
      });
    }
    if (!isInView) {
      animation1.start({
        x: "100vw",
        transition: { ease: "easeInOut" },
      });
      animation2.start({
        x: "-100vw",
        transition: { ease: "easeInOut" },
      });
    }
  }, [isInView]);

  // ! animation code ends

  return (
    <>
      <main ref={ref} className="mt-[450px] flex flex-col space-y-10">
        <span className="text-3xl font-extrabold text-center">
          <span>Our Services</span>
        </span>
        {/* feature one */}
        <motion.div
          // initial={{ x: "100vw" }}
          animate={animation1}
          onClick={() => setShowF1(!showF1)}
          className="bg-gradient-to-l text-white text-3xl font-bold from-orange-300 to-orange-600 flex items-center p-5 rounded-l-2xl space-x-12"
        >
          <Image src={pickup} width={100} alt="pickup service" />
          {!showF1 ? (
            <span className="">Door to Door pickup service</span>
          ) : (
            <span className="text-lg font-normal">
              We provide door to door pickup and drop service, we collect your
              stuff with relevant transport
            </span>
          )}
        </motion.div>
        {/* feature 2 */}
        <motion.div
          animate={animation2}
          onClick={() => setShowF2(!showF2)}
          className="bg-gradient-to-r text-white text-3xl font-bold from-yellow-300 to-yellow-600 flex items-center p-5 rounded-r-2xl space-x-12"
        >
          {!showF2 ? (
            <span className="text-right">Secure storage space</span>
          ) : (
            <span className="text-lg text-right font-normal">
              The safety of your belongings is of utmost priority to us, so we
              enforce strict security rules
            </span>
          )}
          <Image src={shield} width={120} alt="security shield pic" />
        </motion.div>
        {/* feature 3 */}
        <motion.div
          animate={animation1}
          onClick={() => setShowF3(!showF3)}
          className="bg-gradient-to-l text-white text-3xl font-bold from-pink-300 to-pink-600 flex items-center p-5 rounded-l-2xl space-x-7"
        >
          <Image src={qr} width={100} alt="qr code feature" />
          {!showF3 ? (
            <span className="">Unique ID for every luggage</span>
          ) : (
            <span className="text-lg font-normal">
              Each of our luggage units is given a unique ID(QR code) for easy
              retrieval and management purposes
            </span>
          )}
        </motion.div>
      </main>
    </>
  );
};

export default Services;