"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, BookOpen, MessageSquare, BarChart3, Send, Paperclip } from "lucide-react"

export default function TeacherMessages() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "Rahul Kumar (Parent)",
      message: "When will the exam results be declared?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: "2",
      sender: "Priya Sharma (Parent)",
      message: "Thanks for the homework assignments",
      time: "5 hours ago",
      unread: false,
    },
    {
      id: "3",
      sender: "School Admin",
      message: "Attendance report submitted successfully",
      time: "1 day ago",
      unread: false,
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)

  const sidebarItems = [
    { title: "Dashboard", href: "/teacher/dashboard", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Attendance", href: "/teacher/attendance", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Marks", href: "/teacher/marks", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Messages", href: "/teacher/messages", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "Assignments", href: "/teacher/assignments", icon: <BookOpen className="w-5 h-5" /> },
  ]

  const unreadCount = messages.filter((m) => m.unread).length

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">Communicate with parents and school administration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Message List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Inbox</span>
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        onClick={() => setSelectedMessage(msg.id)}
                        className={`p-3 rounded-lg cursor-pointer transition ${
                          selectedMessage === msg.id
                            ? "bg-blue-100 border-l-4 border-blue-600"
                            : msg.unread
                              ? "bg-gray-100 hover:bg-gray-200"
                              : "hover:bg-gray-100"
                        }`}
                      >
                        <p className="font-semibold text-sm text-gray-900">{msg.sender}</p>
                        <p className="text-xs text-gray-600 truncate">{msg.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{messages.find((m) => m.id === selectedMessage)?.sender}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-900">{messages.find((m) => m.id === selectedMessage)?.message}</p>
                    </div>
                  </CardContent>
                  <div className="border-t pt-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your reply..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a message to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Broadcast Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Send Announcement</CardTitle>
              <CardDescription>Broadcast message to all parents in your class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Subject" />
                <textarea
                  placeholder="Type your announcement..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Announcement
                  </Button>
                  <Button size="icon" variant="outline">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
