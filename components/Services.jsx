import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div className="w-screen bg-white">
      <div className="mb-10 md:my-20 md:mx-48">
        <div className="w-full sm:flex text-center justify-center p-12 md:p-16 heading">
          <span className="text-[#403D3B] mr-2">What{"'"}s happening at </span>
          <span className="text-[#99A19B]"> Art of Body</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 justify-center text-center p-4 md:p-16">
          <div className="border-2 md:border-0 md:border-l-2">
            <div className="mt-4">
              <Image
                src="/images/studioA-77.png"
                width={256}
                height={256}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-bold text-[#403D3B] mb-2">
                Pre and Postnatal Pilates
              </h1>
              <p className="md:mx-8">
                Strengthen and heal your pelvic floor and core muscles, relieve
                back pain and muscle aches, and return to the sport you love
                safely post pregnancy.
              </p>
            </div>
            <div className="flex justify-center my-3 md:mt-10">
              <button className="bg-[#99A19B] py-2 px-5 text-white text-lg font-bold">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-2 md:border-0 md:border-l-2">
            <div className="mt-4">
              <Image
                src="/images/studioA-70.png"
                width={256}
                height={256}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-bold text-[#403D3B] mb-2">
                Athletic Conditioning
              </h1>
              <p className="md:mx-8">
                Strengthen and heal your pelvic floor and core muscles, relieve
                back pain and muscle aches, and return to the sport you love
                safely post pregnancy.
              </p>
            </div>
            <div className="flex justify-center my-3 md:mt-10">
              <button className="bg-[#99A19B] py-2 px-5 text-white text-lg font-bold">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-2 md:border-0 md:border-l-2">
            <div className="mt-4">
              <Image
                src="/images/studioA-81.png"
                width={256}
                height={256}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-bold text-[#403D3B] mb-2">
                General Strengthening
              </h1>
              <p className="md:mx-8">
                Strengthen and heal your pelvic floor and core muscles, relieve
                back pain and muscle aches, and return to the sport you love
                safely post pregnancy.
              </p>
            </div>
            <div className="flex justify-center my-3 md:mt-10">
              <button className="bg-[#99A19B] py-2 px-5 text-white text-lg font-bold">
                Book Now
              </button>
            </div>
          </div>
          <div className="border-2 md:border-0 md:border-l-2">
            <div className="mt-4">
              <Image
                src="/images/studioA-88.png"
                width={256}
                height={256}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-bold text-[#403D3B] mb-2">
                The Lyno® Method
              </h1>
              <p className="md:mx-8">
                Strengthen and heal your pelvic floor and core muscles, relieve
                back pain and muscle aches, and return to the sport you love
                safely post pregnancy.
              </p>
            </div>
            <div className="flex justify-center my-3 md:mt-10">
              <button className="bg-[#99A19B] py-2 px-5 text-white text-lg font-bold">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
