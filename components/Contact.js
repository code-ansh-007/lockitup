import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsapp from "@/assets/whatsapp.png";

const Contact = () => {
  return (
    <>
      <main className="mx-6 mt-10 bg-gradient-to-r md:space-x-5 justify-between from-green-300 p-3 rounded-xl to-green-800 flex items-center">
        <div className="flex flex-col space-y-3">
          <span className="text-3xl md:text-4xl font-bold text-white">
            Any Queries
          </span>
          <Link href="https://wa.me/+916283951755">
            <button className="bg-white active:scale-105 transition transform duration-300 text-green-300 p-1 px-4 rounded-lg text-lg">
              Open WhatsApp
            </button>
          </Link>{" "}
        </div>
        <div>
          <Image src={whatsapp} width={80} />
        </div>
      </main>
    </>
  );
};

export default Contact;
