import { type NextRequest, NextResponse } from "next/server"
import { getAllStudents, createStudent } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const schoolId = request.nextUrl.searchParams.get("schoolId") || "school-1"
    const students = await getAllStudents(schoolId)
    return NextResponse.json({ students })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const student = await createStudent(data)
    return NextResponse.json({ student }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create student" }, { status: 500 })
  }
}
