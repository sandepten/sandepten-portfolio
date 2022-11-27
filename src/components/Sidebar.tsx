import { NextComponentType } from "next";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { dropDownState } from "../core/atoms/atom";

const Sidebar: NextComponentType = () => {
  const [dropdown, setDropdown] = useRecoilState(dropDownState);
  return (
    //? This is hamburger menu for mobile view
    <div>
      {dropdown ? (
        <div className="absolute top-0 left-0 w-full overflow-hidden text-white">
          <div className="font-Open-Sans">
            <div className="flex flex-col items-center bg-black px-6 pt-14 pb-6">
              <p className="text-7xl font-bold text-purple-700">S</p>
              <p className="text-xl font-semibold">Sandeep</p>
              <p className="mt-4 text-xs tracking-widest">Web Developer</p>
            </div>
            <div className="h-[80vh] bg-[#181818] pt-[12vh]">
              <ul className="flex flex-col items-center text-center text-gray-400 [&>*]:w-screen [&>*]:border-b [&>*]:border-gray-700  [&>*]:py-4">
                <li
                  className="border-t hover:text-purple-500"
                  onClick={() => {
                    setDropdown(false);
                    window.scrollTo({ top: 1375, left: 0, behavior: "smooth" });
                  }}
                >
                  About
                </li>
                <li className="hover:text-purple-500">My Skills</li>
                <li className="hover:text-purple-500">Work</li>
                <li className="hover:text-purple-500">Blog</li>
                <li
                  className="hover:text-purple-500"
                  onClick={() => {
                    setDropdown(false);
                    window.scrollTo({ top: 2150, left: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </li>
              </ul>
              <div className="flex items-center justify-center space-x-6 pt-[18vh]">
                <a href="https://github.com/sandepten">
                  <IconContext.Provider
                    value={{
                      color: "gray",
                      size: "30px",
                      className: "hover:fill-purple-500",
                    }}
                  >
                    <AiFillGithub />
                  </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/sandepten/">
                  <IconContext.Provider
                    value={{
                      color: "gray",
                      size: "30px",
                      className: "hover:fill-purple-500",
                    }}
                  >
                    <AiFillLinkedin />
                  </IconContext.Provider>
                </a>
                <a href="https://www.instagram.com/sandepten1/">
                  <IconContext.Provider
                    value={{
                      color: "gray",
                      size: "30px",
                      className: "hover:fill-purple-500",
                    }}
                  >
                    <AiFillInstagram />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* This is sidebar for desktop view */}
      <div className="fixed top-0 left-0 hidden w-[10vw] text-white xl:block 2xl:w-[8vw]">
        <div className="font-Open-Sans">
          <div className="flex flex-col items-center bg-black px-6 pt-5 pb-6">
            <p className="text-8xl font-bold text-purple-700">S</p>
            <p className="text-xl font-semibold">Sandeep</p>
            <p className="mt-4 truncate text-xs tracking-tight 2xl:tracking-normal">
              Web Developer
            </p>
          </div>
          <div className="h-[80vh] bg-[#181818] pt-[12vh]">
            <ul className="flex flex-col items-center text-center text-gray-400 [&>*]:w-[10vw] [&>*]:cursor-pointer [&>*]:border-b [&>*]:border-gray-700/70 [&>*]:py-4  [&>*]:2xl:w-[8vw]">
              <li
                className="border-t hover:text-purple-500"
                onClick={() => {
                  window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
                }}
              >
                About
              </li>
              <li className="hover:text-purple-500">My Skills</li>
              <li className="hover:text-purple-500">Work</li>
              <li className="hover:text-purple-500">Blog</li>
              <li
                className="hover:text-purple-500"
                onClick={() => {
                  window.scrollTo({ top: 5000, left: 0, behavior: "smooth" });
                }}
              >
                Contact
              </li>
            </ul>
            <div className="flex items-center justify-center space-x-4 pt-[12vh]">
              <a href="https://github.com/sandepten">
                <IconContext.Provider
                  value={{
                    color: "gray",
                    size: "20px",
                    className: "hover:fill-purple-500",
                  }}
                >
                  <AiFillGithub />
                </IconContext.Provider>
              </a>
              <a href="https://www.linkedin.com/in/sandepten/">
                <IconContext.Provider
                  value={{
                    color: "gray",
                    size: "20px",
                    className: "hover:fill-purple-500",
                  }}
                >
                  <AiFillLinkedin />
                </IconContext.Provider>
              </a>
              <a href="https://www.instagram.com/sandepten1/">
                <IconContext.Provider
                  value={{
                    color: "gray",
                    size: "20px",
                    className: "hover:fill-purple-500",
                  }}
                >
                  <AiFillInstagram />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
