/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import contactImg from "../public/assets/Profile.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Footer from "./Footer";

const Contact = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase

  const submitData = async (event) => {
    event.preventDefault();

    const { Name, Phone, Email, Subject, Message } = userData;

    if (Name && Phone && Email && Subject && Message) {
      const res = fetch(
        "https://contact-caadc-default-rtdb.firebaseio.com/contactInfo.json",
        {
          method: "POST",
          Headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Phone,
            Email,
            Subject,
            Message,
          }),
        }
      );

      if (res) {
        setUserData({
          Name: "",
          Phone: "",
          Email: "",
          Subject: "",
          Message: "",
        });
        alert("Message Sent Succesfully");
      } else {
        alert("Please fill the data.");
      }
    } else {
      alert("Please fill the data.");
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
        <p className="text-xl tracking-widest uppercase text-[#FF8637]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch With Me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-500 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                <Image
                  className="rounded-xl hover:scale-110 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <p className="text-2xl">Front End Developer</p>
                <p className="py-4">
                  I'm available for freelance and full time positions
                </p>
              </div>
              <div className="">
                <p className="oppercase pt-8">Contact With Me Brah !</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <a
                      href="https://www.linkedin.com/in/jay-prajapati-8095721a2/"
                      target="blank"
                    >
                      <FaLinkedinIn size={30} />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <a
                      href="https://github.com/mysteriousmaster01"
                      target="blank"
                    >
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
          {/* right */}
          <div className="col-span-3 w-full shadow-xl shadow-gra-400 rounded-xl lg:p-4">
            <div className="p-4"></div>
            <form className="form" method="POST">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col mx-4">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                    name="Name"
                    placeholder="Full Name"
                    value={userData.Name}
                    onChange={postUserData}
                  />
                </div>

                <div className="flex flex-col mx-4">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="number"
                    name="Phone"
                    placeholder="Phone Number"
                    value={userData.Phone}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2 mx-4">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 border-gray-300"
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  value={userData.Email}
                  onChange={postUserData}
                />
              </div>

              <div className="flex flex-col py-2 mx-4">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 border-gray-300"
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  value={userData.Subject}
                  onChange={postUserData}
                />
              </div>

              <div className="flex flex-col py-2 mx-4">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 borger-gray-300"
                  rows="10"
                  name="Message"
                  placeholder="Enter the Message"
                  value={userData.Message}
                  onChange={postUserData}
                ></textarea>
              </div>
              <button
                className="w-full p-4 text-gray-100 mt-4 bg-[#ff4141]"
                type="submit"
                onClick={submitData}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp className="text-[#FF8637]" size={30} />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
