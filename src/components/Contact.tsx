import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const Contact: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      <div className="mt-20 xl:ml-[11vw] 2xl:ml-[9vw]">
        <h2 className="ml-5 mb-8 text-4xl font-bold text-purple-700 sm:ml-8 sm:text-6xl lg:ml-12 lg:text-7xl">
          Contact me
        </h2>
        <div className="mx-8 text-white sm:mx-12 lg:mx-14 xl:mx-16">
          <p>
            I&apos;m interested in working with new and passionate teams and
            individuals. I would love be a part of your team for any small or
            big project.
          </p>
          <p>
            However, If you have any other request/task or any other question,
            Feel free to contact me!
          </p>
        </div>
        <div className="mx-8 mt-10 sm:mx-12 lg:mx-14 xl:mx-16">
          <form className="text-[#838383]">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
            />
            <textarea
              name="message"
              id="message"
              cols={25}
              rows={8}
              placeholder="Message"
              className="w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
            ></textarea>
          </form>
          <button className="float-right mt-8 mb-10 w-1/2 border border-purple-400 px-2 py-1.5 font-medium tracking-wider text-purple-400 sm:px-10 sm:py-2 sm:text-lg sm:tracking-tight lg:px-12 xl:tracking-wider">
            Send message!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
