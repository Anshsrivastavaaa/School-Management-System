// In-memory database for demonstration
// In production, replace with actual database (Supabase, PostgreSQL, etc.)

import type {
  User,
  Student,
  Attendance,
  Mark,
  Fee,
  Certificate,
  Message,
  Announcement,
  School,
  Subject,
  Class,
} from "./types"

// Store data in memory
let users: User[] = []
let students: Student[] = []
let attendance: Attendance[] = []
let marks: Mark[] = []
let fees: Fee[] = []
let certificates: Certificate[] = []
let messages: Message[] = []
let announcements: Announcement[] = []
let schools: School[] = []
let subjects: Subject[] = []
let classes: Class[] = []

// Helper functions
export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// User operations
export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">) {
  const user: User = {
    ...userData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  users.push(user)
  return user
}

export async function getUserById(id: string) {
  return users.find((u) => u.id === id)
}

export async function getUserByEmail(email: string) {
  return users.find((u) => u.email === email)
}

export async function getAllUsers(schoolId: string, role?: string) {
  return users.filter((u) => u.schoolId === schoolId && (!role || u.role === role))
}

// Student operations
export async function createStudent(studentData: Omit<Student, "id" | "createdAt" | "updatedAt">) {
  const student: Student = {
    ...studentData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  students.push(student)
  return student
}

export async function getStudentById(id: string) {
  return students.find((s) => s.id === id)
}

export async function getStudentsByClass(schoolId: string, className: string) {
  return students.filter((s) => s.schoolId === schoolId && s.class === className)
}

export async function getAllStudents(schoolId: string) {
  return students.filter((s) => s.schoolId === schoolId)
}

// Attendance operations
export async function markAttendance(attendanceData: Omit<Attendance, "id" | "createdAt" | "updatedAt">) {
  const record: Attendance = {
    ...attendanceData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  attendance.push(record)
  return record
}

export async function getAttendanceByStudent(studentId: string) {
  return attendance.filter((a) => a.studentId === studentId)
}

export async function getAttendanceStats(studentId: string) {
  const records = await getAttendanceByStudent(studentId)
  const total = records.length
  const present = records.filter((r) => r.status === "present").length
  const percentage = total > 0 ? (present / total) * 100 : 0
  return { total, present, absent: total - present, percentage: percentage.toFixed(2) }
}

// Marks operations
export async function createMark(markData: Omit<Mark, "id" | "createdAt" | "updatedAt">) {
  const mark: Mark = {
    ...markData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  marks.push(mark)
  return mark
}

export async function getMarksByStudent(studentId: string) {
  return marks.filter((m) => m.studentId === studentId)
}

export async function getMarksAverageBySem(studentId: string) {
  const studentMarks = await getMarksByStudent(studentId)
  const avgMark =
    studentMarks.length > 0
      ? (studentMarks.reduce((sum, m) => sum + (m.marks / m.totalMarks) * 100, 0) / studentMarks.length).toFixed(2)
      : 0
  return avgMark
}

// Fee operations
export async function createFee(feeData: Omit<Fee, "id" | "createdAt" | "updatedAt">) {
  const fee: Fee = {
    ...feeData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  fees.push(fee)
  return fee
}

export async function getFeesByStudent(studentId: string) {
  return fees.filter((f) => f.studentId === studentId)
}

export async function updateFeeStatus(
  feeId: string,
  status: "pending" | "paid" | "overdue",
  paymentMethod?: string,
  transactionId?: string,
) {
  const fee = fees.find((f) => f.id === feeId)
  if (fee) {
    fee.status = status
    fee.paidDate = status === "paid" ? new Date() : undefined
    fee.paymentMethod = paymentMethod
    fee.transactionId = transactionId
    fee.updatedAt = new Date()
  }
  return fee
}

// Certificate operations
export async function createCertificate(certData: Omit<Certificate, "id" | "createdAt" | "updatedAt">) {
  const cert: Certificate = {
    ...certData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  certificates.push(cert)
  return cert
}

export async function getCertificatesByStudent(studentId: string) {
  return certificates.filter((c) => c.studentId === studentId)
}

export async function approveCertificate(certId: string, approverUserId: string) {
  const cert = certificates.find((c) => c.id === certId)
  if (cert) {
    cert.status = "approved"
    cert.approvedBy = approverUserId
    cert.approvalDate = new Date()
    cert.certificateNumber = `CERT-${Date.now()}`
    cert.updatedAt = new Date()
  }
  return cert
}

// Message operations
export async function createMessage(messageData: Omit<Message, "id" | "createdAt">) {
  const msg: Message = {
    ...messageData,
    id: generateId(),
    createdAt: new Date(),
  }
  messages.push(msg)
  return msg
}

export async function getMessagesByUser(userId: string) {
  return messages.filter((m) => m.recipientId === userId || m.senderId === userId)
}

export async function markMessageAsRead(messageId: string) {
  const msg = messages.find((m) => m.id === messageId)
  if (msg) {
    msg.isRead = true
    msg.readAt = new Date()
  }
  return msg
}

// Announcement operations
export async function createAnnouncement(announcementData: Omit<Announcement, "id" | "createdAt" | "updatedAt">) {
  const announcement: Announcement = {
    ...announcementData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  announcements.push(announcement)
  return announcement
}

export async function getAnnouncementsBySchool(schoolId: string) {
  return announcements.filter((a) => a.schoolId === schoolId)
}

// School operations
export async function createSchool(schoolData: Omit<School, "id" | "createdAt" | "updatedAt">) {
  const school: School = {
    ...schoolData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  schools.push(school)
  return school
}

export async function getSchoolById(id: string) {
  return schools.find((s) => s.id === id)
}

// Class operations
export async function createClass(classData: Omit<Class, "id" | "createdAt" | "updatedAt">) {
  const cls: Class = {
    ...classData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  classes.push(cls)
  return cls
}

export async function getClassesBySchool(schoolId: string) {
  return classes.filter((c) => c.schoolId === schoolId)
}

// Subject operations
export async function createSubject(subjectData: Omit<Subject, "id" | "createdAt" | "updatedAt">) {
  const subject: Subject = {
    ...subjectData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  subjects.push(subject)
  return subject
}

export async function getSubjectsByClass(classId: string) {
  return subjects.filter((s) => s.classId === classId)
}

// Export all data (for admin export)
export function getAllData() {
  return {
    users,
    students,
    attendance,
    marks,
    fees,
    certificates,
    messages,
    announcements,
    schools,
    subjects,
    classes,
  }
}

// Reset data (for testing)
export function resetData() {
  users = []
  students = []
  attendance = []
  marks = []
  fees = []
  certificates = []
  messages = []
  announcements = []
  schools = []
  subjects = []
  classes = []
}
