import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="mx-12 md:h-full mb-10 md:my-20 md:mx-48">
      <div className="hidden w-full md:flex justify-center my-20 heading">
        <span className="text-[#403D3B] mr-2">About </span>
        <span className="text-[#99A19B]"> Art of Body</span>
      </div>
      <div className=" flex md:grid xl:grid-cols-2 md:grid-cols-1 justify-center w-full">
        <div className="hidden md:flex">
          <Image
            src="/images/home-1.png"
            height={1080}
            width={1920}
            alt="/"
            className="max-w-[1920px] max-h-[1080px] object-contain"
            layout="0"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
        <div className="md:bg-white">
          <div className="text-center md:text-left lg:my-24 lg:mx-32 md:my-10 md:mx-10">
            <p className="my-5 md:my-6">
              <b>Art of body</b> is a boutique Pilates studio in La Lucia
              providing personalized Pilates sessions.{" "}
            </p>
            <p className="my-5 md:my-6">
              When arriving for your session you will be welcomed into an
              inviting space set up to help you focus and be free of any
              distractions.{" "}
            </p>
            <p className="my-5 md:my-6">
              At Studio A, the philosophy is about reaching your goals through
              focused movement. Every session is tailored around your specific
              needs.
            </p>
            <p className="my-5 md:my-6">
              The studio has the latest BASI Systems Pilates equipment, and
              offers one-on-one and duo mat and equipment sessions, as well as
              private mat classes for small groups.
            </p>

            <p className="my-5 md:my-6">
              If you have a clear goal of improving your life through movement,
              this is the right place for you!{" "}
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#99A19B] py-3 px-6 text-white text-xl font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
