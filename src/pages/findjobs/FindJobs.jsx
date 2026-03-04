import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs 
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const categoryColorMap = {
    "part-time": "text-[#FFB836] border-[#FFB836]",
    "full-time": "text-[#56CDAD] border-[#56CDAD]",
    "contract": "text-[#FF6550] border-[#FF6550]",
    "remote": "text-[#4640DE] border-[#4640DE]",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 epilogue">
      <div className="mb-8 text-left">
        <h1 className="text-4xl font-bold text-gray-800">Find Your <span className="text-[#4640DE] font-black">Next Job</span></h1>
        <p className="mt-2 text-gray-500 text-lg">
          Browse all available job listings and apply today
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-300 p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              {job.logo && (
                <img
                  src={job.logo}
                  alt={job.company}
                  className="h-12 w-12 object-contain mb-4"
                />
              )}

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold line-clamp-1 clashDisplay text-gray-800">{job.title}</h2>
              </div>

              <p className="text-gray-500 font-bold text-md mt-1">{job.company}</p>
              <p className="text-gray-500 mt-1 text-xs"> {job.location}</p>

              {job.category && (
                <span
                  className={`inline-flex mt-2 font-bold self-start text-xs uppercase px-2 py-1 border ${categoryColorMap[job.category.toLowerCase()] ||
                    "text-[#4640DE] border-[#4640DE]"
                    }`}
                >
                  {job.category}
                </span>
              )}

              {/* <p className="text-gray-600 mt-3 line-clamp-3">{job.description}</p> */}

              <div className="flex items-center justify-between mt-auto pt-4">
                {job.created_at ? (
                  <p className="text-gray-400 text-xs">
                    Posted on {new Date(job.created_at).toLocaleDateString()}
                  </p>
                ) : (
                  <span />
                )}

                <div
                  className="group text-[#4640DE] clashDisplay font-bold flex gap-2 items-center cursor-pointer transition-all duration-200 ease-out active:scale-95">
                  <span>Details</span>
                  <FaArrowRightLong className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindJobs;