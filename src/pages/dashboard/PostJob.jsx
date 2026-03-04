import { useState } from "react";

const PostJob = () => {
  const [job, setJob] = useState({
    logo: "",
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      ...job,
      created_at: new Date(),
    };

    console.log("Job submitted:", newJob);

    // TODO: send to backend
    // fetch("/api/jobs", { method: "POST", body: JSON.stringify(newJob) })
  };

  return (
    <div className="max-w-5xl bg-white border border-gray-200 p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">
        Post a Job
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
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Design">Design</option>
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
            Publish Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;