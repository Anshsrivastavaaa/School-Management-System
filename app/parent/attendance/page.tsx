"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, MessageSquare, TrendingUp, Calendar, CheckCircle2, AlertCircle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function ParentAttendance() {
  const attendanceData = [
    { month: "September", present: 22, absent: 2, leave: 1 },
    { month: "October", present: 20, absent: 3, leave: 2 },
    { month: "November", present: 23, absent: 1, leave: 1 },
  ]

  const recentAttendance = [
    { date: "2024-11-18", status: "present" },
    { date: "2024-11-17", status: "present" },
    { date: "2024-11-16", status: "absent" },
    { date: "2024-11-15", status: "present" },
    { date: "2024-11-14", status: "leave" },
  ]

  const sidebarItems = [
    { title: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Child's Performance", href: "/parent/performance", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Attendance", href: "/parent/attendance", icon: <Users className="w-5 h-5" /> },
    { title: "Fees & Payments", href: "/parent/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Messages", href: "/parent/messages", icon: <MessageSquare className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Attendance Details</h1>
            <p className="text-gray-600 mt-1">Rahul Kumar - Class 10-A</p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Present (This Month)</p>
                <p className="text-3xl font-bold text-green-600 mt-1">23</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Absent (This Month)</p>
                <p className="text-3xl font-bold text-red-600 mt-1">1</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Calendar className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Leave (This Month)</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">1</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Attendance %</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">96%</p>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Trend */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
              <CardDescription>Last 3 months attendance summary</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="#10b981" />
                  <Bar dataKey="absent" fill="#ef4444" />
                  <Bar dataKey="leave" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Days */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Attendance</CardTitle>
              <CardDescription>Last 5 school days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentAttendance.map((record) => (
                  <div key={record.date} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900 font-medium">{record.date}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        record.status === "present"
                          ? "bg-green-100 text-green-800"
                          : record.status === "absent"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
