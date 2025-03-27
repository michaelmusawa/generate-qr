import { staffData } from "@/app/lib/data";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(props: {
  params?: Promise<{
    id?: string;
  }>;
}) {
  const params = await props.params;
  const id = params?.id || "";

  const decodedId = decodeURIComponent(id);

  try {
    // Iterate over staffData to find the matching staff based on bcrypt comparison.
    let foundStaff = null;
    for (const staff of staffData) {
      // Compare the plain staff id with the hashed id from the URL.
      if (await bcrypt.compare(staff.id, decodedId)) {
        foundStaff = staff;
        break;
      }
    }

    if (!foundStaff) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    return NextResponse.json(foundStaff);
  } catch (error) {
    console.error("Error fetching staff data:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff data" },
      { status: 500 }
    );
  }
}
