import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const About: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div>
      <div className="xl:ml-[11vw] 2xl:ml-[9vw] mt-20">
        <h2 className="text-4xl text-purple-700 font-bold ml-5 mb-8 sm:text-6xl sm:ml-8 lg:ml-12 lg:text-7xl">
          About ME
        </h2>
        <div className="mx-8 sm:mx-12 lg:flex lg:items-center lg:justify-between lg:mx-14 xl:mx-16">
          <div className="text-white lg:w-2/3 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, eos. Beatae hic, sapiente sunt quis animi eveniet
              libero eligendi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nemo temporibus earum aut cupiditate doloribus, id quaerat itaque
              accusantium architecto facilis consectetur praesentium doloremque
              sed dolorem provident asperiores incidunt deserunt ea reiciendis
              dolor? Non dolorum blanditiis reprehenderit itaque assumenda nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              optio error minus repudiandae facilis voluptatibus.
            </p>
          </div>
          <div className="grid grid-cols-3 text-center gap-3 mt-10">
            <span className="py-1 px-2 bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0]">
              Javascript
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed]">
              ReactJS
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
              NextJS
            </span>
            <span className="py-1 text-white px-2 bg-gradient-to-r from-[#42275a] to-[#734b6d]">
              CSS
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
              Tailwind CSS
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#de6262] to-[#ffb88c]">
              Redux/Recoil
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#06beb6] to-[#48b1bf]">
              TypeScript
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#eb3349] to-[#f45c43]">
              NodeJS
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#dd5e89] to-[#f7bb97]">
              ExpressJS
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#56ab2f] to-[#a8e063]">
              Mongodb
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#614385] to-[#516395]">
              Firebase
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#eecda3] to-[#ef629f]">
              SQL
            </span>
            <span className="py-1 px-2 bg-gradient-to-r from-[#7b4397] to-[#dc2430]">
              C++
            </span>
            <span className="py-1 text-white px-2 bg-gradient-to-r from-[#000428] to-[#004e92]">
              Python
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
