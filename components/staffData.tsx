import { staffData } from "@/app/lib/data";
import { Staff } from "@/app/lib/definitions";
import QRCodeSection from "@/components/qrCode";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function HomePage() {
  let staffs: Staff[] = [];

  staffs = staffData;

  // try {
  //   const response = await fetch(`/api/staffs`);
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.statusText}`);
  //   }
  //   staffs = await response.json();
  // } catch (err) {
  //   console.error("Fetching staff data failed:", err);
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffs.map((staff) => (
        <div
          key={staff.id}
          className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold">{staff.name}</h2>
          <p>{staff.position}</p>
          <p>{staff.email}</p>
          <p>{staff.department}</p>
          <div className="mt-4 flex justify-center">
            <QRCodeSection id={staff.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
