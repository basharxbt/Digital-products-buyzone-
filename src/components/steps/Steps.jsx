import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { LiaUserSolid } from "react-icons/lia";
import box from "../../assets/package.png";
import { LuRocket } from "react-icons/lu";

const Steps = () => {
  return (
    <div className="container mx-auto text-center my-30 bg-base-200 rounded-2xl p-20">
      <h2 className="text-4xl font-semibold ">Get Started in 3 Steps</h2>
      <p>Start using premium digital tools in minutes, not hours.</p>
      <div className="flex flex-wrap justify-around items-center my-10 gap-10">
        <div>
          <div className="p-15 shadow-2xl flex flex-col justify-center items-center gap-4  hover:-translate-y-2 transition-all duration-300 mt-4">
            <div className="flex justify-end text-right w-full">
              <div className="flex items-center justify-center rounded-full bg-purple-700 w-10 h-10 ">
                <p className="text-white font-medium justify-end">01</p>
              </div>
            </div>
            <LiaUserSolid className="text-purple-500 text-8xl bg-purple-100 p-3  rounded-full"></LiaUserSolid>
            <h4 className="font-semibold text-2xl">Create Account</h4>
            <p className="text-neutral-600">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>
        <div>
          <div className="p-15 shadow-2xl flex flex-col justify-center items-center gap-4  hover:-translate-y-2 transition-all duration-300 mt-4">
            <div className="flex justify-end text-right w-full">
              <div className="flex items-center justify-center rounded-full bg-purple-700 w-10 h-10 ">
                <p className="text-white font-medium justify-end">02</p>
              </div>
            </div>
            <img
              className="w-20 bg-purple-100 p-3  rounded-full"
              src={box}
              alt=""
            />
            <h4 className="font-semibold text-2xl">Choose Products</h4>
            <p className="text-neutral-600">
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
          </div>
        </div>

        <div>
          <div className="p-15 shadow-2xl flex flex-col justify-center items-center gap-4  hover:-translate-y-2 transition-all duration-300 mt-4">
            <div className="flex justify-end text-right w-full">
              <div className="flex items-center justify-center rounded-full bg-purple-700 w-10 h-10 ">
                <p className="text-white font-medium justify-end">03</p>
              </div>
            </div>

            <LuRocket className="text-purple-500 text-8xl bg-purple-100 p-3  rounded-full"></LuRocket>
            <h4 className="font-semibold text-2xl">Start Creating</h4>
            <p className="text-neutral-600">
              Download and start using your premium <br />
              tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
