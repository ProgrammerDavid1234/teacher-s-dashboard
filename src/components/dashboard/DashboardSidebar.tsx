
import { 
  BookOpen, 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  BarChart2, 
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, href, active, onClick }: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium",
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Button>
  );
};

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = getCurrentUser();

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Students", href: "/dashboard/students" },
    { icon: BookOpen, label: "Classes", href: "/dashboard/classes" },
    { icon: FileText, label: "Results", href: "/dashboard/results" },
    { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (href: string) => {
    navigate(href);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 transform bg-white transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <h2 className="text-2xl font-bold gradient-heading">EduTeach</h2>
          </div>
          <div className="flex-1 overflow-auto p-3">
            <div className="space-y-1">
              {navItems.map((item) => (
                <SidebarItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  active={location.pathname === item.href}
                  onClick={() => handleNavigate(item.href)}
                />
              ))}
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-1">
                <span className="text-xs font-medium text-primary">
                  {user?.role === 'admin' ? 'Admin' : 'Teacher'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
