import { modalState } from "@/recoil/modalAtom";
import Head from "next/head";
import Link from "next/link";
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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdjSCIUCN-4Rya7aPI9GAMIbm0-kX065i1G4GINan1ILYtD0w/viewform"
            className="w-full"
          >
            <button className="bg-green-500 outline-none text-white w-full p-1 rounded-md">
              Book Slot
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default PlanModal;
