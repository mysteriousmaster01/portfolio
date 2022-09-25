import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#FF8637]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I m Final Year Graduate Student Lives In Anand, Gujarat.</p>
          <p className='py-2 text-gray-600'>
            I am a 4th year Bachelors of Engineering Student in Information
            Technology at Sardar Vallabhbhai Patel Institute of Technology,
            Vasad. I’m seeking an opportunity to discover the professional world
            that I want to integrate into after my studies.
          </p>
          <a href="#projects"><p className='py-2 text-gray-800 text-xl hover:text-[#FF8637]'>Check out some of my latest projects.</p></a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src="/assets/Profile.png"
            alt="/"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
