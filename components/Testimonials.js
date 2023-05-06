import {
  Button,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

export default function Testimonials() {
  const pic1 = faker.internet.avatar();
  const pic2 = faker.internet.avatar();
  const pic3 = faker.internet.avatar();
  const name1 = faker.name.fullName();
  const name2 = faker.name.fullName();
  const name3 = faker.name.fullName();

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
              <FiChevronLeft className="text-4xl" />
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
              <FiChevronRight className="text-4xl" />
            </IconButton>
          )}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          className="rounded-xl -z-10 sm:pb-10"
        >
          {/* user 1 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={pic1}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{name1}</span>
              <span className="text-center text-sm">
                "From pickup to baggage retrieval, everything went smooth"
              </span>
            </div>
          </div>
          {/* user 2 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={pic2}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{name2}</span>
              <span className="text-center text-sm">
                "They offer top-notch service at an affordable price."
              </span>
            </div>
          </div>
          {/* user 3 */}
          <div className=" h-full flex flex-col items-center justify-center w-full">
            <div className="bg-black bg-opacity-10 shadow-md flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={pic3}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{name3}</span>
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
