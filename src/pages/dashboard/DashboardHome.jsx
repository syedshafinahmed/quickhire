import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users?email=${user.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => console.error("Failed to fetch user data:", err));
    }
  }, [user]);

  if (!userData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      {userData.role === "admin" ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Admin <span className="text-[#4640DE]">Dashboard</span></h1>
        </div>
      ) : (
        <div>
            <h1 className="text-2xl font-bold mb-4">Applicant <span className="text-[#4640DE]">Dashboard</span></h1>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;