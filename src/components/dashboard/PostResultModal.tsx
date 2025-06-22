
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { getClasses, getStudents, getSubjects } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

interface PostResultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PostResultModal = ({ open, onOpenChange }: PostResultModalProps) => {
  const [newResult, setNewResult] = useState({
    studentId: "",
    classId: "",
    subjectId: "",
    marks: "",
    totalMarks: "100",
    testName: "",
    testDate: new Date().toISOString().split("T")[0],
  });

  const { toast } = useToast();
  const classes = getClasses();
  const students = getStudents();
  const subjects = getSubjects();

  const calculateGrade = (marks: number, totalMarks: number) => {
    const percentage = (marks / totalMarks) * 100;
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B+";
    if (percentage >= 60) return "B";
    if (percentage >= 50) return "C";
    if (percentage >= 40) return "D";
    return "F";
  };

  const handleSubmit = () => {
    if (!newResult.studentId || !newResult.classId || !newResult.subjectId || !newResult.marks || !newResult.testName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const marks = parseInt(newResult.marks);
    const totalMarks = parseInt(newResult.totalMarks);
    const percentage = Math.round((marks / totalMarks) * 100);
    const grade = calculateGrade(marks, totalMarks);

    // In a real app, this would save to the backend
    console.log("Posting result:", {
      ...newResult,
      marks,
      totalMarks,
      percentage,
      grade,
    });

    toast({
      title: "Result Posted Successfully!",
      description: `Result for ${students.find(s => s.id === newResult.studentId)?.name} has been recorded.`,
    });

    onOpenChange(false);
    setNewResult({
      studentId: "",
      classId: "",
      subjectId: "",
      marks: "",
      totalMarks: "100",
      testName: "",
      testDate: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Post New Result</DialogTitle>
          <DialogDescription>
            Enter the student's test results. All fields are required.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="student" className="font-medium">Student *</Label>
            <Select
              value={newResult.studentId}
              onValueChange={(value) =>
                setNewResult({ ...newResult, studentId: value })
              }
            >
              <SelectTrigger id="student">
                <SelectValue placeholder="Select a student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name} - {student.rollNumber}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="class" className="font-medium">Class *</Label>
            <Select
              value={newResult.classId}
              onValueChange={(value) =>
                setNewResult({ ...newResult, classId: value })
              }
            >
              <SelectTrigger id="class">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls.id} value={cls.id}>
                    {cls.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject" className="font-medium">Subject *</Label>
            <Select
              value={newResult.subjectId}
              onValueChange={(value) =>
                setNewResult({ ...newResult, subjectId: value })
              }
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name} ({subject.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="testName" className="font-medium">Test/Exam Name *</Label>
            <Input
              id="testName"
              value={newResult.testName}
              onChange={(e) =>
                setNewResult({ ...newResult, testName: e.target.value })
              }
              placeholder="e.g. Mid-term Examination, Unit Test 1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="marks" className="font-medium">Marks Obtained *</Label>
              <Input
                id="marks"
                type="number"
                min="0"
                max={newResult.totalMarks}
                value={newResult.marks}
                onChange={(e) =>
                  setNewResult({ ...newResult, marks: e.target.value })
                }
                placeholder="0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="totalMarks" className="font-medium">Total Marks</Label>
              <Input
                id="totalMarks"
                type="number"
                min="1"
                value={newResult.totalMarks}
                onChange={(e) =>
                  setNewResult({ ...newResult, totalMarks: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="testDate" className="font-medium">Test Date</Label>
            <Input
              id="testDate"
              type="date"
              value={newResult.testDate}
              onChange={(e) =>
                setNewResult({ ...newResult, testDate: e.target.value })
              }
            />
          </div>

          {newResult.marks && newResult.totalMarks && (
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium">Preview:</p>
              <p className="text-sm text-muted-foreground">
                Percentage: {Math.round((parseInt(newResult.marks) / parseInt(newResult.totalMarks)) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground">
                Grade: {calculateGrade(parseInt(newResult.marks), parseInt(newResult.totalMarks))}
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
            Post Result
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostResultModal;
