"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, Eye, FileText, Download } from "lucide-react"
import { BarChart3, Users, BookOpen, Settings } from "lucide-react"

export default function AdminStudents() {
  const [students, setStudents] = useState([
    {
      id: "1",
      name: "Rahul Kumar",
      class: "10-A",
      enrollment: "ENR-001",
      section: "A",
      status: "active",
      fathersName: "Vijay Kumar",
      phone: "9876543210",
      fees: { pending: 5000, paid: 25000 },
    },
    {
      id: "2",
      name: "Priya Sharma",
      class: "10-A",
      enrollment: "ENR-002",
      section: "A",
      status: "active",
      fathersName: "Rajesh Sharma",
      phone: "9876543211",
      fees: { pending: 0, paid: 30000 },
    },
    {
      id: "3",
      name: "Amit Patel",
      class: "10-B",
      enrollment: "ENR-003",
      section: "B",
      status: "active",
      fathersName: "Suresh Patel",
      phone: "9876543212",
      fees: { pending: 10000, paid: 20000 },
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterClass, setFilterClass] = useState("all")
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredStudents = students.filter(
    (s) =>
      (s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.enrollment.includes(searchTerm)) &&
      (filterClass === "all" || s.class === filterClass),
  )

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <FileText className="w-5 h-5" /> },
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
              <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
              <p className="text-gray-600 mt-1">Manage all enrolled students</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowAddModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add New Student
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search by name or enrollment number..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                >
                  <option value="all">All Classes</option>
                  <option value="10-A">Class 10-A</option>
                  <option value="10-B">Class 10-B</option>
                  <option value="9-A">Class 9-A</option>
                </select>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Students Table */}
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Students</CardTitle>
              <CardDescription>Total: {filteredStudents.length} students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Enrollment</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Class</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Father's Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fee Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{student.name}</td>
                        <td className="py-3 px-4 text-gray-600">{student.enrollment}</td>
                        <td className="py-3 px-4 text-gray-600">{student.class}</td>
                        <td className="py-3 px-4 text-gray-600">{student.fathersName}</td>
                        <td className="py-3 px-4 text-gray-600">{student.phone}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              student.fees.pending === 0
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {student.fees.pending === 0 ? "Paid" : `₹${student.fees.pending} Pending`}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" title="View">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" title="Edit">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Total Students</p>
                  <p className="text-4xl font-bold text-blue-600">{students.length}</p>
                  <p className="text-xs text-gray-500 mt-2">Across all classes</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Fee Collected</p>
                  <p className="text-4xl font-bold text-green-600">₹75,000</p>
                  <p className="text-xs text-gray-500 mt-2">This month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Avg Attendance</p>
                  <p className="text-4xl font-bold text-orange-600">92%</p>
                  <p className="text-xs text-gray-500 mt-2">Current month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
