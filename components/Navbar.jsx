import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className={`md:active ${show && "md:hidden"}`}>
      <div className="w-screen h-[140px] bg-white md:bg-white/60 z-10 sticky md:fixed">
        <div className="md:mx-5 flex justify-between h-full">
          <div className="flex md:h-full items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              className=" h-[250px] md:w-[300px] rounded-full ml-2"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <div>
            <ul className="hidden md:flex md:mr-20 h-full space-x-5 items-center cursor-pointer">
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
                : "absolute flex w-full h-screen px-4 py-7 left-0 bg-[#E6E2DA]/90 top-0 text-black"
            }
          >
            <div className="my-6 w-full justify-center items-center ">
              <ul className="flex flex-col items-center w-full h-full cursor-pointer">
                <li className="my-4">Home</li>
                <li className="my-4">About</li>
                <li className="my-4">Pricing</li>
                <li className="my-4">Services</li>
                <li className="my-4">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
