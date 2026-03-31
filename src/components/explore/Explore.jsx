import React from "react";

const Explore = () => {
  return (
    <div className="bg-gradient-to-r from-[#4E39F6] to-[#9514FA] text-white ">
      <div className=" py-20 px-5 flex flex-col justify-center items-center ">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-neutral-400">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>
          <div className="flex  justify-center flex-wrap gap-5">
            <button className="btn rounded-3xl text-purple-700">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-3xl">
              View Pricing
            </button>
          </div>
          <p className="text-neutral-400">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
