import Image from "next/image";
import React from "react";
import trolley from "@/assets/trolley.png";
import pillow from "@/assets/pillow.png";
import mattress from "@/assets/mattress.png";
import bucket from "@/assets/bucket.png";
import box from "@/assets/box.png";
import guitar from "@/assets/guitar.png";
import laptop from "@/assets/laptop.png";
import motorbike from "@/assets/motorbike.png";
import blanket from "@/assets/blanket.png";
import misc from "@/assets/misc.png";
import discount from "@/assets/discount.png";
import group from "@/assets/group.png";
import PlanModal from "@/components/PlanModal";
import { modalState } from "@/recoil/modalAtom";
import { useRecoilState } from "recoil";
import Head from "next/head";

const Plans = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  return (
    <>
      <Head>
        <title>LockItUp - Plans</title>
      </Head>
      <main className="mt-[80px] px-6 flex flex-col items-center text-white">
        <span className="text-3xl font-extrabold text-center text-gray-700">
          <span>Our Plans</span>
        </span>
        {/* INDIVIDUAL PLAN */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10 md:mt-10">
          <div className="flex flex-col items-center mt-5 md:mt-0 bg-gradient-to-r from-blue-200 to-blue-700 p-5 rounded-tr-3xl rounded-bl-3xl">
            <span className="text-xl font-bold mb-5 text-white">
              Individual Plan
            </span>
            <table className="border w-[300px]">
              <thead>
                <tr>
                  <th className="border-2 p-2">Item</th>
                  <th className="border-2 p-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={trolley} width={50} />
                      <span className="text-sm text-center">Trolley</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={box} width={50} />
                      <span className="text-sm text-center">Carton 2x2</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={bucket} width={50} />
                      <span className="text-sm text-center">Bucket</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">2</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={pillow} width={50} />
                      <span className="text-sm text-center">Pilow</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={mattress} width={50} />
                      <span className="text-sm text-center">Mattress</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center space-x-6 mt-5">
              <span className="text-right text-normal text-white">
                Total: ₹450/month
              </span>
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-400 active:scale-105 transition transform duration-300 py-2 px-2 text-white font-semibold rounded-lg shadow-md"
              >
                Browse Catalog
              </button>
            </div>
          </div>
          {/* GROUP PLAN */}
          <div className="my-10 md:mt-0 w-full md:w-fit rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r flex flex-col items-center from-pink-300 to-pink-800 py-5 space-y-5">
            <span className="text-xl font-bold  text-white">Group Plan</span>
            <div className="flex flex-col items-start px-5 space-y-5 ml-5">
              <span className="flex  items-center text-white space-x-3 text-sm">
                <Image src={discount} width={60} />
                <span>Special Discount for group booking</span>
              </span>
              <span className="flex  items-center text-white space-x-3 text-sm">
                <Image src={group} width={60} />
                <span>
                  Group plan is calculated on the basis of individual plan
                </span>
              </span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-400 active:scale-105 transition transform duration-300 px-6 py-2 text-white font-semibold rounded-lg shadow-md"
            >
              Browse Catalog{" "}
            </button>{" "}
          </div>
          {/* ADD ONs */}
          <div className="mb-10 w-full md:w-fit sm:px-5 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r flex flex-col items-center from-orange-300 to-orange-800 py-5 space-y-5">
            <span className="text-xl font-bold  text-white">
              Add Ons/Special Items
            </span>
            {/* table */}
            <table className="border w-[300px]">
              <thead>
                <tr>
                  <th className="border-2 p-2">Item</th>
                  <th className="border-2 p-2">Quantity</th>
                  <th className="border-2 p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={trolley} width={50} />
                      <span className="text-sm text-center">Extra Trolley</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹150-₹250/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={motorbike} width={50} />
                      <span className="text-sm text-center">Bike</span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹600/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={box} width={50} />
                      <span className="text-sm text-center">
                        Extra Carton 2x2
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹150-₹200/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={guitar} width={50} />
                      <span className="text-sm text-center">
                        Musical Instrument
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹300/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={laptop} width={50} />
                      <span className="text-sm text-center">
                        Electronic Item
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹250-₹500/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={mattress} width={50} />
                      <span className="text-sm text-center">
                        Extra Mattress
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹100/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={blanket} width={50} />
                      <span className="text-sm text-center">
                        Quilt or Blanket
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹150/month</td>
                </tr>
                <tr>
                  <td className="border-2 p-2">
                    <div className="flex flex-col items-center">
                      <Image src={misc} width={50} />
                      <span className="text-sm text-center">
                        Miscellaneous Items
                      </span>
                    </div>
                  </td>
                  <td className="border-2 p-2 text-center">1</td>
                  <td className="border-2 p-2 text-center">₹100/month</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-400 active:scale-105 transition transform duration-300 px-6 py-2 text-white font-semibold rounded-lg shadow-md"
            >
              Browse Catalog{" "}
            </button>{" "}
          </div>
        </div>
      </main>
      {showModal && <PlanModal />}
    </>
  );
};

export default Plans;
