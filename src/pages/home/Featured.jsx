import { FaArrowRightLong } from "react-icons/fa6";

import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";
import f7 from "../../assets/f7.png";
import f8 from "../../assets/f8.png";

const jobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description:
      "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    image: f1,
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description:
      "Dropbox is looking for Brand Designer to help team ma ...",
    tags: ["Design", "Business"],
    type: "Full Time",
    image: f2,
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing team ...",
    tags: ["Marketing"],
    type: "Full Time",
    image: f3,
  },
  {
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    description:
      "Blinkist is looking for Visual Designer to help design team ...",
    tags: ["Design"],
    type: "Full Time",
    image: f4,
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description:
      "ClassPass is looking for Product Designer to help us ...",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    image: f5,
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description:
      "Canva is looking for Lead Engineer to help develop ...",
    tags: ["Design", "Business"],
    type: "Full Time",
    image: f6,
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description:
      "GoDaddy is looking for Brand Strategist to join the team ...",
    tags: ["Marketing"],
    type: "Full Time",
    image: f7,
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description:
      "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"],
    type: "Full Time",
    image: f8,
  },
];

const tagColors = {
  Marketing: { bg: "bg-[#FFB836]/20", text: "text-[#FFB836]" },
  Design: { bg: "bg-[#56CDAD]/20", text: "text-[#56CDAD]" },
  Technology: { bg: "bg-[#FF6550]/20", text: "text-[#FF6550]" },
  Business: { bg: "bg-[#4640DE]/20", text: "text-[#4640DE]" },
};

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      <div className="flex justify-between items-end mt-20 mb-12">
        <h1 className="text-3xl md:text-5xl font-black clashDisplay text-[#25324B]">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h1>

        <div className="text-[#4640DE] hidden clashDisplay font-bold md:flex gap-2 items-center cursor-pointer">
          Show all jobs <FaArrowRightLong />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {jobs.map(
          ({ title, company, location, description, tags, type, image }, index) => (
            <div
              key={index}
              className="w-full h-full p-6 border border-[#D6DDEB] hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start pb-4">
                <img
                  src={image}
                  alt={company}
                  className="w-12 h-12 object-contain"
                />

                <button className="px-4 py-1 border border-[#4640DE] text-[#4640DE] text-sm font-medium">
                  {type}
                </button>
              </div>
              <h1 className="epilogue font-bold text-[#25324B] text-lg mb-1">
                {title}
              </h1>
              <p className="text-[#515B6F] epilogue text-sm">
                {company} · {location}
              </p>
              <p className="text-[#7C8493] py-4 text-sm leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, i) => {
                  const color =
                    tagColors[tag] || {
                      bg: "bg-gray-200",
                      text: "text-gray-600",
                    };
                  return (
                    <span
                      key={i}
                      className={`${color.bg} ${color.text} rounded-3xl text-xs py-2 px-4 font-semibold`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Featured;