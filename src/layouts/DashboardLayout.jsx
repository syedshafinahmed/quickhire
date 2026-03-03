import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  Menu,
  X,
  LayoutDashboard,
  MessageSquare,
  Users,
  Briefcase,
  Calendar,
  Settings,
  HelpCircle,
  Bell,
  Plus,
} from "lucide-react";
import Logo from "../logo/Logo";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F6F7FB] epilogue">
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <Logo></Logo>
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-6 text-sm text-gray-600">
          <MenuItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <MenuItem icon={<MessageSquare size={18} />} label="Messages" />
          <MenuItem icon={<Users size={18} />} label="Applicants" />
          <MenuItem icon={<Briefcase size={18} />} label="Job Listing" />
          <MenuItem icon={<Calendar size={18} />} label="My Schedule" />

          <div className="mt-10 px-2 text-xs text-gray-400">SETTINGS</div>
          <MenuItem icon={<Settings size={18} />} label="Settings" />
          <MenuItem icon={<HelpCircle size={18} />} label="Help Center" />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
            <div>
              <p className="text-sm text-gray-500">Good morning,</p>
              <h2 className="font-semibold text-gray-800">{user.displayName}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100">
              <Bell size={18} />
            </button>
            <NavLink to='/dashboard/post-job'>
              <button className="bg-[#4640DE] text-white px-4 py-2 text-sm flex items-center gap-2">
                <Plus size={15} />
                <span>Post a job</span>
              </button>
            </NavLink>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, active }) => (
  <div
    className={`group flex items-center px-3 py-2 cursor-pointer
    transition-all duration-200 ease-out
    ${active
        ? "bg-[#F1F0FF] text-[#4640DE]"
        : "text-gray-600 hover:text-[#4640DE]"
      }
    hover:bg-[#F1F0FF] hover:translate-x-1`}
  >
    <span
      className={`w-5 h-5 flex items-center justify-center mr-3
      transition-colors duration-200
      ${active ? "text-[#4640DE]" : "group-hover:text-[#4640DE]"}`}
    >
      {icon}
    </span>

    <span className="leading-none">{label}</span>
  </div>
);

export default DashboardLayout;