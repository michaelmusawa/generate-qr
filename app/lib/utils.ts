const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function getStaffsData() {
  const response = await fetch(`${BASE_URL}/api/staffs`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
}
