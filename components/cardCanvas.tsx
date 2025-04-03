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
          {/* Top Left Mosaic */}
          <div className="absolute top-0 left-0 rotate-180 rounded-br-2xl overflow-hidden h-1/2 w-full z-[-1]">
            <div
              className="relative h-full w-full bg-cover"
              style={{ backgroundImage: `url('/images/mosaic.png')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent dark:from-gray-800" />
            </div>
          </div>

          {/* Bottom Left Mosaic */}
          <div className="absolute h-1/4 w-4/5 bottom-20 -left-20 rounded-br-2xl overflow-hidden rotate-90 z-[-1]">
            <div
              className="relative h-full w-full bg-cover"
              style={{ backgroundImage: `url('/images/mosaic.png')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-gray-800" />
            </div>
          </div>

          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-gray-50/50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl z-1">
            <div className=" w-full h-full">
              {/* Header Section */}

              <div className="flex flex-col justify-center items-center mt-2 space-y-2">
                <Image
                  src={"/images/county.png"}
                  width={600}
                  height={1200}
                  alt="County Image"
                  className="w-14 h-14 rounded-full border-4 border-white dark:border-gray-100 object-cover shadow-md bg-gray-100/90 dark:bg-gray-900/90"
                />
                <h1 className="text-xs font-extrabold">Nairobi City County</h1>
              </div>

              <div className="flex flex-col justify-center items-center p-2">
                <Image
                  src={staffDetail.image}
                  width={600}
                  height={1200}
                  alt="Staff Image"
                  className="w-32 h-32 rounded-xl border-4 border-white dark:border-gray-100 object-cover shadow-md bg-gray-100/90 dark:bg-gray-900/90"
                />
              </div>

              {/* Profile Info */}
              <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {staffDetail.name}
                </h1>
                <div className="flex w-48 justify-center items-center rounded-4xl overflow-hidden mx-auto">
                  <div className="flex-1 border-2 border-b-emerald-800"></div>
                  <div className="flex-1 border-2 border-amber-400"></div>
                </div>
                <div className="inline-flex items-center text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full text-sm mb-1">
                  {staffDetail.position}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                  Staff ID: {staffDetail.id}
                </p>
              </div>

              {/* QR Code Section */}
              <div className="mt-4 flex flex-col items-center px-4">
                <div className="grid grid-cols-2 p-2 rounded-lg shadow-inner">
                  {/* QR Code Section */}
                  <div className="col flex justify-center items-end">
                    <QRCodeSVG
                      value={url}
                      size={80}
                      fgColor="#0ea5e9"
                      bgColor="transparent"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-center text-emerald-800 font-extrabold">
                      Scan or dial *647# to verify
                    </p>
                    <p className="text-xs text-center mt-2 text-emerald-800 font-extrabold">
                      www.nairobiservices.co.ke
                    </p>
                  </div>
                </div>

                <p className="text-sm mt-2 text-emerald-800 font-extrabold">
                  Let&apos;s Make Nairobi Work
                </p>
              </div>

              {!hasFlippedOnce && (
                <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400 dark:text-gray-500 animate-pulse">
                  Tap to view official details
                </div>
              )}
            </div>
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
