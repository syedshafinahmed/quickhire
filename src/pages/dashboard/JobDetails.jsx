import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  if (!job) return <p className="text-center text-gray-500 mt-10">Job not found.</p>;

  const categoryColorMap = {
    "part-time": "text-[#FFB836] border-[#FFB836]",
    "full-time": "text-[#56CDAD] border-[#56CDAD]",
    "contract": "text-[#FF6550] border-[#FF6550]",
    "remote": "text-[#4640DE] border-[#4640DE]",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-12 epilogue">

      <div className="bg-white py-8 shadow-md border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {job.logo && (
              <img
                src={job.logo}
                alt={job.company}
                className="h-30 w-30 object-cover border border-gray-300"
              />
            )}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold text-gray-900 clashDisplay line-clamp-2">{job.title}</h1>
              <div className="flex items-center gap-2">
                {job.category && (
                  <span className={`inline-flex font-bold text-xs uppercase px-3 py-1 border ${categoryColorMap[job.category.toLowerCase()]}`}>
                    {job.category}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-6 text-gray-500 mt-1">
                <div className="flex items-baseline gap-1"><FaBuilding className="text-gray-400" /> <span className="font-bold text-md">{job.company}</span></div>
                <div className="flex items-baseline gap-1"><FaMapMarkerAlt className="text-gray-400" /> <span className="font-bold text-md">{job.location}</span></div>
              </div>
            </div>
          </div>

          <div className="flex items-start md:items-center gap-4 mt-4 md:mt-0">
            <button className="bg-[#4640DE] text-white px-6 py-2 font-semibold hover:bg-[#3b34c5] transition-all duration-200 shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {job.description && (
        <div className="bg-white py-8 shadow-md border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job <span className="text-[#4640DE]">Description</span></h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
        </div>
      )}
    </div>
  );
};

export default JobDetails;