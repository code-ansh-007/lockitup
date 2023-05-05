import React from "react";

const Banner = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-blue-300 to-blue-900 text-white p-5 py-6 rounded-rb-2xl rounded-lt-2xl flex flex-col space-y-8">
        <span className="text-4xl font-bold">
          We'll keep it{" "}
          <span className="border-b-4 border-orange-400">safe</span> for you ;)
        </span>
        <button className="w-fit bg-gradient-to-r p-2 text-2xl text-white font-bold rounded-lg from-green-500 to-green-800">
          Book Now
        </button>
      </main>
    </>
  );
};

export default Banner;
