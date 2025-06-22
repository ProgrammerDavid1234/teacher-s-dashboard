
import { useState } from "react";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Calendar,
  PlusCircle
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import AnnouncementCard from "@/components/dashboard/AnnouncementCard";
import ResultTable from "@/components/dashboard/ResultTable";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import PostResultModal from "@/components/dashboard/PostResultModal";
import { Button } from "@/components/ui/button";
import { 
  getAnnouncements, 
  getClasses, 
  getPerformanceStats, 
  getRecentResults, 
  getStudents, 
  getUpcomingTestDates 
} from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [showPostResultModal, setShowPostResultModal] = useState(false);
  
  const students = getStudents();
  const classes = getClasses();
  const recentResults = getRecentResults();
  const announcements = getAnnouncements();
  const upcomingTests = getUpcomingTestDates();
  const performanceStats = getPerformanceStats();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-heading">Teacher Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening in your classes.</p>
        </div>
        <Button 
          onClick={() => setShowPostResultModal(true)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          <PlusCircle className="h-4 w-4" />
          Post Result
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={students.length} 
          icon={Users}
          description="Active students in your classes" 
        />
        <StatCard 
          title="Classes" 
          value={classes.length} 
          icon={BookOpen}
          description="Classes you are teaching" 
        />
        <StatCard 
          title="Results Posted" 
          value={recentResults.length} 
          icon={FileText}
          description="Results posted this week"
          trend={{ value: 12, isPositive: true }} 
        />
        <StatCard 
          title="Upcoming Tests" 
          value={upcomingTests.length} 
          icon={Calendar}
          description="Scheduled in next 2 weeks" 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Results</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <ResultTable results={recentResults} />

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Upcoming Tests</h2>
            <Button variant="outline" size="sm">Manage Schedule</Button>
          </div>
          <Card>
            <CardContent className="p-4">
              {upcomingTests.length > 0 ? (
                <ul className="space-y-3">
                  {upcomingTests.map((test, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b pb-2 last:border-0">
                      <div>
                        <p className="font-medium">{test.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {test.classes.join(", ")}
                        </p>
                      </div>
                      <div className="text-sm whitespace-nowrap text-primary font-medium">
                        {new Date(test.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-muted-foreground py-4">No upcoming tests scheduled</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Performance Overview</h2>
            <Button variant="outline" size="sm">View Analytics</Button>
          </div>
          <PerformanceChart data={performanceStats} />

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Announcements</h2>
            <Button variant="outline" size="sm">Create New</Button>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </div>

      <PostResultModal 
        open={showPostResultModal} 
        onOpenChange={setShowPostResultModal} 
      />
    </div>
  );
};

export default Dashboard;
