import { NextResponse } from "next/server"

export async function GET() {
  // This would normally serve a PDF file
  // For demonstration purposes, we'll redirect to a PDF viewer
  return NextResponse.redirect("https://docs.google.com/viewer?url=YOUR_PDF_URL")
}

