import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto  bg-custom-radial px-4 sm:px-8 md:px-16 lg:px-[10vw] xl:px-20vw py-24 flex flex-col">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-gray-200 text-left text-m sm:text-lg md:text-xl lg:text-2xl font-semibold  leading-tight">
            Join our newsletter to keep up to date with us!
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row">
          <input
            type="email"
            id="email"
            className="bg-transparent border border-white text-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2 mr-5 mt-5 xl:mt-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email address"
          />
          <button className="bg-white rounded-full p-3 w-12 h-12 px-12 flex items-center justify-center mt-5 xl:mt-0 mx-auto">
            <span className="text-md font-semibold text-[#2d1256]">
              Subscribe
            </span>
          </button>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-400 border-0 dark:bg-gray-400 mt-16" />
    </div>
  );
};

export default Contact;
