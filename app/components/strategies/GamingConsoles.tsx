import React from "react";

const GamingConsoles = () => {
  return (
    <div className="container mx-auto  bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-24 flex flex-col">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <button className="bg-[#B285F7] text-white text-sm px-6 py-2 rounded-full mb-5">
            Services Diagnosing and Repairing
          </button>
          <h1 className="text-gray-200 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight">
            Reviving Gaming Consoles Expert Techniques for Diagnosing
          </h1>
        </div>

        <div className="mt-8 md:mt-0">
          <p className="text-[#B1A7C8] mt-12 mb-2">
            Gaming consoles are complex devices that require specialized
            knowledge to repair effectively. This book offers a deep dive into
            the world of console repair, covering everything.
          </p>
          <button className="bg-[#B285F7] text-white text-lg px-6 py-3 my-2 rounded-full text-right">
            Repair Now
          </button>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        <div className="flex flex-col lg:flex-row items-center rounded-lg p-6 ">
          <div className="basis-full sm:basis-[50%] lg:basis-[20%] lg:max-w-[20%] ">
            <img
              src="list-repair.svg"
              alt="Repair Service"
              className="w-48 max-h-48  "
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Whether it’s a cracked
            </h3>
            <p className="text-[#B1A7C8] mt-2 text-sm">
              Software malfunction, our expert technicians offer fast and
              reliable smartphone repair services. We use high-quality parts to
              ensure your phone is as good as new.
            </p>
          </div>
          <div>
            <button className="bg-[#B285F7] rounded-full p-3 w-12 h-12 lg:my-0 my-12 flex items-center justify-center ml-4">
              <span className="text-xl text-white ">→</span>
            </button>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-400" />

        <div className="flex flex-col lg:flex-row items-center p-6">
          <div className="basis-full sm:basis-[50%] lg:basis-[20%] lg:max-w-[20%] ">
            <img
              src="list-repair.svg"
              alt="Repair Service"
              className="w-48 max-h-48 "
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Whether it’s a cracked
            </h3>
            <p className="text-[#B1A7C8] mt-2 text-sm">
              Software malfunction, our expert technicians offer fast and
              reliable smartphone repair services. We use high-quality parts to
              ensure your phone is as good as new.
            </p>
          </div>
          <div>
            <button className="bg-[#B285F7] rounded-full p-3 w-12 h-12 lg:my-0 my-12 flex items-center justify-center ml-4">
              <span className="text-xl text-white ">→</span>
            </button>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-400" />
        <div className="flex flex-col lg:flex-row items-center p-6">
          <div className="basis-full sm:basis-[50%] lg:basis-[20%] lg:max-w-[20%] ">
            <img
              src="list-repair.svg"
              alt="Repair Service"
              className="w-48 max-h-48 "
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Whether it’s a cracked
            </h3>
            <p className="text-[#B1A7C8] mt-2 text-sm">
              Software malfunction, our expert technicians offer fast and
              reliable smartphone repair services. We use high-quality parts to
              ensure your phone is as good as new.
            </p>
          </div>
          <div>
            <button className="bg-[#B285F7] rounded-full p-3 w-12 h-12 lg:my-0 my-12 flex items-center justify-center ml-4">
              <span className="text-xl text-white ">→</span>
            </button>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-400" />
      </div>
    </div>
  );
};

export default GamingConsoles;
