import type { NextComponentType, NextPageContext } from "next";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useRecoilState } from "recoil";
import { dropDownState } from "../core/atoms/atom";

interface Props {}

const Banner: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [dropdown, setDropdown] = useRecoilState(dropDownState);
  return (
    <div className="ml-8 font-Open-Sans sm:ml-12 lg:ml-16 xl:ml-[15vw] 2xl:ml-[12vw]">
      <div className="xl:hidden">
        {dropdown ? (
          <IconContext.Provider
            value={{
              color: "white",
              size: "58px",
              className: "absolute top-2 right-2 bg-black p-1",
            }}
          >
            <MdClose
              onClick={() => {
                setDropdown(false);
              }}
            />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{
              color: "white",
              size: "45px",
              className: "absolute top-3 right-3 bg-black p-1",
            }}
          >
            <GiHamburgerMenu
              onClick={() => {
                setDropdown(true);
              }}
            />
          </IconContext.Provider>
        )}
      </div>

      <div className="mt-[35vh] text-5xl font-bold text-white sm:mt-[30vh] sm:text-7xl lg:mt-[22vh] lg:text-8xl 2xl:mt-[25vh]">
        <p>Hi,</p>
        <p>
          I&apos;m{" "}
          <span className="text-6xl font-extrabold text-purple-700 sm:text-8xl lg:text-9xl">
            S
          </span>
          andeep
        </p>
        <p>web developer</p>
      </div>
      <div>
        <p className="mt-6 text-sm text-gray-400 sm:text-lg md:tracking-widest">
          Full Stack Developer / Nodejs Engineer
        </p>
      </div>
      <div>
        <button className="mt-10 border border-purple-400 px-6 py-1.5 font-medium tracking-widest text-purple-400 sm:px-10 sm:py-2 sm:text-lg lg:px-12">
          Contact me!
        </button>
      </div>
    </div>
  );
};

export default Banner;
