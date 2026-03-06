import { useEffect, useState } from "react";

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("https://quickhire-ssa.vercel.app/applications/all");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading applicants...
      </p>
    );

  if (!applications.length)
    return (
      <p className="text-center mt-10 text-gray-500">
        No applications found.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-8 epilogue">
      <h1 className="text-3xl font-bold mb-6">
        Job <span className="text-[#4640DE]">Applicants</span> ({applications.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Company
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Position
              </th>
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Resume
              </th>
              {/* <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Cover Letter
              </th> */}
              <th className="px-6 py-3 border border-gray-300 text-sm font-semibold text-gray-700">
                Applied Date
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border border-gray-300 font-medium text-gray-700">
                  {app.applicantName}
                </td>

                <td className="px-6 py-4 border border-gray-300 text-gray-600">
                  {app.applicantEmail}
                </td>

                <td className="px-6 py-4 border border-gray-300">
                  {app.company}
                </td>

                <td className="px-6 py-4 border border-gray-300">
                  {app.jobTitle}
                </td>

                <td className="px-6 py-4 border border-gray-300">
                  <a
                    href={app.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4640DE]"
                  >
                    View Resume
                  </a>
                </td>

                {/* <td className="px-6 py-4 border border-gray-300 text-gray-600 text-sm max-w-xs truncate">
                  {app.coverLetter}
                </td> */}

                <td className="px-6 py-4 border border-gray-300 text-gray-500 text-sm">
                  {new Date(app.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicants;