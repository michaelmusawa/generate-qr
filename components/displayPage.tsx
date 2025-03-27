import { Staff } from "@/app/lib/definitions";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

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

  const url = `${BASE_URL}/staff/${id}/display`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-sm w-full p-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <Image
            src={staffDetail.image}
            width={150}
            height={150}
            alt="Staff Image"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
          <h1 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
            {staffDetail.name}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            Staff ID: {staffDetail.id}
          </p>
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Position:</span>{" "}
            {staffDetail.position}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Department:</span>{" "}
            {staffDetail.department}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">Email:</span> {staffDetail.email}
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <QRCodeSVG
            value={url}
            size={80}
            fgColor="#0ea5e9"
            bgColor="transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
