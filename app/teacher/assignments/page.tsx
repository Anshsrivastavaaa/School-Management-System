"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, MessageSquare, BarChart3, Plus, Trash2, Edit2 } from "lucide-react"

export default function TeacherAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: "1",
      title: "Chapter 5 - Equations",
      description: "Solve problems 1-10",
      dueDate: "2024-11-25",
      subject: "Mathematics",
      submittedCount: 32,
      totalCount: 45,
    },
    {
      id: "2",
      title: "Essay on Independence",
      description: "Write 500 words essay",
      dueDate: "2024-11-28",
      subject: "English",
      submittedCount: 28,
      totalCount: 45,
    },
    {
      id: "3",
      title: "Science Project",
      description: "Create a model",
      dueDate: "2024-11-30",
      subject: "Science",
      submittedCount: 15,
      totalCount: 45,
    },
  ])

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
              <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
              <p className="text-gray-600 mt-1">Manage assignments and track submissions</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Assignment
            </Button>
          </div>

          {/* Active Assignments */}
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-md transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{assignment.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-gray-600">
                          <span className="font-semibold">Subject:</span> {assignment.subject}
                        </span>
                        <span className="text-gray-600">
                          <span className="font-semibold">Due:</span> {assignment.dueDate}
                        </span>
                        <span className="text-blue-600 font-semibold">
                          {assignment.submittedCount}/{assignment.totalCount} Submitted
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(assignment.submittedCount / assignment.totalCount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create New Assignment */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Create New Assignment</CardTitle>
              <CardDescription>Add a new assignment for your class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Assignment title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    placeholder="Assignment description"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Assignment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
