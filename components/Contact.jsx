import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="w-screen grid grid-cols-1 md:grid-cols-2 justify-center">
      <div className="md:my-28 md:mx-64">
        <div className="text-center">
          <h1 className="text-[3rem] font-semibold">Contact me</h1>
        </div>
        <div className="flex flex-col m-8 md:m-0 md:mb-8">
          <div>Tel number</div>
          <div>Address</div>
          <div>Email address</div>
        </div>
        <div className="flex flex-col m-10 md:m-0">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="my-4 md:my-0">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="appearance-none border-b-[1px] border-gray-500 bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border hover:border"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="appearance-none border-b-[1px] border-gray-500 bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border hover:border"
              />
            </div>
          </div>
          <div className="my-4">
            <input
              type="input"
              id="phone"
              name="phone"
              placeholder="phone"
              required
              className="appearance-none border-b-[1px] border-gray-500 bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border hover:border"
            />
          </div>
          <div>
            <input
              type="input"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="appearance-none border-b-[1px] border-gray-500 bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border hover:border"
            />
          </div>
          <div>
            <textarea
              type="input"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="appearance-none border-b-[1px] border-gray-500 bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border hover:border"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          src="/images/pilates-1.png"
          width={1920}
          height={1280}
          layout="responsive"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Contact;
