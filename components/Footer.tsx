import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div
      className="bg-black p-10 flex flex-col sm:flex-row gap-3 w-screen sm:gap-10 lg:gap-0 text-white"
      id="footer"
    >
      <div className="flex flex-col justify-between sm:w-1/3 gap-1">
        <a href="/" className="text-2xl sm:text-3xl font-poppins">
          Meskolabs
        </a>
        <div className="flex gap-5 text-gray-500 text-xs">
          <a
            href="https://x.com/meskolabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/meskolabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/meskolabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:w-2/4 font-poppins">
        <p className="text-lg sm:text-xl">Contact Us</p>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-0 justify-between md:w-full">
          <div className="flex flex-col gap-3 leading-7">
            <div>
              <p>Email:</p>
              <a href="mailto:meskolabs@gmail.com">meskolabs@gmail.com</a>
            </div>
            <div>
              <p>Phone:</p>
              <a href="tel:7720076457">7720076457</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 leading-7">
            <div>
              <p>LinkedIn:</p>
              <a
                href="https://www.linkedin.com/company/meskolabs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/meskolabs
              </a>
            </div>
            <div>
              <p>Instagram:</p>
              <a
                href="https://www.instagram.com/meskolabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                @meskolabs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
