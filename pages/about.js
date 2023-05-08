import React from "react";
import confusion from "@/assets/confusion.png";
import lock from "@/assets/lock.png";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>LockItUp - About</title>
      </Head>
      <main className=" mt-[80px] px-6 flex flex-col items-center pb-10">
        <div className="relative">
          <div className="flex items-center mt-[100px] md:mt-[130px]">
            <span className="text-3xl md:text-4xl  font-black text-white opacity-100  ml-7 md:ml-16">
              It All Started <br className="hidden md:block" /> With a Problem
            </span>
            <Image src={confusion} className="w-[130px] md:w-[180px]" />
          </div>
          <div className="absolute -z-10 top-0 left-0 sm:left-10">
            <Image src={lock} className="brightness-50 w-[450px]" />
          </div>
        </div>
        {/* Problem */}
        <div className="mt-32 sm:mt-[200px] flex flex-col items-center bg-gray-400 p-3 rounded-lg space-y-5">
          <span className="text-2xl text-gray-800 font-bold">
            The Luggage Problem
          </span>
          <span className="bg-white bg-opacity-30 p-2 rounded-md">
            Students had to pay for an empty room during their summer vacations,
            which was illogical.
          </span>
          <span className="bg-white bg-opacity-30 p-2 rounded-md">
            Students needed to store their belongings somewhere else to avoid
            room rent charges.
          </span>
        </div>
        {/* solution */}
        <div className="mt-10 flex flex-col items-center bg-gray-200 p-3 rounded-lg space-y-5">
          <span className="text-2xl text-center text-gray-800 font-bold">
            This is Where{" "}
            <span className=" text-orange-500 text-2xl sm:px-2 py-1 font-bold">
              <span className="text-[#335264]">LockIt</span>Up
            </span>{" "}
            comes to the picture
          </span>
          <span className="bg-gray-400 bg-opacity-30 p-2 rounded-md">
            We took the initiative of providing locker-room services to all the
            student of LPU
          </span>
          <span className="bg-gray-400 bg-opacity-30 p-2 rounded-md">
            Our exceptional customer service set us apart from the competition.
          </span>
          <span className="bg-gray-400 bg-opacity-30 p-2 rounded-md">
            We saved students' money on rent by providing a secure place to
            store their belongings.
          </span>
        </div>
        {/* ending tagline */}

        <div className="mt-10 flex flex-col items-center space-y-5">
          <span className="text-2xl font-bold">All In All</span>
          <span className="text-xl">
            {" "}
            Why pay 2 months rent, when you can{" "}
            <span className=" text-orange-500 text-2xl sm:px-2 py-1 font-bold">
              <span className="text-[#335264]">LockIt</span>Up
            </span>{" "}
            ?
          </span>
        </div>
      </main>
    </>
  );
};

export default About;
