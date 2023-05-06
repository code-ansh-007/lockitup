import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <main className="flex text-sm flex-col space-y-2 items-center space-x-4 justify-center p-2 border-t border-gray-400">
      <div>hello</div>
      <div className="">Made with 💌 by Ansh Pradhan</div>
      <div className="underline">Visit Social Links</div>
      <div className="flex items-center space-x-5">
        <Link href="https://github.com/code-ansh-007" target="_blank">
          <span className="flex items-center space-x-1">
            <BsGithub />
            <span>GitHub</span>
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ansh-pradhan-2a963818a/"
          target="_blank"
        >
          <span className="flex items-center space-x-1">
            <BsLinkedin />
            <span>LinkedIn</span>
          </span>
        </Link>
        <Link href="https://www.instagram.com/slice_of_ansh/" target="_blank">
          <span className="flex items-center space-x-1">
            <BsInstagram />
            <span>Instagram</span>
          </span>
        </Link>
      </div>
    </main>
  );
}

export default Footer;
