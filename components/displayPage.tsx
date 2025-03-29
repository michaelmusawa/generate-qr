import { Staff } from "@/app/lib/definitions";
import { FlipCard } from "./cardCanvas";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const DisplayPage = async ({ id }: { id: string }) => {
  let staffDetail: Staff | null = null;
  try {
    const response = await fetch(`${BASE_URL}/api/staffs/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    staffDetail = await response.json();
  } catch (error) {
    console.error("Fetching staff data failed:", error);
  }

  if (!staffDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p>Staff not found or an error occurred.</p>
      </div>
    );
  }

  const url = `${BASE_URL}/staff/${id}/display`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <FlipCard staffDetail={staffDetail} url={url} />
    </div>
  );
};

export default DisplayPage;
