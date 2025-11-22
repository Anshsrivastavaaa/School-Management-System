"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, BarChart3, MessageSquare, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [userRole, setUserRole] = useState<string | null>(null)

  const roles = [
    {
      id: "admin",
      name: "School Admin",
      description: "Manage school settings, users, and overall operations",
      icon: Users,
      href: "/admin/dashboard",
      color: "bg-blue-500",
    },
    {
      id: "principal",
      name: "Principal",
      description: "View school performance, approve certificates, manage staff",
      icon: BarChart3,
      href: "/principal/dashboard",
      color: "bg-purple-500",
    },
    {
      id: "teacher",
      name: "Teacher",
      description: "Mark attendance, upload marks, communicate with parents",
      icon: BookOpen,
      href: "/teacher/dashboard",
      color: "bg-green-500",
    },
    {
      id: "parent",
      name: "Parent",
      description: "Track child progress, pay fees, communicate with teachers",
      icon: MessageSquare,
      href: "/parent/dashboard",
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Management & Parent Communication System</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive digital platform for government schools to manage student data and improve communication
            with parents
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <FeatureCard
            icon={Users}
            title="Student Management"
            description="Complete student profiles with performance tracking"
          />
          <FeatureCard
            icon={BookOpen}
            title="Attendance Tracking"
            description="Digital attendance with daily/weekly/monthly analytics"
          />
          <FeatureCard
            icon={BarChart3}
            title="Academic Analytics"
            description="Auto-calculated grades and performance insights"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Parent Communication"
            description="Real-time updates and multi-language support"
          />
          <FeatureCard
            icon={CreditCard}
            title="Fees Management"
            description="Online payment processing and receipt generation"
          />
          <FeatureCard
            icon={FileText}
            title="Digital Certificates"
            description="Auto-filled transfer and bonafide certificates"
          />
        </div>

        {/* Role Selection */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Select Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const Icon = role.icon
              return (
                <Link key={role.id} href={role.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className={`${role.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{role.name}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Access Portal
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* System Features Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>System Capabilities</CardTitle>
              <CardDescription>Core features built into the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Students</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• View grades and performance reports</li>
                    <li>• Track attendance and behavior</li>
                    <li>• Access homework and announcements</li>
                    <li>• Download digital certificates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Parents</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Real-time attendance updates</li>
                    <li>• Performance tracking and insights</li>
                    <li>• Direct communication with teachers</li>
                    <li>• Online fee payments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Teachers</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Quick attendance marking</li>
                    <li>• Mark management system</li>
                    <li>• Parent messaging and announcements</li>
                    <li>• Class performance analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Administrators</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Complete school oversight</li>
                    <li>• Role-based access control</li>
                    <li>• Fee collection tracking</li>
                    <li>• Comprehensive reporting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
