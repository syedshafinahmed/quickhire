import { FaArrowRightLong, FaCode } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { HiOutlineDesktopComputer, HiOutlineUserGroup } from "react-icons/hi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbCash, TbChartInfographic } from "react-icons/tb";

const categories = [
  { title: "Design", jobs: 235, icon: MdOutlineDesignServices },
  { title: "Sales", jobs: 456, icon: TbChartInfographic },
  { title: "Marketing", jobs: 140, icon: GrAnnounce },
  { title: "Finance", jobs: 325, icon: TbCash },
  { title: "Technology", jobs: 436, icon: HiOutlineDesktopComputer },
  { title: "Engineering", jobs: 542, icon: FaCode },
  { title: "Business", jobs: 211, icon: LuBriefcaseBusiness },
  { title: "Human Resource", jobs: 346, icon: HiOutlineUserGroup },
];

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      <div className="flex justify-between items-end mt-20 mb-12">
        <h1 className="text-3xl md:text-5xl font-black clashDisplay text-[#25324B]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h1>
        <div className="text-[#4640DE] hidden  clashDisplay font-bold md:flex gap-2 items-center cursor-pointer">
          Show all jobs <FaArrowRightLong />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map(({ title, jobs, icon: Icon }, index) => (
          <div
            key={index}
            className="group p-8 border border-[#D6DDEB] transition-all duration-300 hover:bg-[#4640DE]"
          >
            <Icon className="text-5xl text-[#4640DE] group-hover:text-white transition" />

            <p className="text-2xl mt-8 mb-3 font-bold clashDisplay text-[#25324B] group-hover:text-white transition">
              {title}
            </p>

            <div className="text-[#7C8493] epilogue font-bold flex gap-2 items-center group-hover:text-white transition">
              {jobs} jobs available <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;