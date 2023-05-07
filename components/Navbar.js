import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import lock from "@/assets/lock.png";
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  //  ? temporary

  const user = true;
  const role = "admin";

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-4 pl-5 py-4 fixed w-full z-30 md:bg-opacity-10 bg-white md:backdrop-blur-lg ${
          scrollY > 100 ? "shadow-lg" : null
        }  top-0`}
      >
        <section className="flex items-center justify-between">
          {/* logo div */}
          <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-0">
              <Image src={lock} width={40} />
              <span className=" text-orange-500 text-2xl sm:px-2 py-1 font-bold">
                <span className="text-[#335264]">LockIt</span>Up
              </span>
            </div>
          </Link>
          {/* navigation */}
          <ul
            className={`hidden sm:flex text-gray-600 ${
              scrollY > 0 && "text-orange-500"
            } font-semibold space-x-8 items-center`}
          >
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-gray-600">
              <Link href="/">HOME</Link>
            </li>

            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-gray-600">
              <Link href="/plans">PLANS & PRICING</Link>
            </li>
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-gray-600">
              <ScrollLink
                className="font-extrabold"
                onClick={() => setOpenMenu(false)}
                to="support"
                smooth={true}
                duration={1000}
              >
                SUPPORT
              </ScrollLink>{" "}
            </li>
            <li className=" hover:scale-105 transition transform duration-400 ease-in-out hover:text-gray-600">
              <Link href="#">ABOUT</Link>
            </li>
          </ul>
          {/*mobile menu section */}
          <section className="sm:hidden flex relative text-[22px]">
            {!openMenu ? (
              <div onClick={() => setOpenMenu(true)} id="">
                <AiOutlineMenu className="text-4xl text-gray-500" />
              </div>
            ) : null}
            <AnimatePresence>
              {openMenu && (
                <motion.ul
                  key="box"
                  exit={{ x: "100vw" }}
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  className=" font-semibold space-x-8
            justify-evenly h-screen fixed flex flex-col top-0 right-0 pl-10 w-[330px] bg-black bg-opacity-10 backdrop-blur-lg z-50 text-gray-900"
                >
                  <div
                    className="absolute top-4 right-2 bg-transparent"
                    onClick={() => setOpenMenu(false)}
                    id=""
                  >
                    <MdClose className="text-gray-600 text-5xl bg-transparent" />
                  </div>
                  <li className="bg-transparent ml-8 flex active:scale-105 items-start space-x-3 transition transform duration-400 ease-in-out">
                    <AiFillHome className="text-2xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      className="bg-inherit font-extrabold text-lg"
                      href="/"
                    >
                      HOME
                    </Link>
                  </li>

                  <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <AiFillDollarCircle className="text-3xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      href="/plans"
                      className="font-extrabold text-lg"
                    >
                      PLANS & PRICING
                    </Link>
                  </li>
                  <li className="flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <BiSupport className="text-3xl" />

                    <ScrollLink
                      className="font-extrabold text-lg"
                      onClick={() => setOpenMenu(false)}
                      to="support"
                      smooth={true}
                      duration={1000}
                    >
                      SUPPORT
                    </ScrollLink>
                  </li>

                  <li className="bg-transparent flex items-center space-x-3 active:scale-105 transition transform duration-400 ease-in-out">
                    <FaQuestion className="text-2xl" />
                    <Link
                      onClick={() => setOpenMenu(false)}
                      className="bg-inherit font-extrabold text-lg"
                      href="#"
                    >
                      ABOUT
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
