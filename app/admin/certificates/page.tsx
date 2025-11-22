"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, BookOpen, Settings, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function AdminCertificates() {
  const [certificates] = useState([
    { id: "1", student: "Rahul Kumar", type: "transfer", status: "pending-approval", requestDate: "2024-11-15" },
    {
      id: "2",
      student: "Priya Sharma",
      type: "bonafide",
      status: "approved",
      requestDate: "2024-11-10",
      issueDate: "2024-11-12",
    },
    { id: "3", student: "Amit Patel", type: "leaving", status: "draft", requestDate: "2024-11-18" },
  ])

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Students", href: "/admin/students", icon: <Users className="w-5 h-5" /> },
    { title: "Teachers", href: "/admin/teachers", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Fees", href: "/admin/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Certificates", href: "/admin/certificates", icon: <FileText className="w-5 h-5" /> },
    { title: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />
      case "pending-approval":
        return <Clock className="w-5 h-5 text-yellow-600" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    const classes = {
      approved: "bg-green-100 text-green-800",
      "pending-approval": "bg-yellow-100 text-yellow-800",
      draft: "bg-gray-100 text-gray-800",
    }
    return classes[status as keyof typeof classes] || ""
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Management</h1>
            <p className="text-gray-600">Manage digital certificates and approvals</p>
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Issued</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Approval</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-3xl font-bold">2</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-gray-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certificates List */}
          <Card>
            <CardHeader>
              <CardTitle>Certificate Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {getStatusIcon(cert.status)}
                      <div>
                        <p className="font-semibold text-gray-900">{cert.student}</p>
                        <p className="text-sm text-gray-600 capitalize">
                          {cert.type} Certificate • Requested {cert.requestDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(cert.status)}`}>
                        {cert.status.replace("-", " ").toUpperCase()}
                      </span>
                      {cert.status === "pending-approval" && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                      )}
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
