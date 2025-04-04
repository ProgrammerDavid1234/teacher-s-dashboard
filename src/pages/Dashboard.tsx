
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
  const students = getStudents();
  const classes = getClasses();
  const recentResults = getRecentResults();
  const announcements = getAnnouncements();
  const upcomingTests = getUpcomingTestDates();
  const performanceStats = getPerformanceStats();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <Button className="flex items-center gap-2">
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
          <h2 className="text-xl font-bold">Recent Results</h2>
          <ResultTable results={recentResults} />

          <h2 className="text-xl font-bold">Upcoming Tests</h2>
          <Card>
            <CardContent className="p-4">
              <ul className="space-y-3">
                {upcomingTests.map((test, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{test.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {test.classes.join(", ")}
                      </p>
                    </div>
                    <div className="text-sm whitespace-nowrap">
                      {new Date(test.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Performance Overview</h2>
          <PerformanceChart data={performanceStats} />

          <h2 className="text-xl font-bold">Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
