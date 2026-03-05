import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const PostedJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this job?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/jobs/${id}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (data.success) {
          setJobs(jobs.filter((job) => job._id !== id));

          Swal.fire("Deleted!", "Job has been removed.", "success");
        }
      }
    });
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading jobs...</p>;
  if (!jobs.length) return <p className="text-center mt-10 text-gray-500">No jobs posted yet.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 epilogue">
      <h1 className="text-3xl font-bold mb-6">
        Posted <span className="text-[#4640DE]">Jobs</span> ({jobs.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">Logo</th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">Company</th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">Position</th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">Posted Date</th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border border-gray-300">
                  {job.logo ? (
                    <img src={job.logo} alt={job.company} className="h-10 w-10 object-contain mx-auto" />
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>

                <td className="px-6 py-4 border border-gray-300 text-gray-700 font-medium">{job.company}</td>

                <td className="px-6 py-4 border border-gray-300 text-gray-700">{job.title}</td>

                <td className="px-6 py-4 border border-gray-300 text-gray-500 text-sm">
                  {job.created_at ? new Date(job.created_at).toLocaleDateString() : "N/A"}
                </td>

                <td className="px-6 py-4 border border-gray-300">
                  <div className="flex justify-center items-center gap-5">
                    <button onClick={() => { navigate(`/jobs/${job._id}`) }} className="text-gray-500 hover:text-blue-700 transition-all">
                      <FaEye size={20} />
                    </button>
                    <button onClick={() => { navigate(`/dashboard/jobs/${job._id}/edit`) }} className="text-gray-500 hover:text-yellow-700 transition-all">
                      <FaEdit size={18} />
                    </button>
                    <button onClick={() => handleDelete(job._id)} className="text-gray-500 hover:text-red-700 transition-all">
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobs;