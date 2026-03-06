import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(
          `https://quickhire-ssa.vercel.app/applications?email=${user?.email}`
        );
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchApplications();
  }, [user?.email]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">Loading applications...</p>
    );

  if (!applications.length)
    return (
      <p className="text-center mt-10 text-gray-500">
        You haven't applied to any jobs yet.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 epilogue">
      <h1 className="text-3xl font-bold mb-6">
        Applied <span className="text-[#4640DE]">Jobs</span> ({applications.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Company
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Position
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Applied Date
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border border-gray-300 text-gray-700 font-medium">
                  {app.company}
                </td>

                <td className="px-6 py-4 border border-gray-300 text-gray-700">
                  {app.jobTitle}
                </td>

                <td className="px-6 py-4 border border-gray-300 text-gray-500 text-sm">
                  {app.created_at
                    ? new Date(app.created_at).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="px-6 py-4 border border-gray-300">
                  <button
                    onClick={() => navigate(`/jobs/${app.jobId}`)}
                    className="text-gray-500 hover:text-blue-700 transition-all"
                  >
                    <FaEye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;