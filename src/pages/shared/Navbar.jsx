import { useContext, useState } from 'react';
import Logo from '../../logo/Logo';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: 'success',
        title: 'Logged Out!',
        text: 'You have successfully logged out.',
        timer: 2000,
        showConfirmButton: false,
      });
      navigate('/login');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed!',
        text: error.message,
      });
    }
  };

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
    <div className='bg-[#F8F8FD]/30 w-full sticky top-0 z-50 backdrop-blur-3xl border-b border-white/20'>
      <div className="max-w-7xl mx-auto py-3.5 px-5 md:px-0 epilogue">

        <div className="flex justify-between items-center">
          <div className="flex gap-12 items-center">
            <NavLink to='/'>
              <Logo />
            </NavLink>
            <div className="hidden md:flex">{links}</div>
          </div>

          <div className="flex gap-8 items-center">
            {user ? (
              <button onClick={handleLogout} className="font-bold bg-white text-[#4640DE] w-27 h-10">
                Logout
              </button>
            ) : (
              <div className="hidden md:flex gap-2">
                <NavLink to='/login' className="font-bold bg-white flex justify-center items-center text-[#4640DE] w-27 h-10">
                  Log In
                </NavLink>
                <NavLink to='/register' className="font-bold flex justify-center items-center bg-[#4640DE] text-white w-27 h-10">
                  Sign Up
                </NavLink>
              </div>

            )}

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
        </div >

        {isOpen && (
          <div className="flex flex-col mt-4 md:hidden">
            {links}
            <div className="flex flex-col mt-4 gap-2">
              <NavLink to='' className="font-bold bg-white text-[#4640DE] w-full h-12">
                Log In
              </NavLink>
              <NavLink to='/register' className="font-bold flex items-center justify-center bg-[#4640DE] text-white w-full h-12">
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </div >
    </div >

  );
};

export default Navbar;