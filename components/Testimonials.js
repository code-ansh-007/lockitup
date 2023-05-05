import { Carousel, IconButton } from "@material-tailwind/react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Testimonials() {
  const pic1 = faker.internet.avatar();
  const pic2 = faker.internet.avatar();
  const pic3 = faker.internet.avatar();
  const name1 = faker.name.fullName();
  const name2 = faker.name.fullName();
  const name3 = faker.name.fullName();
  return (
    <>
      <main className="mt-10 flex flex-col items-center space-y-5">
        <span className="text-3xl font-extrabold text-center">
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
              <div></div>
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
              <div></div>
            </IconButton>
          )}
          autoplay={true}
          loop={true}
          autoplayDelay={3000}
          className="rounded-tl-2xl  rounded-br-2xl bg-gradient-to-r from-blue-100 to-blue-800 py-4"
        >
          {/* user 1 */}
          <div className=" h-[300px] flex flex-col items-center justify-center w-[300px] ml-[8vw]">
            <div className="bg-white bg-opacity-30 shadow-xl flex flex-col items-center p-8 rounded-xl space-y-2">
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
          <div className=" h-[300px] flex flex-col items-center justify-center w-[300px] ml-[8vw]">
            <div className="bg-white bg-opacity-30 shadow-xl flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={pic2}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{name2}</span>
              <span className="text-center text-sm">
                "The luggage was in pristine condition when i returned from
                home. Thanks!"
              </span>
            </div>
          </div>
          {/* user 3 */}
          <div className=" h-[300px] flex flex-col items-center justify-center w-[300px] ml-[8vw]">
            <div className="bg-white bg-opacity-30 shadow-xl flex flex-col items-center p-8 rounded-xl space-y-2">
              <Image
                src={pic3}
                width={100}
                height={100}
                alt="user-pic"
                className="rounded-full"
              />
              <span className="text-lg font-semibold">{name3}</span>
              <span className="text-center text-sm">
                "They offer top-notch service at an affordable price."
              </span>
            </div>
          </div>
        </Carousel>
      </main>
    </>
  );
}
