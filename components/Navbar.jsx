import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import progressBar from "../hooks/progressBar";
import useDarkMode from "../components/useDarkMode";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const completion = progressBar();

  useEffect(() => {
    if (router.asPath === "/portfolio" || router.asPath === "/logister") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-16 shadow-xl z-[100] dark:bg-black/30"
          : "fixed w-full h-16 z-[100] dark:bg-black/30"
      }
    >
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-[#F57B2C] h-1 w-full"
      />
      <div className="flex justify-between items-center w-full h-full m-auto px-4 2xl:px-10">
        <div className="">
        <Image
              src="/../public/assets/Profile.png"
              alt="/"
              width="55"
              height="55"
            />
          {/* {renderThemeChanger()} */}
          {/* {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-200"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-900"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )} */}
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div id="menu" onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        {/* <div className="lg:show"> 
        <Link href="/">
            <Image
              src="/../public/assets/Logo.png"
              alt="/"
              width="60"
              height="60"
            />
          </Link>
          </div> */}
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      ></div>
      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-[60%] sm:w-[50%] md:w-[45%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/Logo.png"
              alt="/"
              width="75"
              height="75"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-400">
            <p className="h-full mt-2">Lets Develop the World Together</p>
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="uppercase">
            <Link href="/">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:font-bold ease-in duration-200"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:font-bold ease-in duration-200"
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:font-bold ease-in duration-200"
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:font-bold ease-in duration-200"
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:font-bold ease-in duration-200"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="pt-10">
            <p className="uppercase tracking-widest text-[#F57B2C]">
              Connect With Me
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
    </div>
  );
};

export default Navbar;
