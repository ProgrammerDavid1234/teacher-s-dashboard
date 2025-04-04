
import { Student, Class, Subject, Result, Announcement } from "@/types";

export const getStudents = (): Student[] => {
  return [
    {
      id: "1",
      name: "Aiden Chen",
      email: "aiden@example.com",
      grade: "10",
      rollNumber: "10A01",
      avatar: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Zoe Wilson",
      email: "zoe@example.com",
      grade: "10",
      rollNumber: "10A02",
      avatar: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Lucas Johnson",
      email: "lucas@example.com",
      grade: "10",
      rollNumber: "10A03",
      avatar: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Sophia Brown",
      email: "sophia@example.com",
      grade: "9",
      rollNumber: "9B01",
      avatar: "/placeholder.svg"
    },
    {
      id: "5",
      name: "Mason Lee",
      email: "mason@example.com",
      grade: "9",
      rollNumber: "9B02",
      avatar: "/placeholder.svg"
    },
    {
      id: "6",
      name: "Isabella Kim",
      email: "isabella@example.com",
      grade: "11",
      rollNumber: "11C01",
      avatar: "/placeholder.svg"
    },
  ];
};

export const getClasses = (): Class[] => {
  return [
    { id: "1", name: "Mathematics 10A", grade: "10", section: "A", studentCount: 32 },
    { id: "2", name: "Science 10A", grade: "10", section: "A", studentCount: 30 },
    { id: "3", name: "English 9B", grade: "9", section: "B", studentCount: 28 },
    { id: "4", name: "History 9B", grade: "9", section: "B", studentCount: 28 },
    { id: "5", name: "Physics 11C", grade: "11", section: "C", studentCount: 25 },
    { id: "6", name: "Chemistry 11C", grade: "11", section: "C", studentCount: 25 },
  ];
};

export const getSubjects = (): Subject[] => {
  return [
    { id: "1", name: "Mathematics", code: "MATH101" },
    { id: "2", name: "Science", code: "SCI101" },
    { id: "3", name: "English", code: "ENG101" },
    { id: "4", name: "History", code: "HIST101" },
    { id: "5", name: "Physics", code: "PHYS101" },
    { id: "6", name: "Chemistry", code: "CHEM101" },
  ];
};

export const getResults = (): Result[] => {
  return [
    {
      id: "1",
      studentId: "1",
      studentName: "Aiden Chen",
      classId: "1",
      className: "Mathematics 10A",
      subjectId: "1",
      subjectName: "Mathematics",
      marks: 85,
      totalMarks: 100,
      percentage: 85,
      grade: "A",
      testDate: "2025-03-15",
      testName: "Mid-term Examination"
    },
    {
      id: "2",
      studentId: "2",
      studentName: "Zoe Wilson",
      classId: "1",
      className: "Mathematics 10A",
      subjectId: "1",
      subjectName: "Mathematics",
      marks: 92,
      totalMarks: 100,
      percentage: 92,
      grade: "A+",
      testDate: "2025-03-15",
      testName: "Mid-term Examination"
    },
    {
      id: "3",
      studentId: "3",
      studentName: "Lucas Johnson",
      classId: "1",
      className: "Mathematics 10A",
      subjectId: "1",
      subjectName: "Mathematics",
      marks: 78,
      totalMarks: 100,
      percentage: 78,
      grade: "B+",
      testDate: "2025-03-15",
      testName: "Mid-term Examination"
    },
    {
      id: "4",
      studentId: "4",
      studentName: "Sophia Brown",
      classId: "3",
      className: "English 9B",
      subjectId: "3",
      subjectName: "English",
      marks: 88,
      totalMarks: 100,
      percentage: 88,
      grade: "A",
      testDate: "2025-03-16",
      testName: "Mid-term Examination"
    },
    {
      id: "5",
      studentId: "5",
      studentName: "Mason Lee",
      classId: "3",
      className: "English 9B",
      subjectId: "3",
      subjectName: "English",
      marks: 75,
      totalMarks: 100,
      percentage: 75,
      grade: "B",
      testDate: "2025-03-16",
      testName: "Mid-term Examination"
    },
    {
      id: "6",
      studentId: "6",
      studentName: "Isabella Kim",
      classId: "5",
      className: "Physics 11C",
      subjectId: "5",
      subjectName: "Physics",
      marks: 95,
      totalMarks: 100,
      percentage: 95,
      grade: "A+",
      testDate: "2025-03-17",
      testName: "Mid-term Examination"
    },
  ];
};

export const getAnnouncements = (): Announcement[] => {
  return [
    {
      id: "1",
      title: "End of Term Examinations",
      content: "End of term examinations will be held from May 5th to May 15th. Please prepare your students accordingly.",
      date: "2025-04-01",
      author: "Principal Edwards",
      important: true
    },
    {
      id: "2",
      title: "Teacher's Meeting",
      content: "There will be a teacher's meeting on April 10th to discuss the upcoming parent-teacher conference.",
      date: "2025-04-02",
      author: "Admin Office",
      important: false
    },
    {
      id: "3",
      title: "School Closure",
      content: "The school will be closed on April 15th for maintenance. Classes will resume on April 16th.",
      date: "2025-04-03",
      author: "Admin Office",
      important: true
    },
  ];
};

export const getRecentResults = (): Result[] => {
  return getResults().slice(0, 5);
};

export const getUpcomingTestDates = (): { date: string; name: string; classes: string[] }[] => {
  return [
    {
      date: "2025-04-10",
      name: "Unit Test - Mathematics",
      classes: ["Mathematics 10A", "Mathematics 9B"]
    },
    {
      date: "2025-04-12",
      name: "Unit Test - Science",
      classes: ["Science 10A"]
    },
    {
      date: "2025-04-15",
      name: "Unit Test - English",
      classes: ["English 9B", "English 11C"]
    },
  ];
};

export const getPerformanceStats = (): { label: string; count: number; percentage: number }[] => {
  return [
    { label: "A+ Grade", count: 12, percentage: 15 },
    { label: "A Grade", count: 18, percentage: 22.5 },
    { label: "B+ Grade", count: 25, percentage: 31.25 },
    { label: "B Grade", count: 15, percentage: 18.75 },
    { label: "C Grade", count: 10, percentage: 12.5 },
  ];
};
