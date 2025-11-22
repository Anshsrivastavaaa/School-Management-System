"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Share2, Plus, CheckCircle2, Clock } from "lucide-react"
import { CertificateTemplate } from "@/components/certificate-template"

export default function StudentCertificates() {
  const [certificates, setCertificates] = useState([
    { id: "1", type: "bonafide", status: "issued", issueDate: "2024-11-10", certificateNo: "CERT-001" },
    { id: "2", type: "conduct", status: "issued", issueDate: "2024-11-12", certificateNo: "CERT-002" },
  ])

  const [selectedCert, setSelectedCert] = useState<string | null>(null)
  const [requestType, setRequestType] = useState<"transfer" | "bonafide" | "leaving" | "conduct" | null>(null)

  const selected = certificates.find((c) => c.id === selectedCert)

  const sidebarItems = [
    { title: "Dashboard", href: "/student/dashboard", icon: <FileText className="w-5 h-5" /> },
    { title: "Certificates", href: "/student/certificates", icon: <FileText className="w-5 h-5" /> },
  ]

  const handleRequestCertificate = (type: any) => {
    const newCert = {
      id: `cert-${Date.now()}`,
      type,
      status: "pending",
      issueDate: null,
      certificateNo: null,
    }
    setCertificates([...certificates, newCert])
    setRequestType(null)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Certificates</h1>
              <p className="text-gray-600 mt-1">Rahul Kumar - Class 10-A</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setRequestType("bonafide")}>
              <Plus className="w-4 h-4 mr-2" />
              Request Certificate
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Certificates List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Your Certificates</CardTitle>
                  <CardDescription>{certificates.length} total</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        onClick={() => setSelectedCert(cert.id)}
                        className={`p-3 rounded-lg cursor-pointer transition ${
                          selectedCert === cert.id
                            ? "bg-blue-100 border-l-4 border-blue-600"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-gray-900 text-sm capitalize">{cert.type}</p>
                          {cert.status === "issued" ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          ) : (
                            <Clock className="w-4 h-4 text-yellow-600" />
                          )}
                        </div>
                        <p className="text-xs text-gray-600">
                          {cert.status === "issued" ? `Issued ${cert.issueDate}` : "Pending approval"}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certificate View */}
            <div className="lg:col-span-2">
              {selected ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{selected.type} Certificate</CardTitle>
                    <CardDescription>
                      {selected.status === "issued" ? "Status: Issued" : "Status: Pending Approval"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selected.status === "issued" && (
                      <>
                        <div className="border border-gray-300 rounded-lg p-4 bg-white max-h-96 overflow-y-auto">
                          <div className="scale-50 origin-top-left w-[200%] h-[200%]">
                            <CertificateTemplate
                              studentName="Rahul Kumar"
                              enrollmentNumber="ENR-001"
                              className="10-A"
                              certificateType={selected.type as any}
                              issuedDate={selected.issueDate || ""}
                              certificateNumber={selected.certificateNo || ""}
                              principalName="Dr. Rajesh Kumar Singh"
                              schoolName="Government School"
                            />
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-700">
                            <strong>Certificate No:</strong> {selected.certificateNo}
                          </p>
                          <p className="text-sm text-green-700 mt-1">
                            <strong>Issued Date:</strong> {selected.issueDate}
                          </p>
                        </div>
                      </>
                    )}

                    {selected.status === "pending" && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                        <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                        <p className="text-yellow-900 font-semibold">Pending Approval</p>
                        <p className="text-sm text-yellow-700 mt-2">
                          Your certificate request is under review by the principal. You'll be notified once it's
                          approved.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a certificate to view</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Request Certificate Modal */}
          {requestType && (
            <Card className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:w-full md:max-w-md md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-50">
              <CardHeader>
                <CardTitle>Request Certificate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as any)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="transfer">Transfer Certificate</option>
                    <option value="bonafide">Bonafide Certificate</option>
                    <option value="leaving">Leaving Certificate</option>
                    <option value="conduct">Conduct Certificate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Purpose (Optional)</label>
                  <textarea
                    placeholder="Mention the purpose of certificate..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setRequestType(null)}>
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleRequestCertificate(requestType)}
                  >
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {requestType && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setRequestType(null)} />}
        </div>
      </main>
    </div>
  )
}
