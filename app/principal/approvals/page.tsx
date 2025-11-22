"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, FileText, CheckCircle2, Clock, Eye, Check, X } from "lucide-react"
import { CertificateTemplate } from "@/components/certificate-template"

export default function PrincipalApprovals() {
  const [certificates, setCertificates] = useState([
    {
      id: "1",
      student: "Rahul Kumar",
      enrollment: "ENR-001",
      class: "10-A",
      type: "transfer",
      status: "pending-approval",
      requestDate: "2024-11-15",
    },
    {
      id: "2",
      student: "Priya Sharma",
      enrollment: "ENR-002",
      class: "10-A",
      type: "bonafide",
      status: "pending-approval",
      requestDate: "2024-11-16",
    },
    {
      id: "3",
      student: "Amit Patel",
      enrollment: "ENR-003",
      class: "10-B",
      type: "leaving",
      status: "pending-approval",
      requestDate: "2024-11-17",
    },
    {
      id: "4",
      student: "Neha Singh",
      enrollment: "ENR-004",
      class: "10-B",
      type: "conduct",
      status: "pending-approval",
      requestDate: "2024-11-18",
    },
  ])

  const [selectedCert, setSelectedCert] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const selected = certificates.find((c) => c.id === selectedCert)

  const handleApprove = (id: string) => {
    setCertificates(certificates.map((c) => (c.id === id ? { ...c, status: "approved" } : c)))
    setSelectedCert(null)
  }

  const handleReject = (id: string) => {
    setCertificates(certificates.map((c) => (c.id === id ? { ...c, status: "draft" } : c)))
  }

  const pendingCount = certificates.filter((c) => c.status === "pending-approval").length

  const sidebarItems = [
    { title: "Dashboard", href: "/principal/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Approvals", href: "/principal/approvals", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Reports", href: "/principal/reports", icon: <FileText className="w-5 h-5" /> },
    { title: "Staff", href: "/principal/staff", icon: <Users className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Certificate Approvals</h1>
            <p className="text-gray-600 mt-1">Review and approve digital certificates</p>
          </div>

          {/* Pending Count */}
          <Card className="mb-8 bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="font-bold text-yellow-900">{pendingCount} Certificates Pending Approval</p>
                  <p className="text-sm text-yellow-700">Action required</p>
                </div>
              </div>
              <span className="text-3xl font-bold text-yellow-600">{pendingCount}</span>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Certificate List */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Pending Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {certificates
                      .filter((c) => c.status === "pending-approval")
                      .map((cert) => (
                        <div
                          key={cert.id}
                          onClick={() => setSelectedCert(cert.id)}
                          className={`p-3 rounded-lg cursor-pointer transition ${
                            selectedCert === cert.id
                              ? "bg-blue-100 border-l-4 border-blue-600"
                              : "bg-gray-50 hover:bg-gray-100"
                          }`}
                        >
                          <p className="font-semibold text-gray-900 text-sm">{cert.student}</p>
                          <p className="text-xs text-gray-600">
                            {cert.type.toUpperCase()} • {cert.class}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{cert.requestDate}</p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview & Actions */}
            <div className="lg:col-span-2">
              {selected ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{selected.type.toUpperCase()} Certificate</span>
                      <Button size="sm" variant="outline" onClick={() => setShowPreview(!showPreview)}>
                        <Eye className="w-4 h-4 mr-1" />
                        {showPreview ? "Hide" : "Preview"}
                      </Button>
                    </CardTitle>
                    <CardDescription>Student: {selected.student}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Certificate Details */}
                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-600">Student Name</p>
                          <p className="font-semibold text-gray-900">{selected.student}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Enrollment</p>
                          <p className="font-semibold text-gray-900">{selected.enrollment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Class</p>
                          <p className="font-semibold text-gray-900">{selected.class}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Certificate Type</p>
                          <p className="font-semibold text-gray-900 capitalize">{selected.type}</p>
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    {showPreview && (
                      <div className="border border-gray-300 rounded-lg p-4 bg-white max-h-96 overflow-y-auto">
                        <div className="scale-50 origin-top-left w-[200%] h-[200%]">
                          <CertificateTemplate
                            studentName={selected.student}
                            enrollmentNumber={selected.enrollment}
                            className={selected.class}
                            certificateType={selected.type as any}
                            issuedDate={new Date().toLocaleDateString()}
                            certificateNumber={`CERT-${Date.now()}`}
                            principalName="Dr. Rajesh Kumar Singh"
                            schoolName="Government School"
                          />
                        </div>
                      </div>
                    )}

                    {/* Approval Options */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-3">Action</p>
                      <div className="space-y-2">
                        <textarea
                          placeholder="Add notes or remarks (optional)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove(selected.id)}
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            className="flex-1 bg-red-600 hover:bg-red-700"
                            onClick={() => handleReject(selected.id)}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a certificate to review</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Approved Certificates */}
          {certificates.some((c) => c.status === "approved") && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Recently Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-4 font-semibold">Student</th>
                        <th className="text-left py-2 px-4 font-semibold">Type</th>
                        <th className="text-left py-2 px-4 font-semibold">Status</th>
                        <th className="text-left py-2 px-4 font-semibold">Certificate No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates
                        .filter((c) => c.status === "approved")
                        .map((cert) => (
                          <tr key={cert.id} className="border-b border-gray-100">
                            <td className="py-2 px-4 text-gray-900 font-medium">{cert.student}</td>
                            <td className="py-2 px-4 text-gray-600 capitalize">{cert.type}</td>
                            <td className="py-2 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                                Approved
                              </span>
                            </td>
                            <td className="py-2 px-4 text-gray-600">CERT-{cert.id}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
