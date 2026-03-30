import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto p-20">
        <div className="flex flex-wrap gap-15 items-center justify-between ">
          <div className="space-y-4">
            <h3 className="text-4xl font-semibold">DigiTools</h3>
            <p>
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter
              <br />
              with our suite of powerful tools.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <a className="text-sm" href="">
                Product
              </a>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Templates</a>
              <a href="">Integrations</a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2 ">
              <a className="text-sm" href="">
                Company
              </a>
              <a href="">About</a>
              <a href="">Blog</a>
              <a href="">Careers</a>
              <a href="">Press</a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <a className="text-sm" href="">
                Resources
              </a>
              <a href="">Documentation</a>
              <a href="">Help Center</a>
              <a href="">Community</a>
              <a href="">Contact</a>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xl ">Social Links</p>
            <ul
              className="flex gap-5 items-center
            "
            >
              <li>
                <a href="">
                  <FaLinkedin className="text-3xl"></FaLinkedin>
                </a>
              </li>
              <a href="">
                <FaFacebook className="text-3xl"></FaFacebook>
              </a>
              <a href="">
                <FaTwitter className="text-3xl"></FaTwitter>
              </a>
            </ul>
          </div>
        </div>
        <div className="mt-10 space-y-7">
          <hr className="text-white/30" />
          <div className="flex flex-wrap gap-5 items-center justify-between text-white/80">
            <p>© 2026 Digitools. All rights reserved.</p>
            <ul className="flex gap-7 ">
              <li>Privacy Policy </li>

              <li>Terms of Service</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
