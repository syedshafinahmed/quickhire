import { useState } from 'react';
import Logo from '../../logo/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <NavLink
        className="text-[#515B6F] font-medium mr-4"
        to="/find-jobs"
        onClick={() => setIsOpen(false)}
      >
        Find Jobs
      </NavLink>
      <NavLink
        className="text-[#515B6F] font-medium"
        to="/browse-companies"
        onClick={() => setIsOpen(false)}
      >
        Browse Companies
      </NavLink>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto py-3.5 px-5 md:px-0 epilogue">

      <div className="flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <Logo />
          <div className="hidden md:flex">{links}</div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="hidden md:flex">
            <button className="font-bold bg-white text-[#4640DE] w-27 h-12">
              Log In
            </button>
            <button className="font-bold bg-[#4640DE] text-white w-27 h-12">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#515B6F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden">
          {links}
          <div className="flex flex-col mt-4 gap-2">
            <button className="font-bold bg-white text-[#4640DE] w-full h-12">
              Log In
            </button>
            <button className="font-bold bg-[#4640DE] text-white w-full h-12">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;