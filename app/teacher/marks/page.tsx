"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, BookOpen, MessageSquare, BarChart3, Download } from "lucide-react"

export default function TeacherMarks() {
  const [selectedExam, setSelectedExam] = useState("mid-term")
  const [selectedSubject, setSelectedSubject] = useState("english")
  const [editingMarks, setEditingMarks] = useState<Record<string, number>>({})

  const [marks, setMarks] = useState([
    { id: "1", name: "Rahul Kumar", rollNo: 15, marksObtained: 42, totalMarks: 50, percentage: 84 },
    { id: "2", name: "Priya Sharma", rollNo: 16, marksObtained: 48, totalMarks: 50, percentage: 96 },
    { id: "3", name: "Amit Patel", rollNo: 17, marksObtained: 35, totalMarks: 50, percentage: 70 },
    { id: "4", name: "Neha Singh", rollNo: 18, marksObtained: 45, totalMarks: 50, percentage: 90 },
    { id: "5", name: "Vikram Kumar", rollNo: 19, marksObtained: 38, totalMarks: 50, percentage: 76 },
  ])

  const handleMarkChange = (studentId: string, value: number) => {
    setEditingMarks({ ...editingMarks, [studentId]: value })
  }

  const handleSaveMarks = () => {
    alert("Marks saved successfully!")
  }

  const averagePercentage = (marks.reduce((sum, m) => sum + m.percentage, 0) / marks.length).toFixed(1)
  const topScorer = marks.reduce((max, m) => (m.percentage > max.percentage ? m : max))

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
              <h1 className="text-3xl font-bold text-gray-900">Marks Management</h1>
              <p className="text-gray-600 mt-1">Upload and manage student marks</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export Marks
            </Button>
          </div>

          {/* Exam & Subject Selection */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exam Type</label>
                  <select
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="unit-test">Unit Test</option>
                    <option value="mid-term">Mid-Term</option>
                    <option value="final">Final</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="english">English</option>
                    <option value="math">Mathematics</option>
                    <option value="science">Science</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Class 10-A</option>
                    <option>Class 10-B</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Class Average</p>
                <p className="text-3xl font-bold text-blue-600">{averagePercentage}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Highest Scorer</p>
                <p className="text-xl font-bold text-green-600">{topScorer.name}</p>
                <p className="text-sm text-gray-600">{topScorer.percentage}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Students Evaluated</p>
                <p className="text-3xl font-bold text-orange-600">{marks.length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Marks Entry */}
          <Card>
            <CardHeader>
              <CardTitle>Student Marks - {selectedExam.toUpperCase()}</CardTitle>
              <CardDescription>Total Marks: 50 | Enter marks for each student</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Roll No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Student Name</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Marks (out of 50)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Percentage</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marks.map((mark) => {
                      const percentage = editingMarks[mark.id] ? (editingMarks[mark.id] / 50) * 100 : mark.percentage
                      const grade =
                        percentage >= 90
                          ? "A+"
                          : percentage >= 80
                            ? "A"
                            : percentage >= 70
                              ? "B"
                              : percentage >= 60
                                ? "C"
                                : "D"
                      return (
                        <tr key={mark.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-600">{mark.rollNo}</td>
                          <td className="py-3 px-4 text-gray-900 font-medium">{mark.name}</td>
                          <td className="py-3 px-4 text-center">
                            <Input
                              type="number"
                              min="0"
                              max="50"
                              placeholder={mark.marksObtained.toString()}
                              onChange={(e) => handleMarkChange(mark.id, Number.parseInt(e.target.value))}
                              className="w-20 text-center mx-auto"
                            />
                          </td>
                          <td className="py-3 px-4 text-center font-semibold text-blue-600">
                            {percentage.toFixed(1)}%
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="px-3 py-1 bg-gray-100 rounded font-bold">{grade}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex gap-4 mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8" onClick={handleSaveMarks}>
              Save Marks
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
