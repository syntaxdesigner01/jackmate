import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white flex h-screen items-center justify-center px-4 ">
      <section className="flex flex-col md:flex-row items-center gap-4 justify-center">
        <section>
          <Image src={"/header.jpg"} alt="header" width={500} height={500} />
        </section>
        <div className="  md:w-[45%] text-center md:text-left">
          <h1 className="text-xl  font-bold text-gray-900 sm:text-5xl">
            Struggling with Math? Get Video Solutions
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Get instant answers and study guidance tailored to your curriculum.
            Learn smarter, not harder.
          </p>

          <div className="mt-4 flex justify-left gap-4 sm:mt-6">
            <a
              className="inline-block rounded bg-[#1E90FF] px-5 py-3 font-medium text-white shadow-sm transition-colors "
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
