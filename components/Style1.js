import React from "react";
import bag from "@/assets/bag.png";
import trolley from "@/assets/trolley.png";
import kitchen from "@/assets/kitchen.png";
import circle from "@/assets/circle.png";
import shirts from "@/assets/shirts.png";
import Image from "next/image";

const Style1 = () => {
  return (
    <>
      <div className="relative mt-10 -z-10">
        <Image
          src={circle}
          width={180}
          alt="circle pic"
          className="absolute top-24 left-[90px] animate-spin-slow"
        />
        <Image
          src={bag}
          width={100}
          alt="bag-pic"
          className="absolute top-32 left-[-10px]"
        />
        <Image
          src={trolley}
          width={100}
          alt="trolley-pic"
          className="absolute left-32"
        />
        <Image
          src={kitchen}
          width={100}
          alt="kitchen-pic"
          className="absolute top-32 left-[270px]"
        />
        <Image
          src={shirts}
          width={80}
          alt="shirt pic"
          className="absolute top-[280px] left-[135px]"
        />
        <span className="flex flex-col items-center absolute top-[135px] text-xl font-bold left-[140px]">
          <span>All</span>
          <span className="text-4xl text-orange-500">Your</span>
          <span>Stuff</span>
        </span>
      </div>
    </>
  );
};

export default Style1;
