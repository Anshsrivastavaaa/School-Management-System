// Database types for the school management system

export type UserRole = "admin" | "principal" | "teacher" | "parent" | "student"

export interface User {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: UserRole
  schoolId: string
  phoneNumber?: string
  createdAt: Date
  updatedAt: Date
}

export interface Student {
  id: string
  userId: string
  schoolId: string
  enrollmentNumber: string
  class: string
  section: string
  dateOfBirth: Date
  fatherName: string
  motherName: string
  fatherPhone?: string
  motherPhone?: string
  address: string
  createdAt: Date
  updatedAt: Date
}

export interface Attendance {
  id: string
  studentId: string
  teacherId: string
  date: Date
  status: "present" | "absent" | "leave"
  remark?: string
  createdAt: Date
  updatedAt: Date
}

export interface Mark {
  id: string
  studentId: string
  teacherId: string
  subjectId: string
  examType: "unit-test" | "mid-term" | "final"
  marks: number
  totalMarks: number
  createdAt: Date
  updatedAt: Date
}

export interface Subject {
  id: string
  schoolId: string
  name: string
  code: string
  classId: string
  createdAt: Date
  updatedAt: Date
}

export interface Fee {
  id: string
  studentId: string
  schoolId: string
  feeType: "tuition" | "exam" | "activity" | "other"
  amount: number
  dueDate: Date
  paidDate?: Date
  status: "pending" | "paid" | "overdue"
  paymentMethod?: "online" | "cash" | "check"
  transactionId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Certificate {
  id: string
  studentId: string
  type: "transfer" | "bonafide" | "leaving" | "conduct"
  status: "draft" | "pending-approval" | "approved" | "issued"
  approvedBy?: string
  approvalDate?: Date
  certificateNumber?: string
  createdAt: Date
  updatedAt: Date
}

export interface Message {
  id: string
  senderId: string
  recipientId: string
  subject: string
  content: string
  isRead: boolean
  createdAt: Date
  readAt?: Date
}

export interface Announcement {
  id: string
  schoolId: string
  createdBy: string
  title: string
  content: string
  targetRole: UserRole[]
  createdAt: Date
  updatedAt: Date
}

export interface Class {
  id: string
  schoolId: string
  name: string
  section: string
  classTeacherId: string
  createdAt: Date
  updatedAt: Date
}

export interface School {
  id: string
  name: string
  code: string
  address: string
  phoneNumber: string
  email: string
  principalId: string
  createdAt: Date
  updatedAt: Date
}
