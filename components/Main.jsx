/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Typical from "react-typical";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            TO CHALIYE SHURU KARTE HAI BINA KISI BAKCHODI KE
          </p>
          <h1 className="py-4 text-gray-700">
            Hey There, It's{" "}
            <span className="text-[#FF8637]">Jay Prajapati</span>
          </h1>
          <h1>
            <Typical
              steps={["A Developer", 3000, "An Artist", 3000, "A Designer", 3000]}
              loop={Infinity}
            />
          </h1>

          {/* <h1>Developer Artist Designer</h1> */}
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a 4th year Bachelors of Engineering Student in Information
            Technology at Sardar Vallabhbhai Patel Institute of Technology,
            Vasad. I’m seeking an opportunity to discover the professional world
            that I want to integrate into after my studies.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-6">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <a
                href="https://www.linkedin.com/in/jay-prajapati-8095721a2/"
                target="blank"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <a href="https://github.com/mysteriousmaster01" target="blank">
                <FaGithub size={30} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <a href="mailto:jayprajapati2101@gmail.com" target="blank">
                <AiOutlineMail size={30} />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <a href="tel:+916351151815" target="blank">
                <BsFillPersonLinesFill size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
