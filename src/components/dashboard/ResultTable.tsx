
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Result } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ResultTableProps {
  results: Result[];
}

const getGradeColor = (grade: string) => {
  switch (grade) {
    case "A+":
      return "bg-green-100 text-green-800";
    case "A":
      return "bg-green-100 text-green-800";
    case "B+":
      return "bg-blue-100 text-blue-800";
    case "B":
      return "bg-blue-100 text-blue-800";
    case "C":
      return "bg-yellow-100 text-yellow-800";
    case "D":
      return "bg-orange-100 text-orange-800";
    case "F":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ResultTable = ({ results }: ResultTableProps) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Test</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.studentName}</TableCell>
              <TableCell>{result.subjectName}</TableCell>
              <TableCell>{result.testName}</TableCell>
              <TableCell className="text-right">
                {result.marks}/{result.totalMarks} ({result.percentage}%)
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline" className={getGradeColor(result.grade)}>
                  {result.grade}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
