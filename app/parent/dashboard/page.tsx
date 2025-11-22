"use client"

import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BarChart3, CreditCard, MessageSquare, TrendingUp, AlertCircle } from "lucide-react"

export default function ParentDashboard() {
  const sidebarItems = [
    { title: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Child's Performance", href: "/parent/performance", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Attendance", href: "/parent/attendance", icon: <Users className="w-5 h-5" /> },
    { title: "Fees & Payments", href: "/parent/fees", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Messages", href: "/parent/messages", icon: <MessageSquare className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Parent Portal</h1>
            <p className="text-gray-600 mt-1">Welcome! Track your child's progress</p>
          </div>

          {/* Child Info */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Rahul Kumar</h2>
                  <p className="text-gray-600">Class 10-A | Roll No. 15</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Current GPA</p>
                  <p className="text-4xl font-bold text-blue-600">8.5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatCard label="Attendance" value="96%" icon={Users} trend={{ value: 2, isPositive: true }} />
            <StatCard label="Avg Score" value="94%" icon={BarChart3} trend={{ value: 5, isPositive: true }} />
            <StatCard label="Pending Fees" value="₹5,000" icon={CreditCard} />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Recent Marks */}
            <Card>
              <CardHeader>
                <CardTitle>Latest Marks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-900 font-medium">Science Mid-Term</span>
                  <span className="text-blue-600 font-bold">50/50</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-900 font-medium">English Essay</span>
                  <span className="text-blue-600 font-bold">48/50</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-900 font-medium">Math Assignment</span>
                  <span className="text-blue-600 font-bold">45/50</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Marks
                </Button>
              </CardContent>
            </Card>

            {/* Alerts & Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Important Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-yellow-900">Activity Fee Pending</p>
                    <p className="text-xs text-yellow-700">Due by Nov 20</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Parent-Teacher Meeting</p>
                    <p className="text-xs text-blue-700">Dec 20, 2024</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Announcements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle>Messages from Teachers</CardTitle>
              <CardDescription>Latest communication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm font-semibold text-gray-900">Mrs. Anjali Singh (English)</p>
                  <p className="text-sm text-gray-600">"Great performance in the recent test!"</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="text-sm font-semibold text-gray-900">Ms. Priya Verma (Science)</p>
                  <p className="text-sm text-gray-600">"Project submission successful"</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
