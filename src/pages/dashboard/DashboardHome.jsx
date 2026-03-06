import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const [counts, setCounts] = useState({
    users: 0,
    jobs: 0,
    applications: 0,
  });

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users?email=${user.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => console.error("Failed to fetch user data:", err));
    }
  }, [user]);

  useEffect(() => {
    if (!userData) return;

    const fetchCounts = async () => {
      try {
        const [usersRes, jobsRes, applicationsRes] = await Promise.all([
          fetch("http://localhost:3000/users/all"),
          fetch("http://localhost:3000/jobs"),
          userData.role === "admin"
            ? fetch("http://localhost:3000/applications/all")
            : fetch(`http://localhost:3000/applications?email=${userData.email}`),
        ]);

        const usersData = await usersRes.json();
        const jobsData = await jobsRes.json();
        const applicationsData = await applicationsRes.json();

        setCounts({
          users: usersData.length,
          jobs: jobsData.length,
          applications: applicationsData.length,
        });
      } catch (err) {
        console.error("Failed to fetch counts:", err);
      }
    };

    fetchCounts();
  }, [userData]);


  if (!userData) return <p className="text-center mt-10">Loading...</p>;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      {userData.role === "admin" ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">
              Admin <span className="text-[#4640DE]">Dashboard</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <span>{formattedDate}</span>
              <FaRegCalendarAlt size={16} className="text-[#4640DE]" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="bg-[#4640DE] shadow-md p-6 text-white">
              <h2 className="font-medium mb-2">Total Users</h2>
              <div className="flex items-end-safe justify-between">
                <p className="text-3xl font-bold">{counts.users}</p>
                <BiTrendingUp size={30} />
              </div>
            </div>

            <div className="bg-[#4640DE] shadow-md p-6 text-white">
              <h2 className="font-medium mb-2">Total Jobs</h2>
              <div className="flex items-end-safe justify-between">
                <p className="text-3xl font-bold">{counts.jobs}</p>
                <BiTrendingUp size={30} />
              </div>
            </div>

            <div className="bg-[#4640DE] shadow-md p-6 text-white">
              <h2 className="font-medium mb-2">Total Applications</h2>
              <div className="flex items-end-safe justify-between">
                <p className="text-3xl font-bold">{counts.applications}</p>
                <BiTrendingUp size={30} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">
              Applicant <span className="text-[#4640DE]">Dashboard</span>
            </h1>
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <span>{formattedDate}</span>
              <FaRegCalendarAlt size={16} className="text-[#4640DE]" />
            </div>
          </div>

            <div className="grid grid-cols-3 gap-10">
            <div className="bg-[#4640DE] shadow-md p-6 text-white">
              <h2 className="font-medium mb-2">Total Applications</h2>
              <div className="flex items-end-safe justify-between">
                <p className="text-3xl font-bold">{counts.applications}</p>
                <BiTrendingUp size={30} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;