import { useContext, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const JobDetails = () => {
  const job = useLoaderData();

  const [openModal, setOpenModal] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.displayName, user?.email);

  const [formData, setFormData] = useState({
    applicantName: "",
    applicantEmail: "",
    resumeLink: "",
    coverLetter: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        applicantName: user.displayName || "",
        applicantEmail: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const applicationData = {
      jobId: job._id,
      jobTitle: job.title,
      company: job.company,
      ...formData,
    };

    try {
      const res = await fetch("http://localhost:3000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const data = await res.json();

      if (data.success) {

        setOpenModal(false);
        setAppliedJobs((prev) => [...prev, job._id]);

        setFormData({
          applicantName: "",
          applicantEmail: "",
          resumeLink: "",
          coverLetter: "",
        });

        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your application has been submitted successfully.",
          confirmButtonColor: "#4640DE",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        message: error.message,
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  if (!job) return <p className="text-center text-gray-500 mt-10">Job not found.</p>;

  const categoryColorMap = {
    "part-time": "text-[#FFB836] border-[#FFB836]",
    "full-time": "text-[#56CDAD] border-[#56CDAD]",
    "contract": "text-[#FF6550] border-[#FF6550]",
    "remote": "text-[#4640DE] border-[#4640DE]",
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-12 epilogue">

        <div className="bg-white p-8 shadow-md border border-gray-200">
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
              <button
                onClick={() => setOpenModal(true)}
                disabled={appliedJobs.includes(job._id)}
                className={`px-6 py-2 font-semibold transition-all duration-200 shadow-md ${appliedJobs.includes(job._id)
                  ? "bg-white border border-[#4640DE] text-[#4640DE] cursor-default"
                  : "bg-[#4640DE] text-white hover:bg-[#3b34c5]"
                  }`}
              >
                {appliedJobs.includes(job._id) ? "Applied" : "Apply Now"}
              </button>
            </div>
          </div>
        </div>
        {job.description && (
          <div className="bg-white p-8 shadow-md border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job <span className="text-[#4640DE]">Description</span></h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>
        )}

        {openModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">

            <div className="bg-white w-full max-w-3xl shadow-xl border border-gray-200">
              <div className="flex justify-between items-center px-6 py-5">
                <h2 className="text-xl font-bold text-gray-800">
                  Apply for <span className="text-[#4640DE]">{job.title}</span>
                </h2>

                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-500 hover:text-black text-lg"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={handleApply}
                className="flex flex-col gap-6 px-6 pb-6"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Company
                    </label>
                    <input
                      value={job.company}
                      disabled
                      className="border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Position
                    </label>
                    <input
                      value={job.title}
                      disabled
                      className="border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      name="applicantName"
                      value={formData.applicantName} onChange={handleChange}
                      required
                      className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      name="applicantEmail"
                      type="email"
                      value={formData.applicantEmail}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Resume Link
                  </label>
                  <input
                    name="resumeLink"
                    placeholder="Google Drive / Portfolio / Resume URL"
                    onChange={handleChange}
                    className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    rows="4"
                    placeholder="Write a short cover letter..."
                    onChange={handleChange}
                    className="border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#4640DE] text-white font-semibold hover:bg-[#3b34c5] transition"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default JobDetails;