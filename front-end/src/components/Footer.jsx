import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="m-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Quote
              </span>
              Rider
            </Link>
          </div>
          <div className="m-5 grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="w-[200px] h-[120px] flex flex-col gap-4">
              <div className="mb-2">ABOUT</div>
              <div>100 JS Projects</div>
              <div>Sahand's Blog</div>
            </div>
            <div className="w-[200px] h-[120px] flex flex-col gap-4">
              <div className="mb-2">ABOUT</div>
              <div>100 JS Projects</div>
              <div>Sahand's Blog</div>
            </div>
            <div className="w-[200px] h-[120px] flex flex-col gap-4">
              <div className="mb-2">ABOUT</div>
              <div>100 JS Projects</div>
              <div>Sahand's Blog</div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[2px] bg-gray-600 m-auto mx-5" />
        <div className="flex flex-col mt-3 m-5 gap-5 sm:flex-row sm:justify-between">
          <div className="flex gap-2">
            <div className="mt-1"><FaRegCopyright /></div>
            <div>{currentYear}</div>
            <div>Sahand's Blog</div>
          </div>
          <div className="flex gap-4 mt-1">
            <BsFacebook/>
            <BsInstagram/>
            <BsTwitter/>
            <BsGithub/>
            <BsDribbble/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
