"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Users, BookOpen, BarChart3, CreditCard, FileText, Settings, Plus } from "lucide-react"
import { toast } from "sonner"

interface StudentEntry {
  studId: string
  name: string
  class: string
  rollNo: string
  parentEmail: string
  parentNumber: string
}

const emptyForm: StudentEntry = {
  studId: "",
  name: "",
  class: "",
  rollNo: "",
  parentEmail: "",
  parentNumber: "",
}

export default function AdminDashboard() {
  const [totalStudents, setTotalStudents] = useState(0)
  const [totalTeachers, setTotalTeachers] = useState(0)
  const [pendingFees, setPendingFees] = useState(0)
  const [totalFees, setTotalFees] = useState(0)

  const [showAddDialog, setShowAddDialog] = useState(false)
  const [formData, setFormData] = useState<StudentEntry>(emptyForm)
  const [students, setStudents] = useState<StudentEntry[]>([])

  useEffect(() => {
    // Mock data loading
    setTotalStudents(1250)
    setTotalTeachers(85)
    setPendingFees(45)
    setTotalFees(125000)
  }, [])

  const handleInputChange = (field: keyof StudentEntry, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddStudent = () => {
    // Validation
    if (!formData.studId.trim()) {
      toast.error("Please enter Student ID")
      return
    }
    if (!formData.name.trim()) {
      toast.error("Please enter Student Name")
      return
    }
    if (!formData.class) {
      toast.error("Please select a Class")
      return
    }
    if (!formData.rollNo.trim()) {
      toast.error("Please enter Roll Number")
      return
    }
    if (!formData.parentEmail.trim()) {
      toast.error("Please enter Parent Email")
      return
    }
    if (!formData.parentNumber.trim()) {
      toast.error("Please enter Parent Number")
      return
    }

    // Check for duplicate Student ID
    if (students.some((s) => s.studId === formData.studId.trim())) {
      toast.error("A student with this ID already exists")
      return
    }

    // Add student
    setStudents((prev) => [...prev, { ...formData }])
    setTotalStudents((prev) => prev + 1)
    setFormData(emptyForm)
    setShowAddDialog(false)
    toast.success(`Student "${formData.name}" added successfully!`)
  }

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
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowAddDialog(true)}>
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
                <Button variant="outline" className="w-full justify-start bg-transparent" onClick={() => setShowAddDialog(true)}>
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

          {/* Recently Added Students */}
          {students.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recently Added Students</CardTitle>
                <CardDescription>{students.length} student(s) added this session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Student ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Class</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Roll No</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Parent Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Parent Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.studId} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-600 font-mono">{student.studId}</td>
                          <td className="py-3 px-4 text-gray-900 font-medium">{student.name}</td>
                          <td className="py-3 px-4 text-gray-600">{student.class}</td>
                          <td className="py-3 px-4 text-gray-600">{student.rollNo}</td>
                          <td className="py-3 px-4 text-gray-600">{student.parentEmail}</td>
                          <td className="py-3 px-4 text-gray-600">{student.parentNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

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

      {/* Add Student Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              Fill in the student details below. All fields are required.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Student ID */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="studId" className="text-right font-medium">
                Student ID
              </Label>
              <Input
                id="studId"
                placeholder="e.g. STUD-001"
                className="col-span-3"
                value={formData.studId}
                onChange={(e) => handleInputChange("studId", e.target.value)}
              />
            </div>

            {/* Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Full name"
                className="col-span-3"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            {/* Class */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="class" className="text-right font-medium">
                Class
              </Label>
              <div className="col-span-3">
                <Select value={formData.class} onValueChange={(value) => handleInputChange("class", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Class 1</SelectItem>
                    <SelectItem value="2">Class 2</SelectItem>
                    <SelectItem value="3">Class 3</SelectItem>
                    <SelectItem value="4">Class 4</SelectItem>
                    <SelectItem value="5">Class 5</SelectItem>
                    <SelectItem value="6">Class 6</SelectItem>
                    <SelectItem value="7">Class 7</SelectItem>
                    <SelectItem value="8">Class 8</SelectItem>
                    <SelectItem value="9-A">Class 9-A</SelectItem>
                    <SelectItem value="9-B">Class 9-B</SelectItem>
                    <SelectItem value="10-A">Class 10-A</SelectItem>
                    <SelectItem value="10-B">Class 10-B</SelectItem>
                    <SelectItem value="11-Science">Class 11 - Science</SelectItem>
                    <SelectItem value="11-Commerce">Class 11 - Commerce</SelectItem>
                    <SelectItem value="12-Science">Class 12 - Science</SelectItem>
                    <SelectItem value="12-Commerce">Class 12 - Commerce</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Roll No */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rollNo" className="text-right font-medium">
                Roll No
              </Label>
              <Input
                id="rollNo"
                placeholder="e.g. 01"
                className="col-span-3"
                value={formData.rollNo}
                onChange={(e) => handleInputChange("rollNo", e.target.value)}
              />
            </div>

            {/* Parent Email */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="parentEmail" className="text-right font-medium">
                Parent Email
              </Label>
              <Input
                id="parentEmail"
                type="email"
                placeholder="parent@example.com"
                className="col-span-3"
                value={formData.parentEmail}
                onChange={(e) => handleInputChange("parentEmail", e.target.value)}
              />
            </div>

            {/* Parent Number */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="parentNumber" className="text-right font-medium">
                Parent Number
              </Label>
              <Input
                id="parentNumber"
                type="tel"
                placeholder="e.g. 9876543210"
                className="col-span-3"
                value={formData.parentNumber}
                onChange={(e) => handleInputChange("parentNumber", e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => { setShowAddDialog(false); setFormData(emptyForm) }}>
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddStudent}>
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

