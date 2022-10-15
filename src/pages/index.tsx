import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Address from "../components/Address";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandeep</title>
        <meta name="description" content="This is Sandeep's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar />
        <div className="h-[65vh] lg:h-[80vh]">
          <Banner />
        </div>
        <Work />
        <About />
        <div className="lg:mr-10 lg:flex lg:items-center">
          <div className="lg:w-[70%]">
            <Contact />
          </div>
          <div className="lg:mt-[20vh] lg:w-[30%]">
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
