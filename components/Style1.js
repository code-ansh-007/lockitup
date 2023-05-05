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
          width={165}
          alt="circle pic"
          className="absolute top-24 left-[80px] animate-spin-slow"
        />
        <Image
          src={bag}
          width={90}
          alt="bag-pic"
          className="absolute top-32 left-[-5px]"
        />
        <Image
          src={trolley}
          width={100}
          alt="trolley-pic"
          className="absolute left-[120px] top-[-3px]"
        />
        <Image
          src={kitchen}
          width={95}
          alt="kitchen-pic"
          className="absolute top-32 left-[240px]"
        />
        <Image
          src={shirts}
          width={75}
          alt="shirt pic"
          className="absolute top-[260px] left-[125px]"
        />
        <span className="flex flex-col items-center absolute top-[130px] text-xl font-bold left-[130px]">
          <span>All</span>
          <span className="text-3xl text-orange-500">Your</span>
          <span>Stuff</span>
        </span>
      </div>
    </>
  );
};

export default Style1;
