import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className='text-xl tracking-widest uppercase text-[#FF8637]'>Skills</p>
        <h2 className='py-4'>Technology I Familier With</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/html.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/css.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/javascript.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/react.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/node.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NODE</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/github1.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GITHUB</h3>
                    </div>
                </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-110 easein duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image
                        src="/assets/skills/nextjs.png"
                        alt="/"
                        width="64px"
                        height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NEXT JS</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
