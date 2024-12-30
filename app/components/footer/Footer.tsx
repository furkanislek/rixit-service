import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-24 flex flex-col">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="max-w-lg text-center md:text-left">
          <div className="flex flex-col lg:flex-row">
            <Image src="logo.svg" alt="My SVG Image" width="45" height="45" />
            <h1 className="text-gray-200 text-left text-xl font-semibold mt-1 ml-5 leading-tight">
              Fixit
            </h1>
          </div>
          <h1 className="text-gray-200 text-left  font-semibold mt-10 leading-tight">
            We provide comprehensi repair services for both laptops and
            desktops, including virus removal hardware
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Platform
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Company
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Resources
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Plans & Pricing
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Blog
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Documentation
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Personal AI Manager
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Careers
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-300">
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Papers
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    AI Business Writer
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    News
                  </li>
                  <li className="cursor-pointer hover:text-gray-400 transition">
                    Press Conferences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
