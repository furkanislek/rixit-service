import React from "react";

const Strategies = () => {
  return (
    <div className="container mx-auto  bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-24 flex flex-col">
      <div className="text-gray-200 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight">
        {`Strategies for Diagnosing and Repairing  `}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="basis-full sm:basis-[99%] lg:basis-[48%] lg:max-w-[48%] py-4 text-center lg:text-left">
          <div className="text-l sm:text-xl md:text-xl lg:text-xl py-4 text-white">
            {`Smartphone Repair Services`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-l py-4 text-[#7E798B]">
            <p className="font-light">
              We specialize in quick and relia smartphone repair service
              covering everything from cracked screens and battery replacements
              to software troubleshooting and water
            </p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="text-l sm:text-xl md:text-xl lg:text-xl py-4 text-white">
            {`Laptop and Desktop Repair`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-l py-4 text-[#7E798B]">
            <p className="font-light">
              We specialize in quick and relia smartphone repair service
              covering everything from cracked screens and battery replacements
              to software troubleshooting and water
            </p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="text-l sm:text-xl md:text-xl lg:text-xl py-4 text-white">
            {`Tablet Repair Services`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-l py-4 text-[#7E798B]">
            <p className="font-light">
              We specialize in quick and relia smartphone repair service
              covering everything from cracked screens and battery replacements
              to software troubleshooting and water
            </p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="text-l sm:text-xl md:text-xl lg:text-xl py-4 text-white">
            {`Wearable Device Repair`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-l py-4 text-[#7E798B]">
            <p className="font-light">
              We specialize in quick and relia smartphone repair service
              covering everything from cracked screens and battery replacements
              to software troubleshooting and water
            </p>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        <div className="basis-full sm:basis-[50%] lg:basis-[48%] lg:max-w-[48%] flex items-center justify-center">
          <img
            src="strategies.svg"
            alt="Repair Service"
            className="w-auto h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
