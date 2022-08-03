import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[140px] bg-white/90 opacity-75">
      <div className="md:mx-20 flex justify-between h-full">
        <div className="flex h-full items-center">
          <Image src="/images/logo.png" width={150} height={150} alt=""></Image>
        </div>
        <div>
          <ul className="hidden md:flex h-full space-x-5 items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          className="flex md:hidden h-full mr-5 items-center z-10"
          onClick={handleNav}
        >
          {!nav ? (
            <MenuAlt1Icon width={30} height={30} />
          ) : (
            <XIcon width={30} height={30} />
          )}
        </div>
        <div
          onClick={handleNav}
          className={
            !nav
              ? "hidden"
              : "absolute flex flex-col w-full h-screen px-4 py-7 left-0 top-0 bg-gray-100/90 text-black"
          }
        >
          <h1>BEACHES.</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
