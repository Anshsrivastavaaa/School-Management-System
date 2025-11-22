"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, BarChart3, CreditCard, FileText, Settings, Plus } from "lucide-react"

export default function AdminDashboard() {
  const [totalStudents, setTotalStudents] = useState(0)
  const [totalTeachers, setTotalTeachers] = useState(0)
  const [pendingFees, setPendingFees] = useState(0)
  const [totalFees, setTotalFees] = useState(0)

  useEffect(() => {
    // Mock data loading
    setTotalStudents(1250)
    setTotalTeachers(85)
    setPendingFees(45)
    setTotalFees(125000)
  }, [])

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Certificates", href: "/admin/certificates", icon: <FileText className="w-5 h-5" /> },
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
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome to school management system</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              label="Total Students"
              value={totalStudents}
              icon={Users}
              trend={{ value: 5, isPositive: true }}
            />
            <StatCard
              label="Active Teachers"
              value={totalTeachers}
              icon={BookOpen}
              trend={{ value: 2, isPositive: true }}
            />
            <StatCard
              label="Pending Fees"
              value={pendingFees}
              icon={CreditCard}
              trend={{ value: 3, isPositive: false }}
            />
            <StatCard
              label="Total Collections"
              value={`₹${totalFees}`}
              icon={BarChart3}
              trend={{ value: 8, isPositive: true }}
            />
          </div>

          {/* Management Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage school operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Student
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Register New Teacher
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Fee Receipts
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Export Reports
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>System Features</CardTitle>
                <CardDescription>Available modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Student Management</h4>
                    <p className="text-sm text-blue-700">Enrollment, profiles, and records</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900">Fee Collection</h4>
                    <p className="text-sm text-green-700">Online payments and receipts</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900">Certificates</h4>
                    <p className="text-sm text-purple-700">Digital and printed versions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Log */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest school operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold text-gray-900">New Student Enrolled</p>
                    <p className="text-sm text-gray-600">Raj Kumar - Class 10-A</p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-semibold text-gray-900">Fee Payment Received</p>
                    <p className="text-sm text-gray-600">Monthly tuition - 45 students</p>
                  </div>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Certificate Issued</p>
                    <p className="text-sm text-gray-600">Transfer Certificate - 5 students</p>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
