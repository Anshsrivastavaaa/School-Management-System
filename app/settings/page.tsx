"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Globe, Moon, Smartphone, Bell, Lock } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useState } from "react"

export default function SettingsPage() {
  const { language, setLanguage } = useLanguage()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [notifications, setNotifications] = useState(true)
  const [lowBandwidth, setLowBandwidth] = useState(false)

  const sidebarItems = [
    { title: "Dashboard", href: "/admin/dashboard", icon: <Settings className="w-5 h-5" /> },
    { title: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar items={sidebarItems} schoolName="Government School" />

      <main className="flex-1 overflow-auto">
        <div className="md:ml-64 p-4 md:p-8 max-w-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your preferences and application settings</p>
          </div>

          {/* Language Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Language & Localization
              </CardTitle>
              <CardDescription>Choose your preferred language</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setLanguage("en")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  English
                </Button>
                <Button
                  variant={language === "hi" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setLanguage("hi")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  हिंदी (Hindi)
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                The interface will update to your selected language. Changes are saved automatically.
              </p>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="w-5 h-5" />
                Theme & Appearance
              </CardTitle>
              <CardDescription>Customize visual settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setTheme("light")}
                >
                  Light Theme
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setTheme("dark")}
                >
                  Dark Theme
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Mobile & Low Bandwidth */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Mobile & Connectivity
              </CardTitle>
              <CardDescription>Optimize for mobile devices and low-bandwidth environments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={lowBandwidth}
                  onChange={(e) => setLowBandwidth(e.target.checked)}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Low Bandwidth Mode</p>
                  <p className="text-sm text-gray-600">Reduce data usage and improve performance on slow connections</p>
                </div>
              </label>
              {lowBandwidth && (
                <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                  Images will be compressed, videos will be disabled, and minimal styling will be applied to reduce data
                  consumption.
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Manage notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Enable Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates about fees, attendance, and announcements</p>
                </div>
              </label>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Lock className="w-4 h-4 mr-2" />
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Lock className="w-4 h-4 mr-2" />
                Active Sessions
              </Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex gap-4 mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
