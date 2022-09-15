import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="p-4 bg-black/90 shadow flex items-center justify-between md:p-6 dark:bg-gray-800">
        <p className="text-white">Jay Prajapati</p>
        <span className="text-sm text-white sm:text-center">
          © 2022{" "}
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
