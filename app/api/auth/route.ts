import { type NextRequest, NextResponse } from "next/server"
import { createUser, getUserByEmail } from "@/lib/db"

// Mock authentication endpoint
export async function POST(request: NextRequest) {
  try {
    const { email, password, action } = await request.json()

    if (action === "login") {
      // In production, verify password hash
      const user = await getUserByEmail(email)
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }
      return NextResponse.json({ user })
    }

    if (action === "register") {
      const user = await createUser({
        email,
        password, // In production, hash this!
        firstName: "New",
        lastName: "User",
        role: "parent",
        schoolId: "school-1",
      })
      return NextResponse.json({ user })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
