import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";

interface Props {}

const Work: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div>
      <div className="xl:ml-[11vw] 2xl:ml-[9vw]">
        <h2 className="ml-5 mb-8 text-4xl font-bold text-purple-700 sm:ml-8 sm:text-6xl lg:ml-12 lg:text-7xl">
          My Portfolio
        </h2>
        <div className="mx-8 sm:mx-12 lg:mx-14 lg:flex lg:items-center lg:justify-between xl:mx-16">
          <div className="text-white lg:w-2/3">
            <p>
              This a small gallery of all the projects done by me. All of them
              took a lot inspiration and learning a lot of things in the way. I
              want to increase this list of infinity by working with a lot of
              amazing companies and people
            </p>
            <p className="mt-1">
              Interested in more? Visit{" "}
              <span className="cursor-pointer text-purple-500 hover:underline">
                my work
              </span>{" "}
              page.
            </p>
          </div>
          <div>
            <button className="mt-7 border border-purple-400 px-6 py-1.5 font-medium tracking-widest text-purple-400 sm:px-10 sm:py-2 sm:text-lg lg:mt-0 lg:px-12">
              See more!
            </button>
          </div>
        </div>
      </div>
      <div className="grid-flow-row-2 mt-16 grid grid-cols-2 sm:mt-20 xl:ml-[10vw] 2xl:ml-[8vw]">
        <img
          src="/projects/sanflix/sanflix-dashboard.png"
          alt="Netflix clone dashboard"
          // layout="fill"
          // objectFit="contain"
          className="object-contain"
        />
        <img
          src="/projects/biowear/biowear-dashboard.png"
          alt="Netflix clone dashboard"
          className="object-contain"
        />
        <img
          src="/projects/atg-world/atg-world-dashboard.png"
          alt="Netflix clone dashboard"
          className="object-contain"
        />
        <img
          src="/projects/sanflix/sanflix-dashboard.png"
          alt="Netflix clone dashboard"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Work;
