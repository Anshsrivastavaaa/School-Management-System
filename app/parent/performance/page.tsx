"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, MessageSquare, TrendingUp, Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function ParentPerformance() {
  const performanceData = [
    { exam: "Unit Test 1", english: 42, math: 38, science: 45, hindi: 40 },
    { exam: "Unit Test 2", english: 45, math: 42, science: 48, hindi: 43 },
    { exam: "Mid-Term", english: 48, math: 45, science: 50, hindi: 46 },
  ]

  const subjectStats = [
    { subject: "English", marks: 48, total: 50, percentage: 96, trend: "up" },
    { subject: "Mathematics", marks: 45, total: 50, percentage: 90, trend: "up" },
    { subject: "Science", marks: 50, total: 50, percentage: 100, trend: "up" },
    { subject: "Hindi", marks: 46, total: 50, percentage: 92, trend: "stable" },
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Performance Analysis</h1>
              <p className="text-gray-600 mt-1">Rahul Kumar - Class 10-A</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Overall GPA</p>
                <p className="text-4xl font-bold text-blue-600">8.5</p>
                <p className="text-xs text-gray-500 mt-2">Excellent</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Avg Score</p>
                <p className="text-4xl font-bold text-green-600">94%</p>
                <p className="text-xs text-green-600 mt-2">↑ 5% from last</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Best Subject</p>
                <p className="text-4xl font-bold text-orange-600">Science</p>
                <p className="text-xs text-gray-500 mt-2">100%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Rank</p>
                <p className="text-4xl font-bold text-purple-600">2</p>
                <p className="text-xs text-gray-500 mt-2">Out of 45</p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trend Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Subject-wise Performance Trend</CardTitle>
              <CardDescription>Marks progression across exams</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="exam" />
                  <YAxis domain={[0, 50]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="english" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="math" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="hindi" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Latest Marks by Subject</CardTitle>
              <CardDescription>Most recent exam results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectStats.map((subject) => (
                  <div key={subject.subject} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
                      <span className="text-lg font-bold text-blue-600">
                        {subject.marks}/{subject.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${subject.percentage}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{subject.percentage}%</span>
                      <span
                        className={`text-xs font-semibold ${subject.trend === "up" ? "text-green-600" : "text-gray-600"}`}
                      >
                        {subject.trend === "up" ? "↑ Improving" : "→ Stable"}
                      </span>
                    </div>
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
