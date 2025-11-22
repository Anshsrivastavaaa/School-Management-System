"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, BookOpen, Settings, Plus, Search, Edit2, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function AdminTeachers() {
  const [teachers] = useState([
    {
      id: "1",
      name: "Mrs. Anjali Singh",
      subject: "English",
      class: "10-A",
      qualification: "B.Ed",
      joinDate: "2020-01-15",
      experience: 8,
    },
    {
      id: "2",
      name: "Mr. Rajesh Kumar",
      subject: "Mathematics",
      class: "10-A,10-B",
      qualification: "M.Sc",
      joinDate: "2019-06-01",
      experience: 12,
    },
    {
      id: "3",
      name: "Ms. Priya Verma",
      subject: "Science",
      class: "10-B",
      qualification: "B.Sc B.Ed",
      joinDate: "2021-03-20",
      experience: 5,
    },
  ])

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Certificates", href: "/admin/certificates", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Teacher Management</h1>
              <p className="text-gray-600 mt-1">Manage teaching staff and assignments</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Teacher
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input placeholder="Search by name or subject..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teaching Staff</CardTitle>
              <CardDescription>Total: {teachers.length} teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                        <p className="text-sm text-gray-600">{teacher.subject}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-600">Class Assigned:</span>{" "}
                        <span className="font-semibold">{teacher.class}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Qualification:</span>{" "}
                        <span className="font-semibold">{teacher.qualification}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Experience:</span>{" "}
                        <span className="font-semibold">{teacher.experience} years</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Join Date:</span>{" "}
                        <span className="font-semibold">{teacher.joinDate}</span>
                      </p>
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
