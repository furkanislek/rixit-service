import React from "react";

const Diagnosing = () => {
  return (
    <div className="container mx-auto bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-12 flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="bg-linear-gradient rounded-xl p-6 md:p-8 lg:p-12 text-center md:text-left max-w-md">
          <h2 className="text-5xl font-bold text-white">54M+</h2>
          <p className="text-[#B1A7C8] mt-4">
            We specialize in quick and reliable smartphone repair service cover
            everything from cracked screens and battery.
          </p>
          <div className="mt-6">
            <button className="bg-[#B285F7] rounded-full p-3 w-12 h-12 flex items-center justify-center">
              <span className="text-xl text-white">→</span>
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:ml-12 text-center md:text-right">
          <button className="bg-[#B285F7] text-white text-sm px-6 py-2 rounded-full">
            Services Diagnosing and Repairing
          </button>
          <h1 className="text-gray-200 py-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight text-right">
            Strategies for Diagnosing and Repairing
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Smartphone Repair Services
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Laptop and Desktop Repair
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Tablet Repair Services
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Wearable Device Repair
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Gaming Console Repair
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Drone Repair Services
          </h3>
          <p className="text-[#B1A7C8] mt-2 font-light">
            We specialize in quick and reliable smartphone repair service
            covering everything from cracked screens and battery replacements to
            software troubleshooting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diagnosing;
