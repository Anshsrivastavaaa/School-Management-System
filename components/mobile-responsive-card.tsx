"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MobileResponsiveCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  compact?: boolean
}

export function MobileResponsiveCard({
  title,
  description,
  children,
  className = "",
  compact = false,
}: MobileResponsiveCardProps) {
  return (
    <Card className={`w-full ${compact ? "p-2 md:p-6" : ""} ${className}`}>
      <CardHeader className={compact ? "p-2" : ""}>
        <CardTitle className="text-base md:text-lg">{title}</CardTitle>
        {description && <CardDescription className="text-xs md:text-sm">{description}</CardDescription>}
      </CardHeader>
      <CardContent className={compact ? "p-2" : ""}>{children}</CardContent>
    </Card>
  )
}
