"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, MessageSquare, TrendingUp, CreditCard, FileText } from "lucide-react"

export default function ParentFees() {
  const feeRecords = [
    { id: "1", type: "Monthly Tuition", amount: 5000, dueDate: "2024-11-30", status: "pending", receipt: null },
    {
      id: "2",
      type: "Exam Fee",
      amount: 3000,
      dueDate: "2024-11-15",
      status: "paid",
      paidDate: "2024-11-14",
      receipt: "RCP-001",
    },
    { id: "3", type: "Activity Fee", amount: 2000, dueDate: "2024-11-20", status: "overdue", receipt: null },
    {
      id: "4",
      type: "Library Fee",
      amount: 500,
      dueDate: "2024-10-31",
      status: "paid",
      paidDate: "2024-10-25",
      receipt: "RCP-002",
    },
  ]

  const sidebarItems = [
    { title: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Child's Performance", href: "/parent/performance", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Attendance", href: "/parent/attendance", icon: <Users className="w-5 h-5" /> },
    { title: "Fees & Payments", href: "/parent/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Messages", href: "/parent/messages", icon: <MessageSquare className="w-5 h-5" /> },
  ]

  const totalPending = feeRecords
    .filter((f) => f.status === "pending" || f.status === "overdue")
    .reduce((sum, f) => sum + f.amount, 0)
  const totalPaid = feeRecords.filter((f) => f.status === "paid").reduce((sum, f) => sum + f.amount, 0)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
              <p className="text-gray-600 mt-1">Track and manage fees for Rahul Kumar</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <CreditCard className="w-4 h-4 mr-2" />
              Pay Fees Online
            </Button>
          </div>

          {/* Fee Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Total Paid</p>
                <p className="text-3xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-2">✓ Cleared</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Pending Amount</p>
                <p className="text-3xl font-bold text-yellow-600">₹{totalPending.toLocaleString()}</p>
                <p className="text-xs text-yellow-600 mt-2">! Due soon</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-2">Payment Status</p>
                <p className="text-3xl font-bold text-blue-600">85%</p>
                <p className="text-xs text-gray-500 mt-2">Completion rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Fee Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Fee Transactions</CardTitle>
              <CardDescription>Complete fee history and payment details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Fee Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Due Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRecords.map((fee) => (
                      <tr key={fee.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900 font-medium">{fee.type}</td>
                        <td className="py-3 px-4 text-gray-600">₹{fee.amount}</td>
                        <td className="py-3 px-4 text-gray-600">{fee.dueDate}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              fee.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : fee.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {fee.status === "paid" ? "Paid" : fee.status === "pending" ? "Pending" : "Overdue"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {fee.receipt ? (
                            <Button size="sm" variant="outline">
                              <FileText className="w-4 h-4 mr-1" />
                              {fee.receipt}
                            </Button>
                          ) : fee.status !== "paid" ? (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Pay Now
                            </Button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Available Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
                  <p className="font-semibold text-gray-900 mb-2">Credit/Debit Card</p>
                  <p className="text-sm text-gray-600">Visa, Mastercard, RuPay</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
                  <p className="font-semibold text-gray-900 mb-2">Net Banking</p>
                  <p className="text-sm text-gray-600">All major Indian banks</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center hover:shadow-md cursor-pointer">
                  <p className="font-semibold text-gray-900 mb-2">UPI/Wallet</p>
                  <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
