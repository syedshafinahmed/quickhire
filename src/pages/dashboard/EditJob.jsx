import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    logo: "",
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`http://localhost:3000/jobs/${id}`);
      const data = await res.json();
      setJob(data);
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, created_at, ...updatedJob } = job;

    const res = await fetch(`http://localhost:3000/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire("Updated!", "Job has been updated successfully.", "success");
      navigate("/dashboard/posted-jobs");
    }
  };

  return (
    <div className="max-w-5xl bg-white border border-gray-200 p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Edit Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-600">Job Title</label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
              placeholder="Frontend Developer"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Company</label>
            <input
              type="text"
              name="company"
              value={job.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
              placeholder="QuickHire"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Company Logo URL</label>
          <input
            type="text"
            name="logo"
            value={job.logo}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
            placeholder="https://logo.png"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              value={job.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
              placeholder="Dhaka, Bangladesh"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Category</label>
            <select
              name="category"
              value={job.category}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
            >
              <option value="">Select category</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Job Description</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            rows="6"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#4640DE]"
            placeholder="Write job responsibilities, requirements, etc."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#4640DE] text-white px-6 py-2 text-sm hover:opacity-90"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;