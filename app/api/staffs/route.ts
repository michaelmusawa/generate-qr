import { staffData } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(staffData);
  } catch (error) {
    console.error("Failed to fetch staffs data:", error);
    return NextResponse.json(
      { error: "Failed to fetch staffs data" },
      { status: 500 }
    );
  }
}
