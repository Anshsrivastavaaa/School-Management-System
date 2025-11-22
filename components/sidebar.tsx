"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SidebarProps {
  items: {
    title: string
    href: string
    icon: React.ReactNode
  }[]
  schoolName: string
}

export function Sidebar({ items, schoolName }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-gray-900">{schoolName}</h2>
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <nav
        className={cn(
          "fixed md:static left-0 top-16 md:top-0 h-[calc(100vh-64px)] md:h-screen w-64 bg-gradient-to-b from-blue-50 to-blue-100 border-r border-blue-200 transition-all duration-300 z-40",
          !open && "hidden md:block",
        )}
      >
        <div className="p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-8">{schoolName}</h2>

          <div className="space-y-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  pathname === item.href ? "bg-blue-500 text-white font-semibold" : "text-gray-700 hover:bg-blue-200",
                )}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 absolute bottom-6 left-6 right-6">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                // Handle logout
                window.location.href = "/"
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setOpen(false)} />}
    </>
  )
}
