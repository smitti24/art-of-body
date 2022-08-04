import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className="w-full h-[250px] md:h-screen relative">
      <div className="h-[250px] md:h-screen w-screen">
        <Image
          src="/images/pilates-1.png"
          alt="Picture of the author"
          width="100%"
          height={250}
          layout="fill"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="md:flex md:mt-[60vh] w-full absolute top-0 md:bottom-0 md:justify-center">
        <h1 className="text-2xl font-extrabold my-10 mx-6 text-white text-center justify-center md:text-8xl">
          Assess. Align. Activate
        </h1>
      </div>
    </div>
  );
}

export default Landing;
