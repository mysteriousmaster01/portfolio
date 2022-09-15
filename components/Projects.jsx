import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/001.png";
import Projectitem from "./Projectitem";
import logisterImg from '../public/assets/projects/002.png'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-widest uppercase text-[#FF8637] ">
          Projects
        </p>
        <h2 className="py-4">Build By Me Brah!</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <Projectitem
            title="Portfolio Website"
            subtitle='NEXT JS PROJECT'
            backgroundImg={propertyImg}
            projectUrl="/portfolio"
          />
          <Projectitem
            title="Logister Manager"
            subtitle='ASP.NET PROJECT'
            backgroundImg={logisterImg}
            projectUrl="/logister"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
