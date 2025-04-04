
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'teacher' | 'admin';
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  rollNumber: string;
  avatar?: string;
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  studentCount: number;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
}

export interface Result {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  subjectId: string;
  subjectName: string;
  marks: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  testDate: string;
  testName: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  important: boolean;
}
