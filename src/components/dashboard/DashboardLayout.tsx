
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in via localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(currentUser));
    }
  }, [navigate]);

  if (!user) {
    return null; // Don't render anything while checking auth
  }

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col md:ml-64">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-muted/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
