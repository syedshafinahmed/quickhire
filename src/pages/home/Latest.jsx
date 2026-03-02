import { FaArrowRightLong } from "react-icons/fa6";
import pattern from "../../assets/pattern.png";

import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";
import l4 from "../../assets/l4.png";
import l5 from "../../assets/l5.png";
import l6 from "../../assets/l6.png";
import l7 from "../../assets/l7.png";
import l8 from "../../assets/l8.png";

const Latest = () => {
  const jobs = [
    {
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      image: l1,
    },
    {
      title: "Social Media Assistant",
      company: "Netlify",
      location: "Paris, France",
      image: l2,
    },
    {
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      image: l3,
    },
    {
      title: "Brand Designer",
      company: "Maze",
      location: "San Francisco, USA",
      image: l4,
    },
    {
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      image: l5,
    },
    {
      title: "Interactive Developer",
      company: "Udacity",
      location: "Hamburg, Germany",
      image: l6,
    },
    {
      title: "HR Manager",
      company: "Packer",
      location: "Lucern, Switzerland",
      image: l7,
    },
    {
      title: "HR Manager",
      company: "Webflow",
      location: "Lucern, Switzerland",
      image: l8,
    },
  ];

  return (
    <div
      className="w-full pb-1 pt-1 px-5 md:px-0 mt-10 relative overflow-hidden"
      style={{
        // backgroundColor: "rgba(70, 64, 222, 0.2)",
        backgroundColor: "#F8F8FD",
        clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)",
      }}
    >
      <img src={pattern} className="absolute -right-1" alt="" />

      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="flex justify-between items-end mt-20 mb-12">
          <h1 className="text-3xl md:text-5xl font-black clashDisplay text-[#25324B]">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h1>

          <div className="text-[#4640DE] hidden clashDisplay font-bold md:flex gap-2 items-center cursor-pointer z-10">
            Show all jobs <FaArrowRightLong />
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 mb-16">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-145 h-37.25 bg-white flex items-center justify-center z-10"
          >
            <div className="flex gap-6">
              <img
                src={job.image}
                alt=""
                className="w-16 h-16 object-cover"
              />

              <div>
                <h1 className="epilogue font-bold text-[#25324B] text-xl">
                  {job.title}
                </h1>

                <p className="text-[#515B6F] epilogue text-sm py-2.25">
                  {job.company} · {job.location}
                </p>

                <div className="flex gap-2">
                  <span className="text-[#56CDAD] bg-[#56CDAD]/20 rounded-3xl text-xs py-2 px-4 font-semibold">
                    Full Time
                  </span>

                  <span className="text-[#FFB836] border border-[#FFB836] bg-white rounded-3xl text-xs py-2 px-4 font-semibold">
                    Marketing
                  </span>

                  <span className="text-[#4640DE] border border-[#4640DE] bg-white rounded-3xl text-xs py-2 px-4 font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Latest;