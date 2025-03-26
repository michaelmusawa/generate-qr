import { Staff } from "@/app/lib/definitions";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const DisplayPage = async ({ id }: { id: string }) => {
  let staffDetail: Staff | null = null;
  try {
    // Using a relative URL here works in a server component.
    const response = await fetch(`${BASE_URL}/api/staffs/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-4">{staffDetail.name}</h1>
        <p className="mb-2">Staff Id: {staffDetail.id}</p>
        <p className="mb-2">Position: {staffDetail.position}</p>
        <p className="mb-2">Department: {staffDetail.department}</p>
        <p className="mb-2">Email: {staffDetail.email}</p>
      </div>
    </div>
  );
};

export default DisplayPage;
