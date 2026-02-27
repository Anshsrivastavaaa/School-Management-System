"use client"

import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/sonner"
import type React from "react"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
            <Toaster richColors position="top-right" />
        </SessionProvider>
    )
}
