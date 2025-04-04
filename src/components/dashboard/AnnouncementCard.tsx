
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Announcement } from "@/types";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const formattedDate = new Date(announcement.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className={cn("card-hover", announcement.important && "border-primary border-l-4")}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            {announcement.important && <AlertCircle className="h-4 w-4 text-primary" />}
            {announcement.title}
          </CardTitle>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{announcement.content}</p>
        <div className="mt-2 text-xs font-medium text-muted-foreground">
          Posted by: {announcement.author}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
