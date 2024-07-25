import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 w-full px-0 sm:px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex items-center justify-center">
        <img
          src="https://logoipsum.com/"
          alt="Your Site Name"
          className="h-8"
        />
        <p className="text-gray-600 ml-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-500">Your Site Name.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
