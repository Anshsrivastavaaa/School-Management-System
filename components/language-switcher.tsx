"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={language === "en" ? "bg-blue-600 hover:bg-blue-700" : ""}
      >
        EN
      </Button>
      <Button
        variant={language === "hi" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("hi")}
        className={language === "hi" ? "bg-blue-600 hover:bg-blue-700" : ""}
      >
        हिन्दी
      </Button>
    </div>
  )
}
