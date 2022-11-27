import { send } from "emailjs-com";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { failAlertState, successAlertState } from "../core/atoms/atom";
import FailAlert from "../lib/alerts/FailAlert";
import SuccessAlert from "../lib/alerts/SuccessAlert";

interface Props {}

const Contact: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailSuccess, setEmailSuccess] = useRecoilState(successAlertState);
  const [emailErr, setEmailErr] = useRecoilState(failAlertState);
  const [emailSendLoading, setEmailSendLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setEmailSendLoading(true);
    e.preventDefault();
    send("service_5uhuh3v", "template_xxfdz8n", toSend, "PAssZ8EvULY9rCGNR")
      .then((response) => {
        setEmailSuccess(true);
        setEmailSendLoading(false);
        // console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setEmailErr(true);
        setEmailSendLoading(false);
        // console.log("FAILED...", err);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {emailSuccess ? <SuccessAlert /> : null}
      {emailErr ? <FailAlert /> : null}
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
          <form onSubmit={onSubmit} className="text-[#a7a6a6]">
            <div className="sm:flex sm:items-center sm:space-x-3">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                value={toSend.name}
                required
                className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={toSend.email}
                required
                className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              onChange={handleChange}
              value={toSend.subject}
              className="mb-3 w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
            />
            <textarea
              name="message"
              id="message"
              cols={25}
              rows={8}
              placeholder="Message"
              required
              onChange={handleTextAreaChange}
              value={toSend.message}
              className="w-full bg-[#2b2b2b] py-3 px-4 outline-none placeholder:font-medium placeholder:text-[#515151] focus:border-b-2 focus:border-purple-500"
            ></textarea>
            <button
              type="submit"
              className="float-right mt-8 mb-10 w-1/2 border border-purple-400 px-2 py-1.5 font-medium tracking-wider text-purple-400 sm:px-10 sm:py-2 sm:text-lg sm:tracking-tight lg:px-12 xl:tracking-wider"
            >
              {emailSendLoading ? "Sending..." : "Send message!"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
