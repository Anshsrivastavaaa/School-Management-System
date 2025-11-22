"use client"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, BookOpen, Settings, Download } from "lucide-react"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function FeesAnalytics() {
  const collectionData = [
    { month: "January", collected: 450000, target: 500000 },
    { month: "February", collected: 480000, target: 500000 },
    { month: "March", collected: 520000, target: 500000 },
    { month: "April", collected: 510000, target: 500000 },
    { month: "May", collected: 530000, target: 500000 },
    { month: "November", collected: 450000, target: 500000 },
  ]

  const feeTypeData = [
    { name: "Tuition", value: 60, amount: 3000000, color: "#3b82f6" },
    { name: "Exam", value: 20, amount: 1000000, color: "#10b981" },
    { name: "Activity", value: 12, amount: 600000, color: "#f59e0b" },
    { name: "Other", value: 8, amount: 400000, color: "#8b5cf6" },
  ]

  const classAnalysis = [
    { class: "10-A", total: 45, paidFull: 42, pending: 2, overdue: 1 },
    { class: "10-B", total: 42, paidFull: 38, pending: 3, overdue: 1 },
    { class: "9-A", total: 48, paidFull: 45, pending: 2, overdue: 1 },
  ]

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Analytics", href: "/admin/fees/analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fees Analytics</h1>
              <p className="text-gray-600 mt-1">Comprehensive fee collection analysis and reports</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Total Collected</p>
                <p className="text-3xl font-bold text-green-600">₹34L</p>
                <p className="text-xs text-green-600 mt-2">↑ 12% vs last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Collection Rate</p>
                <p className="text-3xl font-bold text-blue-600">94%</p>
                <p className="text-xs text-gray-500 mt-2">Target: 95%</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Pending Amount</p>
                <p className="text-3xl font-bold text-yellow-600">₹2L</p>
                <p className="text-xs text-yellow-600 mt-2">30+ days overdue</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Students Paid</p>
                <p className="text-3xl font-bold text-purple-600">1,210</p>
                <p className="text-xs text-gray-500 mt-2">Out of 1,285</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Collection Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Collection Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={collectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="target" fill="#e5e7eb" />
                    <Bar dataKey="collected" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Fee Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Fee Distribution by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={feeTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {feeTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Class-wise Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Class-wise Payment Status</CardTitle>
              <CardDescription>Fee collection by class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Class</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Total Students</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Fully Paid</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Pending</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Overdue</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Collection %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classAnalysis.map((cls) => (
                      <tr key={cls.class} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-semibold text-gray-900">{cls.class}</td>
                        <td className="py-3 px-4 text-center text-gray-600">{cls.total}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                            {cls.paidFull}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">
                            {cls.pending}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-semibold">
                            {cls.overdue}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-blue-600">
                          {((cls.paidFull / cls.total) * 100).toFixed(0)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
