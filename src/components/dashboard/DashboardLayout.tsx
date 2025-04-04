
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/lib/auth";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Don't render anything while redirecting
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
