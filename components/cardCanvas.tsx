"use client";

import { useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Staff } from "@/app/lib/definitions";

export const FlipCard = ({
  staffDetail,
  url,
}: {
  staffDetail: Staff;
  url: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!hasFlippedOnce) setHasFlippedOnce(true);
  };

  return (
    <div
      className="max-w-sm w-full h-[480px] cursor-pointer group mx-8"
      style={{ perspective: 1000 }}
      onClick={handleFlip}
    >
      <div
        className={`w-full h-full transition-transform duration-500 transform-gpu [transform-style:preserve-3d] ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-emerald-700 to-yellow-400 rounded-xl p-4 mt-16 mb-2 shadow-lg">
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2">
                <Image
                  src={staffDetail.image}
                  width={600}
                  height={1200}
                  alt="Staff Image"
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-100 object-cover shadow-md"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="my-8 text-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {staffDetail.name}
              </h1>
              <div className="inline-flex items-center text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full text-sm mb-1">
                {staffDetail.position}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                Staff ID: {staffDetail.id}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid gap-3 text-sm">
              <div className="flex items-center space-x-2 p-1 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <OfficeBuildingIcon className="w-5 h-5 text-purple-500" />
                <span className="text-gray-600 dark:text-gray-200">
                  {staffDetail.department}
                </span>
              </div>
              <div className="flex items-center space-x-2 p-1 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <EmailIcon className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-200">
                  {staffDetail.email}
                </span>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-4 flex flex-col items-center">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-inner">
                <QRCodeSVG
                  value={url}
                  size={80}
                  fgColor="#0ea5e9"
                  bgColor="transparent"
                />
              </div>
              {/* <p className="text-xs text-gray-400 mt-2">Scan for digital ID</p> */}
            </div>

            {!hasFlippedOnce && (
              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400 dark:text-gray-500 animate-pulse">
                Tap to view official details
              </div>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700">
            {/* County Header */}
            <div className="bg-gradient-to-r from-emerald-700 to-yellow-400 rounded-xl p-4 -mt-2 mb-6 shadow-lg text-center">
              <h2 className="text-xl font-bold text-white mb-2">
                Nairobi City County
              </h2>
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto p-2">
                <Image
                  src="/images/county.png" // Add county seal image
                  width={64}
                  height={64}
                  alt="County Seal"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-center">
              <div className="flex flex-col items-center">
                <LocationMarkerIcon className="w-6 h-6 text-purple-500 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  City Hall, City Hall Way
                  <br />
                  P.O Box 30075-00100
                  <br />
                  Nairobi, Kenya
                </p>
              </div>

              <div className="flex flex-col items-center">
                <PhoneIcon className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  +254 725 624 489
                  <br />
                  +254 738 041 292
                </p>
              </div>

              <div className="mt-4 border-t pt-4 border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  This identification card remains property of Nairobi City
                  County. If found, please return to any county office or
                  contact the numbers above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icons (Add these SVG components)
const OfficeBuildingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationMarkerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);
