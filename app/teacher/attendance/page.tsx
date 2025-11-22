"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, MessageSquare, BarChart3, Download } from "lucide-react"

export default function TeacherAttendance() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [selectedClass, setSelectedClass] = useState("10-A")
  const [attendanceMarked, setAttendanceMarked] = useState(false)

  const [students, setStudents] = useState([
    { id: "1", name: "Rahul Kumar", rollNo: 15, status: "present" },
    { id: "2", name: "Priya Sharma", rollNo: 16, status: "absent" },
    { id: "3", name: "Amit Patel", rollNo: 17, status: "present" },
    { id: "4", name: "Neha Singh", rollNo: 18, status: "leave" },
    { id: "5", name: "Vikram Kumar", rollNo: 19, status: "present" },
  ])

  const handleAttendanceChange = (studentId: string, status: "present" | "absent" | "leave") => {
    setStudents(students.map((s) => (s.id === studentId ? { ...s, status } : s)))
  }

  const handleSaveAttendance = () => {
    setAttendanceMarked(true)
    setTimeout(() => setAttendanceMarked(false), 2000)
  }

  const presentCount = students.filter((s) => s.status === "present").length
  const totalStudents = students.length
  const attendancePercentage = ((presentCount / totalStudents) * 100).toFixed(1)

  const sidebarItems = [
    { title: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Attendance", href: "/teacher/attendance", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Marks", href: "/teacher/marks", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Messages", href: "/teacher/messages", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "Assignments", href: "/teacher/assignments", icon: <BookOpen className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mark Attendance</h1>
              <p className="text-gray-600 mt-1">Quick attendance marking for your class</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Date & Class Selection */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="10-A">Class 10-A</option>
                    <option value="10-B">Class 10-B</option>
                    <option value="9-A">Class 9-A</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attendance %</label>
                  <div className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-center font-bold text-green-700">
                    {attendancePercentage}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex gap-2 mb-6">
            <Button variant="outline" onClick={() => setStudents(students.map((s) => ({ ...s, status: "present" })))}>
              Mark All Present
            </Button>
            <Button variant="outline" onClick={() => setStudents(students.map((s) => ({ ...s, status: "absent" })))}>
              Mark All Absent
            </Button>
            <Button variant="outline" onClick={() => setStudents(students.map((s) => ({ ...s, status: "leave" })))}>
              Mark All Leave
            </Button>
          </div>

          {/* Attendance Status Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Present</p>
                <p className="text-3xl font-bold text-green-600">
                  {students.filter((s) => s.status === "present").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Absent</p>
                <p className="text-3xl font-bold text-red-600">
                  {students.filter((s) => s.status === "absent").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-1">Leave</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {students.filter((s) => s.status === "leave").length}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Attendance Marking Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Student Attendance</CardTitle>
              <CardDescription>Mark attendance for {selectedDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Roll No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Student Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-600">{student.rollNo}</td>
                        <td className="py-3 px-4 text-gray-900 font-medium">{student.name}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant={student.status === "present" ? "default" : "outline"}
                              onClick={() => handleAttendanceChange(student.id, "present")}
                              className={student.status === "present" ? "bg-green-600 hover:bg-green-700" : ""}
                            >
                              Present
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === "absent" ? "default" : "outline"}
                              onClick={() => handleAttendanceChange(student.id, "absent")}
                              className={student.status === "absent" ? "bg-red-600 hover:bg-red-700" : ""}
                            >
                              Absent
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === "leave" ? "default" : "outline"}
                              onClick={() => handleAttendanceChange(student.id, "leave")}
                              className={student.status === "leave" ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                            >
                              Leave
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex gap-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-2" onClick={handleSaveAttendance}>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Save Attendance
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>

          {attendanceMarked && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              Attendance marked successfully for {selectedDate}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
