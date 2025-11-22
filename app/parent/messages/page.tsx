"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, Users, MessageSquare, TrendingUp, Send, Phone, Mail } from "lucide-react"

export default function ParentMessages() {
  const [conversations, setConversations] = useState([
    {
      id: "1",
      teacherName: "Mrs. Anjali Singh",
      subject: "English",
      lastMessage: "Great performance in the recent test!",
      lastTime: "2 hours ago",
      unread: true,
    },
    {
      id: "2",
      teacherName: "Mr. Rajesh Kumar",
      subject: "Mathematics",
      lastMessage: "Please work on algebra problems",
      lastTime: "1 day ago",
      unread: false,
    },
    {
      id: "3",
      teacherName: "Ms. Priya Verma",
      subject: "Science",
      lastMessage: "Project submission successful",
      lastTime: "3 days ago",
      unread: false,
    },
    {
      id: "4",
      teacherName: "School Principal",
      subject: "General",
      lastMessage: "Annual sports day on Dec 15",
      lastTime: "1 week ago",
      unread: false,
    },
  ])

  const [selectedConv, setSelectedConv] = useState("1")
  const [newMessage, setNewMessage] = useState("")

  const sidebarItems = [
    { title: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Child's Performance", href: "/parent/performance", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Attendance", href: "/parent/attendance", icon: <Users className="w-5 h-5" /> },
    { title: "Fees & Payments", href: "/parent/fees", icon: <Users className="w-5 h-5" /> },
    { title: "Messages", href: "/parent/messages", icon: <MessageSquare className="w-5 h-5" /> },
  ]

  const unreadCount = conversations.filter((c) => c.unread).length
  const selectedConversation = conversations.find((c) => c.id === selectedConv)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages & Communication</h1>
          <p className="text-gray-600 mb-8">Connect with teachers and school administration</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversation List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Conversations</span>
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        onClick={() => setSelectedConv(conv.id)}
                        className={`p-3 rounded-lg cursor-pointer transition ${
                          selectedConv === conv.id
                            ? "bg-blue-100 border-l-4 border-blue-600"
                            : conv.unread
                              ? "bg-gray-100 hover:bg-gray-200"
                              : "hover:bg-gray-100"
                        }`}
                      >
                        <p className="font-semibold text-sm text-gray-900">{conv.teacherName}</p>
                        <p className="text-xs text-gray-600 mb-1">{conv.subject}</p>
                        <p className="text-xs text-gray-600 truncate">{conv.lastMessage}</p>
                        <p className="text-xs text-gray-500 mt-1">{conv.lastTime}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedConversation && (
                <Card className="h-full flex flex-col">
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{selectedConversation.teacherName}</CardTitle>
                        <CardDescription>{selectedConversation.subject}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg max-w-xs">
                      <p className="text-gray-900 text-sm">{selectedConversation.lastMessage}</p>
                      <p className="text-xs text-gray-600 mt-2">{selectedConversation.lastTime}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs ml-auto">
                      <p className="text-gray-900 text-sm">Thank you! We will ensure he practices more.</p>
                      <p className="text-xs text-gray-600 mt-2">Yesterday</p>
                    </div>
                  </CardContent>

                  <div className="border-t p-4 space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">Messages are monitored for safety</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
