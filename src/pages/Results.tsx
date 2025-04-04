
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import ResultTable from "@/components/dashboard/ResultTable";
import { getClasses, getResults, getStudents, getSubjects } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
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
  const results = getResults();
  const classes = getClasses();
  const students = getStudents();
  const subjects = getSubjects();

  const filteredResults = results.filter((result) => {
    const matchesSearch =
      search === "" ||
      result.studentName.toLowerCase().includes(search.toLowerCase()) ||
      result.subjectName.toLowerCase().includes(search.toLowerCase()) ||
      result.testName.toLowerCase().includes(search.toLowerCase());

    const matchesClass =
      classFilter === "" || result.classId === classFilter;

    return matchesSearch && matchesClass;
  });

  const handleAddResult = () => {
    // In a real app, this would submit to the server
    // For this demo, we'll just show a success toast
    toast({
      title: "Result added",
      description: "The student result has been successfully recorded.",
    });
    setDialogOpen(false);
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
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Student Results</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New Result
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Result</DialogTitle>
              <DialogDescription>
                Enter the student's test results. Click submit when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="student">Student</Label>
                <Select
                  value={newResult.studentId}
                  onValueChange={(value) =>
                    setNewResult({ ...newResult, studentId: value })
                  }
                >
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="class">Class</Label>
                <Select
                  value={newResult.classId}
                  onValueChange={(value) =>
                    setNewResult({ ...newResult, classId: value })
                  }
                >
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Select class" />
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
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={newResult.subjectId}
                  onValueChange={(value) =>
                    setNewResult({ ...newResult, subjectId: value })
                  }
                >
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="testName">Test Name</Label>
                <Input
                  id="testName"
                  value={newResult.testName}
                  onChange={(e) =>
                    setNewResult({ ...newResult, testName: e.target.value })
                  }
                  placeholder="e.g. Mid-term Examination"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="marks">Marks Obtained</Label>
                  <Input
                    id="marks"
                    type="number"
                    value={newResult.marks}
                    onChange={(e) =>
                      setNewResult({ ...newResult, marks: e.target.value })
                    }
                    placeholder="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="totalMarks">Total Marks</Label>
                  <Input
                    id="totalMarks"
                    type="number"
                    value={newResult.totalMarks}
                    onChange={(e) =>
                      setNewResult({ ...newResult, totalMarks: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="testDate">Test Date</Label>
                <Input
                  id="testDate"
                  type="date"
                  value={newResult.testDate}
                  onChange={(e) =>
                    setNewResult({ ...newResult, testDate: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddResult}>
                Save Result
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="Search results..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Classes</SelectItem>
            {classes.map((cls) => (
              <SelectItem key={cls.id} value={cls.id}>
                {cls.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ResultTable results={filteredResults} />
    </div>
  );
};

export default Results;
