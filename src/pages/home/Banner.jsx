import { FiMapPin, FiSearch } from "react-icons/fi";
import underline from "../../assets/underline.png";
import model from "../../assets/model.png";
import pattern from "../../assets/pattern.png";

const Banner = () => {
  return (
    <div className="bg-[#F8F8FD] w-full">
      <div className="max-w-7xl mx-auto px-5 md:px-0 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between relative">

          <div className="w-full md:w-1/2 relative z-10">
            <p className="text-5xl md:text-7xl text-[#25324B] clashDisplay font-semibold">
              Discover <br />
              more than <br />
              <span className="text-[#26A4FF]">5000+ Jobs</span>
            </p>

            <img src={underline} className="mt-3 mb-8" alt="" />

            <p className="text-lg md:text-xl text-[#515B6F] epilogue">
              Great platform for the job seeker that searching for <br className="hidden md:block" />
              new career heights and passionate about startups.
            </p>

            <div className="flex flex-col md:flex-row mt-6 absolute w-auto md:w-220 bg-white p-5 border border-gray-300 shadow-sm epilogue">

              <div className="flex items-center w-auto md:w-77.5 relative z-20 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
                <FiSearch className="text-gray-400 mr-3 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="flex items-center w-auto md:w-77.5 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
                <FiMapPin className="text-gray-400 mr-3 w-5 h-5" />
                <select className="w-full outline-none text-gray-700 cursor-pointer">
                  <option>Florence, Italy</option>
                  <option>New York, USA</option>
                  <option>London, UK</option>
                  <option>Tokyo, Japan</option>
                </select>
              </div>

              <button className="bg-[#5F46FF] text-white w-auto md:w-52.25 px-6 py-3 font-medium">
                Search my job
              </button>
            </div>

            <p className="epilogue mt-60 md:mt-40 text-[#202430]">
              Popular : <strong>UI Designer, UX Researcher, Android, Admin</strong>
            </p>
          </div>

          <div className="hidden md:block relative w-140 h-175 z-0">
            <img
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={pattern}
              alt=""
            />
            <img
              className="absolute inset-0 w-full h-full object-contain z-10"
              src={model}
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;