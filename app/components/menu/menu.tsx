import { Work_Sans } from "next/font/google";
import Image from "next/image";

const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });

export default function Menu() {
  return (
    <div className="px-12 lg:px-36 py-8 ml-auto bg-custom-bg flex justify-between">
      <Image src="logo.svg" alt="My SVG Image" width="45" height="45" />
      <div className="flex justify-around">
        <button
          className={`text-myTextColor mr-8  ${workSans.className} `}
          title="Home"
        >
          <h5>Home</h5>
        </button>
        <button
          className={`text-myTextColor mr-8 ${workSans.className} `}
          title="About Us"
        >
          <h5>About Us</h5>
        </button>
        <button
          className={`text-myTextColor mr-8 ${workSans.className} `}
          title="Services"
        >
          <h5>Services</h5>
        </button>
        <button
          className={`text-myTextColor mr-8 ${workSans.className} `}
          title="Page"
        >
          <h5>Page</h5>
        </button>
      </div>
      <div>
        <button className="bg-transparent text-gray-300 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-700 hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </div>
  );
}
