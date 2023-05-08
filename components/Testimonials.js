import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";

import praful from "@/assets/praful.jpeg";
import vivek from "@/assets/vivek.jpeg";
import saurav from "@/assets/saurav.jpeg";

export default function Testimonials() {
  return (
    <>
      <main className="mt-10 flex flex-col items-center space-y-5 px-5">
        {" "}
        <span className="text-3xl font-extrabold text-center text-gray-700">
          <span>Testimonials</span>
        </span>{" "}
        <Carousel
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4 left-4"
            >
              {/* <FiChevronLeft className="text-4xl" /> */}
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 -translate-y-2/4 !right-4"
            >
              {/* <FiChevronRight className="text-4xl" /> */}
            </IconButton>
          )}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          className="rounded-xl -z-10 sm:pb-10 sm:w-[500px]"
        >
          {/* user 1 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={praful}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">Praful Kumar Reddy</span>
              <span className="text-center text-sm">
                "From pickup to baggage retrieval, everything went smooth"
              </span>
            </div>
          </div>
          {/* user 2 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={vivek}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">Vivek Kumar Sahoo</span>
              <span className="text-center text-sm">
                "They offer top-notch service at an affordable price."
              </span>
            </div>
          </div>
          {/* user 3 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={saurav}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">Saurav Aryan</span>
              <span className="text-center text-sm">
                "The luggage was in pristine condition when i returned from{" "}
                <br className="hidden sm:block" />
                home. Thanks!"
              </span>
            </div>
          </div>
        </Carousel>
      </main>
    </>
  );
}
