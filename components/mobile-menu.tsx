"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  items: { label: string; href: string }[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button size="icon" variant="ghost" onClick={() => setIsOpen(!isOpen)} className="fixed top-4 right-4 z-50">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 pt-16 overflow-y-auto">
            <div className="space-y-2 p-4">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
