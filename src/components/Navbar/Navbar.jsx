import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="font-assistant flex items-center lg:flex-grow justify-between p-6">
        <div className="flex text-base lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4  lg:mt-0 hover:text-mustard mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4  lg:mt-0 hover:text-mustard mr-4"
          >
            Animal
          </a>
          <a
            href="#responsive-header"
            className="block mt-4  lg:mt-0 hover:text-mustard mr-4"
          >
            Visit
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:mt-0 hover:text-mustard mr-4"
          >
            Donate
          </a>
          <a
            href="#responsive-header"
            className="block mt-4  lg:mt-0 hover:text-mustard"
          >
            About Us
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
