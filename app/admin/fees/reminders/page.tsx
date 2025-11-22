"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, BookOpen, Settings, Send, Mail, MessageSquare, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function FeeReminders() {
  const [overdueFees] = useState([
    {
      id: "1",
      student: "Amit Patel",
      class: "10-B",
      amount: 10000,
      daysOverdue: 35,
      parent: "Suresh Patel",
      phone: "9876543212",
      email: "suresh@email.com",
    },
    {
      id: "2",
      student: "Vikram Kumar",
      class: "9-A",
      amount: 5000,
      daysOverdue: 15,
      parent: "Rajesh Kumar",
      phone: "9876543219",
      email: "rajesh@email.com",
    },
    {
      id: "3",
      student: "Anjali Patel",
      class: "10-A",
      amount: 3000,
      daysOverdue: 8,
      parent: "Ramesh Patel",
      phone: "9876543220",
      email: "ramesh@email.com",
    },
  ])

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Reminders", href: "/admin/fees/reminders", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Fee Collection Reminders</h1>
            <p className="text-gray-600 mt-1">Send automated reminders to parents for pending fees</p>
          </div>

          {/* Overdue Summary */}
          <Card className="mb-8 bg-red-50 border-red-200">
            <CardContent className="pt-6 flex items-center gap-4">
              <AlertCircle className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-red-900">{overdueFees.length} Overdue Fees</p>
                <p className="text-sm text-red-700">
                  Total amount pending: ₹{overdueFees.reduce((sum, f) => sum + f.amount, 0).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overdue List */}
          <Card>
            <CardHeader>
              <CardTitle>Overdue Fees - Action Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overdueFees.map((fee) => (
                  <div key={fee.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900 text-lg">{fee.student}</h3>
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-bold rounded">
                            {fee.daysOverdue} days overdue
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">{fee.class}</span> | Parent: {fee.parent}
                        </p>
                        <p className="text-2xl font-bold text-red-600">₹{fee.amount}</p>
                      </div>
                      <div className="flex flex-col gap-2 w-full md:w-auto">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Reminder
                        </Button>
                        <Button variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          SMS Reminder
                        </Button>
                        <Button variant="outline">
                          <Send className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bulk Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Bulk Reminders</CardTitle>
              <CardDescription>Send reminders to multiple parents at once</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>7+ Days Overdue</option>
                    <option>15+ Days Overdue</option>
                    <option>30+ Days Overdue</option>
                    <option>All Overdue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message Channel</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-gray-700">SMS</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Reminders to {overdueFees.length} Parents
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
