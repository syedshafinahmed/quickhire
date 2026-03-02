import logo from '../../assets/logo.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#202430] epilogue'>
      <div className='max-w-7xl mx-auto px-5 md:px-0'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-30 py-16'>
          <div className='w-auto md:w-96'>
            <div className='flex items-center gap-2 mb-8'>
              <img className='h-9' src={logo} alt="" />
              <p className='text-white rhd font-bold text-2xl tracking-tight'>QuickHire</p>
            </div>
            <p className='text-[#D6DDEB]'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
          </div>
          <div className='flex flex-row gap-25'>
            <div>
              <p className='mb-5 font-semibold text-white'>About</p>
              <p className='text-[#D6DDEB] mb-4'>Companies</p>
              <p className='text-[#D6DDEB] mb-4'>Pricing</p>
              <p className='text-[#D6DDEB] mb-4'>Terms</p>
              <p className='text-[#D6DDEB] mb-4'>Advice</p>
              <p className='text-[#D6DDEB] mb-4'>Privacy Policy</p>
            </div>
            <div>
              <p className='mb-5 font-semibold text-white'>Resources</p>
              <p className='text-[#D6DDEB] mb-4'>Help Docs</p>
              <p className='text-[#D6DDEB] mb-4'>Guide</p>
              <p className='text-[#D6DDEB] mb-4'>Updates</p>
              <p className='text-[#D6DDEB] mb-4'>Contact Us</p>
            </div>
          </div>
          <div>
            <p className='mb-5 font-semibold text-white'>Get Jobs Notification</p>
            <p className='text-[#D6DDEB] mb-4'>The latest job news, articles, sent to <br /> your inbox weekly.</p>
            <div className='flex gap-2 items-center'>
              <input className='w-55.75 h-12.5 bg-white pl-5' placeholder='Email Address' type="text" />
              <button className='h-12.5 w-32.75 text-white bg-[#4640DE]'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='text-white border border-t-white' />
        <div className='py-11'>
          <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-5'>
            <p className='font-medium text-gray-400'>&copy; {new Date().getFullYear()} QuickHire. All Rights Reserved.</p>
            <div className='flex gap-6 items-center'>
              <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                <FaFacebookF className='text-white' />
              </div>
              <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                <FaInstagram className='text-white' />
              </div>
              <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                <FaGithub className='text-white' />
              </div>
              <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                <FaLinkedinIn className='text-white' />
              </div>
              <div className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center'>
                <FaTwitter className='text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;