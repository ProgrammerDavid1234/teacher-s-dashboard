
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
import ResultActionsMenu from "./ResultActionsMenu";

interface ResultTableProps {
  results: Result[];
}

const getGradeColor = (grade: string) => {
  switch (grade) {
    case "A+":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "A":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "B+":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "B":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "C":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "D":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    case "F":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const ResultTable = ({ results }: ResultTableProps) => {
  if (results.length === 0) {
    return (
      <div className="rounded-md border bg-white p-8">
        <div className="text-center">
          <p className="text-muted-foreground">No results found</p>
          <p className="text-sm text-muted-foreground mt-1">Start by posting your first result</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Student</TableHead>
            <TableHead className="font-semibold">Subject</TableHead>
            <TableHead className="font-semibold">Test</TableHead>
            <TableHead className="text-right font-semibold">Score</TableHead>
            <TableHead className="text-right font-semibold">Grade</TableHead>
            <TableHead className="text-right font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id} className="hover:bg-muted/30">
              <TableCell className="font-medium">{result.studentName}</TableCell>
              <TableCell>
                <span className="text-sm font-medium">{result.subjectName}</span>
              </TableCell>
              <TableCell>
                <div>
                  <span className="text-sm font-medium">{result.testName}</span>
                  <p className="text-xs text-muted-foreground">
                    {new Date(result.testDate).toLocaleDateString()}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="text-sm">
                  <span className="font-bold">{result.marks}</span>
                  <span className="text-muted-foreground">/{result.totalMarks}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.percentage}%
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline" className={getGradeColor(result.grade)}>
                  {result.grade}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <ResultActionsMenu result={result} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
