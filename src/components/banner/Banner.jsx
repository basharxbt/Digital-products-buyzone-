import React from "react";
import bannerimg from "../../assets/banner.png";
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse gap-5 p-5  justify-between items-center container mx-auto my-15">
        <div>
          <img src={bannerimg} alt="Banner" />
        </div>
        <div className="space-y-6 flex items-center lg:items-start  flex-col justify-center">
          <p className="bg-purple-100 rounded-4xl p-4 font-bold text-purple-800 flex gap-2 items-center w-max ">
            <FaRegDotCircle></FaRegDotCircle> New: AI-Powered Tools Available
          </p>
          <div className="">
            {" "}
            <h1 className="text-6xl text-black font-bold text-center lg:text-left ">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-neutral-500 text-center lg:text-left ">
              Access premium AI tools, design assets, templates, and
              productivity
              <br />
              software—all in one place. Start creating faster today. <br />
              Explore Products
            </p>
          </div>
          <div
            className="flex gap-4
        "
          >
            <button className="btn bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white  rounded-4xl">
              Explore Products
            </button>
            <button className="btn btn-primary btn-outline rounded-4xl">
              <CiPlay1></CiPlay1>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Ratiing Section */}

      <div className="bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white py-20 my-20">
        <div className="flex flex-col md:flex-row justify-around gap-10 container mx-auto  border-r-white">
          <div className="text-center space-y-2 ">
            <h1 className="text-7xl text-white font-bold">50K+</h1>
            <p className="text-purple-200 text-2xl">Active Users</p>
          </div>
          <div className="divider border-r-2 divider-horizontal "></div>

          <div className="text-center space-y-2">
            <h1 className="text-7xl text-white font-bold">200+</h1>
            <p className="text-purple-200 text-2xl">Premium Tools</p>
          </div>
          <div className="divider border-r-2 divider-horizontal "></div>

          <div className="text-center space-y-2">
            <h1 className="text-7xl text-white font-bold">4.9</h1>
            <p className="text-purple-200 text-2xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
