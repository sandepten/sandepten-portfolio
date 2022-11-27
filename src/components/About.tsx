import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const About: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
  return (
    <div>
      <div className="mt-20 xl:ml-[11vw] 2xl:ml-[9vw]">
        <h2 className="ml-5 mb-8 text-4xl font-bold text-purple-700 sm:ml-8 sm:text-6xl lg:ml-12 lg:text-7xl">
          About me
        </h2>
        <div className="mx-8 sm:mx-12 lg:mx-14 lg:flex lg:items-center lg:justify-between xl:mx-16">
          <div className="space-y-4 text-white lg:w-2/3">
            <p>
              The Covid Lockdown changed the life of many people but for me it
              gave a chance to get to know what I really love and that was Web
              development and programming.
            </p>
            <p>
              Since then, I have given most of my time to learn a lot of
              essential skills required to become a full stack web developer. I
              really love making complex and beautiful UI on the frontend &
              Working with Multiple APIs, database integration and queries,
              authentication systems on the backend. I have worked on multiple
              projects on both the front & backend of the application.
            </p>
            <p>
              Currently I am looking for new opportunities and if you want me to
              work with you, contact me below!
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center md:grid-cols-4 [&>*]:rounded-2xl">
            <span className="bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0] py-1 px-2">
              Javascript
            </span>
            <span className="bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] py-1 px-2">
              ReactJS
            </span>
            <span className="bg-gradient-to-r from-[#cc2b5e] to-[#753a88] py-1 px-2 text-white">
              NextJS
            </span>
            <span className="bg-gradient-to-r from-[#42275a] to-[#734b6d] py-1 px-2 text-white">
              CSS
            </span>
            <span className="bg-gradient-to-r from-[#614385] to-[#516395] py-1 px-2 text-white">
              Tailwind
            </span>
            <span className="bg-gradient-to-r from-[#de6262] to-[#ffb88c] py-1 px-2">
              Recoil
            </span>
            <span className="bg-gradient-to-r from-[#06beb6] to-[#48b1bf] py-1 px-2">
              TypeScript
            </span>
            <span className="bg-gradient-to-r from-[#eb3349] to-[#f45c43] py-1 px-2">
              NodeJS
            </span>
            <span className="bg-gradient-to-r from-[#dd5e89] to-[#f7bb97] py-1 px-2">
              ExpressJS
            </span>
            <span className="bg-gradient-to-r from-[#56ab2f] to-[#a8e063] py-1 px-2">
              Mongodb
            </span>
            <span className="bg-gradient-to-r from-[#614385] to-[#516395] py-1 px-2 text-white">
              Firebase
            </span>
            <span className="bg-gradient-to-r from-[#000428] to-[#004e92] py-1 px-2 text-white">
              Python
            </span>
            <span className="bg-gradient-to-r from-[#eecda3] to-[#ef629f] py-1 px-2">
              SQL
            </span>
            <span className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] py-1 px-2 text-white">
              C++
            </span>
            <span className="bg-gradient-to-r from-[#7b4397] to-[#dc2430] py-1 px-2 text-white">
              Redux
            </span>
            <span className="hidden bg-gradient-to-r from-[#000428] to-[#004e92] py-1 px-2 text-white md:inline">
              Linux
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
