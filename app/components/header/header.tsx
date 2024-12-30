import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-12 flex flex-col">
      <div className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center leading-tight">
        {`Techniques Restoring\n Device Functionality`}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="basis-full sm:basis-[50%] lg:basis-[31%] lg:max-w-[33%] py-4 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 text-myTextColor">
            {`Smartphone Repair Services`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-xl py-4 text-myTextColor">
            <p className="font-light">
              <span className="font-bold underline">
                Specialize in quick and reliable smartphone repair services
              </span>{" "}
              covering everything from screen battery replacements to software
              troubleshooting.
            </p>
          </div>
          <div className="py-4">
            <button className="rounded-full px-6 sm:px-8 md:px-12 lg:px-16 border bg-myTextColor text-background py-3 sm:py-4 hover:bg-gray-200 transition-all">
              Repair Now
            </button>
          </div>
        </div>

        <div className="basis-full sm:basis-[50%] lg:basis-[31%] lg:max-w-[33%] py-4 flex items-center justify-center">
          <img
            src="repair.svg"
            alt="Repair Service"
            className="w-full h-auto max-w-none lg:max-w-[300px] xl:max-w-[400px]"
          />
        </div>

        <div className="basis-full sm:basis-[50%] lg:basis-[31%] lg:max-w-[33%] py-4 space-y-8 text-center lg:text-left">
          <div>
            <div className="text-5xl sm:text-6xl lg:text-8xl py-4 text-myTextColor">
              {`54M +`}
            </div>
            <p className="font-light text-sm sm:text-base lg:text-lg text-myTextColor">
              Whether your laptop or desktop is overheating or experiencing
              hardware issues.
            </p>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl lg:text-8xl py-4 text-myTextColor">
              {`8M +`}
            </div>
            <p className="font-light text-sm sm:text-base lg:text-lg text-myTextColor">
              From screen replacements to tablet repair services, we cover all
              major brands and models.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="basis-full sm:basis-[50%] lg:basis-[31%] lg:max-w-[33%] py-4 flex items-center justify-center">
          <img
            src="computer.svg"
            alt="Repair Service"
            className="w-full h-auto max-w-none lg:max-w-[300px] xl:max-w-[400px]"
          />
        </div>
        <div className="basis-full sm:basis-[50%] lg:basis-[31%] lg:max-w-[33%] py-4 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 text-myTextColor">
            {`Laptop and Desktop Repair`}
          </div>
          <div className="text-m sm:text-m md:text-l lg:text-xl py-4 text-myTextColor">
            <p className="font-light">
              <span className="font-bold underline">
                Specialize in quick and reliable smartphone repair services
              </span>{" "}
              covering everything fro screen battery replacements to software
              troubleshooting.
            </p>
          </div>
          <div className="py-4">
            <button className="rounded-full px-6 sm:px-8 md:px-12 lg:px-16 border bg-myTextColor text-background py-3 sm:py-4 hover:bg-gray-200 transition-all">
              Repair Now
            </button>
          </div>
        </div>
        <img
          src="text-repair.svg"
          alt="Repair Service"
          className="w-full h-auto max-w-none lg:max-w-[300px] xl:max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default Header;
