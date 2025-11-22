"use client"

import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, FileText, TrendingUp, Download, CheckCircle2 } from "lucide-react"

export default function PrincipalDashboard() {
  const sidebarItems = [
    { title: "Dashboard", href: "/principal/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Approvals", href: "/principal/approvals", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Reports", href: "/principal/reports", icon: <FileText className="w-5 h-5" /> },
    { title: "Staff", href: "/principal/staff", icon: <Users className="w-5 h-5" /> },
    { title: "Performance", href: "/principal/performance", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Principal Dashboard</h1>
              <p className="text-gray-600 mt-1">School Performance Overview</p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Students" value="1,250" icon={Users} trend={{ value: 5, isPositive: true }} />
            <StatCard label="Avg Attendance" value="92%" icon={CheckCircle2} trend={{ value: 2, isPositive: true }} />
            <StatCard label="Pass Rate" value="87%" icon={TrendingUp} trend={{ value: 4, isPositive: true }} />
            <StatCard label="Fee Collection" value="₹25L" icon={BarChart3} trend={{ value: 8, isPositive: true }} />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Certificates and documents awaiting approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Transfer Certificates</p>
                      <p className="text-xs text-gray-600">Awaiting approval</p>
                    </div>
                    <span className="text-lg font-bold text-amber-600">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Bonafide Certificates</p>
                      <p className="text-xs text-gray-600">Awaiting approval</p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Leave Applications</p>
                      <p className="text-xs text-gray-600">Staff requests</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">3</span>
                  </div>
                  <Button className="w-full mt-4">Review All Approvals</Button>
                </div>
              </CardContent>
            </Card>

            {/* School Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Class-wise performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Class 10-A</p>
                      <p className="text-xs text-gray-600">45 Students</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">89%</p>
                      <p className="text-xs text-gray-600">Pass Rate</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">Class 10-B</p>
                      <p className="text-xs text-gray-600">42 Students</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">85%</p>
                      <p className="text-xs text-gray-600">Pass Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Summary */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Key statistics for the current academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <p className="text-sm text-blue-600 font-semibold mb-2">Total Revenue</p>
                  <p className="text-3xl font-bold text-blue-900">₹45,00,000</p>
                  <p className="text-xs text-blue-700 mt-2">From all fee collections</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <p className="text-sm text-green-600 font-semibold mb-2">Staff Strength</p>
                  <p className="text-3xl font-bold text-green-900">85</p>
                  <p className="text-xs text-green-700 mt-2">Teachers + Admin staff</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <p className="text-sm text-purple-600 font-semibold mb-2">Overall Grade</p>
                  <p className="text-3xl font-bold text-purple-900">A+</p>
                  <p className="text-xs text-purple-700 mt-2">School excellence rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
