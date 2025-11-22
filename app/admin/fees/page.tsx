"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, BookOpen, Settings, CreditCard, CheckCircle2, AlertCircle, Download } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AdminFees() {
  const [feeRecords, setFeeRecords] = useState([
    {
      id: "1",
      studentName: "Rahul Kumar",
      enrollment: "ENR-001",
      feeType: "tuition",
      amount: 5000,
      dueDate: "2024-11-30",
      status: "pending",
      class: "10-A",
    },
    {
      id: "2",
      studentName: "Priya Sharma",
      enrollment: "ENR-002",
      feeType: "tuition",
      amount: 5000,
      dueDate: "2024-11-15",
      status: "paid",
      class: "10-A",
      paidDate: "2024-11-14",
    },
    {
      id: "3",
      studentName: "Amit Patel",
      enrollment: "ENR-003",
      feeType: "exam",
      amount: 3000,
      dueDate: "2024-10-30",
      status: "overdue",
      class: "10-B",
    },
  ])

  const [filterStatus, setFilterStatus] = useState("all")

  const filteredRecords = feeRecords.filter((f) => filterStatus === "all" || f.status === filterStatus)

  const stats = {
    totalCollected: 10000,
    pending: 8000,
    overdue: 3000,
    collection: 55,
  }

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Certificates", href: "/admin/certificates", icon: <BookOpen className="w-5 h-5" /> },
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
              <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
              <p className="text-gray-600 mt-1">Track and manage student fees</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">Total Collected</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.totalCollected.toLocaleString()}</p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.pending.toLocaleString()}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">Overdue</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.overdue.toLocaleString()}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-600">Collection %</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.collection}%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Search by student name or enrollment..." className="flex-1" />
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Fee Records Table */}
          <Card>
            <CardHeader>
              <CardTitle>Fee Records</CardTitle>
              <CardDescription>Detailed fee collection status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Student</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Class</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fee Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Due Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map((record) => (
                      <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{record.studentName}</td>
                        <td className="py-3 px-4 text-gray-600">{record.class}</td>
                        <td className="py-3 px-4 text-gray-600 capitalize">{record.feeType}</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold">₹{record.amount}</td>
                        <td className="py-3 px-4 text-gray-600">{record.dueDate}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              record.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : record.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {record.status !== "paid" && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Mark Paid
                            </Button>
                          )}
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
