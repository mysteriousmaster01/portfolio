import Image from "next/image";
import React from "react";
import logisterImg from "../public/assets/projects/logister-01.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const logister = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={logisterImg}
          alt="/"
        />
        <div className="absolute top-[70%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Logistic Manager</h2>
          <h3>Asp.net / MVC / SSMS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This App Is Based On MVC architecture of ASP.NET Framework. This Framework
            Is the Very Common and Very Used Framework for Web Development.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ASP.NET
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> C#
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SSMS
              </p>              
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Microsoft SQL
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='cursor-pointer font-bold uppercase'>Back</p>
        </Link>

      </div>
    </div>
  );
};

export default logister;
