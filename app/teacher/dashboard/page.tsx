"use client"

import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, MessageSquare, CheckCircle2, Plus, BarChart3, FileText } from "lucide-react"
import { useState } from "react"

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState("10-A")

  const sidebarItems = [
    { title: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Attendance", href: "/teacher/attendance", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Marks", href: "/teacher/marks", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Messages", href: "/teacher/messages", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "Assignments", href: "/teacher/assignments", icon: <FileText className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-gray-600 mt-1">Class {selectedClass} - English Subject</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Mark Attendance
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatCard label="Total Students" value="45" icon={Users} />
            <StatCard label="Present Today" value="42" icon={CheckCircle2} trend={{ value: 93, isPositive: true }} />
            <StatCard label="Pending Marks" value="23" icon={BookOpen} />
          </div>

          {/* Class Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage classroom activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Upload Marks
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Assignment
                </Button>
              </CardContent>
            </Card>

            {/* Attendance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Summary (This Month)</CardTitle>
                <CardDescription>Class-wise statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Present</span>
                    <span className="text-lg font-bold text-green-600">92%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-semibold text-gray-900">On Leave</span>
                    <span className="text-lg font-bold text-yellow-600">5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Absent</span>
                    <span className="text-lg font-bold text-red-600">3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Messages */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Parent Messages</CardTitle>
              <CardDescription>Unread messages from parents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                    P
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Inquiry about exam schedule</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
