import { modalState } from "@/recoil/modalAtom";
import Head from "next/head";
import React from "react";
import { useRecoilState } from "recoil";

const PlanModal = () => {
  const [openModal, setOpenModal] = useRecoilState(modalState);
  function handleClose(e) {
    if (
      e.target.className ===
      "h-screen bg-black bg-opacity-50 fixed top-0 left-0 w-full flex flex-col items-center justify-center"
    ) {
      setOpenModal(false);
    }
  }

  return (
    <>
      <main
        onClick={handleClose}
        className="h-screen bg-black bg-opacity-50 fixed top-0 left-0 w-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center bg-white p-4 rounded-xl space-y-4 shadow-lg w-[250px] sm:w-[400px]">
          <span className="text-lg sm:text-xl text-center font-bold">
            We are accepting bookings till 30th May
          </span>
          <span className="sm:w-[350px]  text-center text-xs sm:text-sm">
            We will open the catalog payment portal on 21st May, you can pay for
            the plan then.
          </span>
          <button
            onClick={() => setOpenModal(false)}
            className="bg-red-400 outline-none text-white w-full p-1 rounded-md"
          >
            Close
          </button>
        </div>
      </main>
    </>
  );
};

export default PlanModal;
