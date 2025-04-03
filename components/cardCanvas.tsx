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
      className="w-[340px] h-[512px] cursor-pointer group overflow-hidden rounded-2xl"
      style={{ perspective: 1000 }}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu [transform-style:preserve-3d] ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full shadow-2xl backface-hidden">
          {/* Top Left Mosaic */}
          <div className="absolute top-0 left-0 rotate-180 h-1/2 w-full z-[-1]">
            <div
              className="relative h-full w-full bg-cover mix-blend-multiply"
              style={{ backgroundImage: `url('/images/mosaic.png')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent dark:from-gray-800/20" />
            </div>
          </div>

          {/* Bottom Left Mosaic */}
          <div className="absolute h-1/4 w-4/5 bottom-[72px] -left-[72px] rotate-90 z-[-1]">
            <div
              className="relative h-full w-full bg-cover"
              style={{ backgroundImage: `url('/images/mosaic.png')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-800/20" />
            </div>
          </div>

          {/* Card Content */}

          <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-l from-white/50 to-transparent dark:from-gray-800/20  border-2 border-white/20 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl z-[2]">
            <div className="relative flex flex-col h-full p-4">
              {/* Header Section */}

              <div className="flex flex-col items-center mb-4 space-y-2">
                <div className="p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg">
                  <Image
                    src={"/images/county.png"}
                    width={600}
                    height={1200}
                    alt="County Image"
                    className="w-14 h-14 rounded-full border-4 border-white dark:border-gray-100 object-cover shadow-md bg-gray-100/90 dark:bg-gray-900/90"
                  />
                </div>
                <h1 className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-widest">
                  NAIROBI CITY COUNTY
                </h1>
              </div>

              {/* Staff Photo Section */}
              <div className="relative flex justify-center my-2">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-white/90 dark:border-gray-900 shadow-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={staffDetail.image}
                    fill
                    alt="Staff Photo"
                    className="object-cover"
                    sizes="(max-width: 640px) 128px"
                  />
                </div>
              </div>

              {/* Staff Information */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white truncate px-4">
                  {staffDetail.name}
                </h2>
                <div className="my-2 flex justify-center space-x-1">
                  <span className="w-8 h-[2px] bg-emerald-600" />
                  <span className="w-8 h-[2px] bg-amber-400" />
                </div>
                <div className="text-sm font-medium text-sky-600 dark:text-sky-300 px-3 py-1">
                  {staffDetail.position}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Staff ID: {staffDetail.id}
                </p>
              </div>

              {/* Verification Section */}
              <div className="mt-auto px-2">
                <div className="bg-white/70 dark:bg-gray-900/90 rounded-lg p-1 shadow-md">
                  <div className="grid grid-cols-5 gap-3 items-center">
                    <div className="col-span-2 flex justify-center">
                      <QRCodeSVG
                        value={url}
                        size={80}
                        fgColor="#0ea5e9"
                        bgColor="transparent"
                        className="p-1.5"
                      />
                    </div>
                    <div className="col-span-3 space-y-1">
                      <p className="text-[0.65rem] font-bold text-emerald-700 dark:text-emerald-400 leading-tight">
                        Scan or dial *647# to verify
                      </p>
                      <p className="text-[0.6rem] font-bold text-emerald-700 dark:text-emerald-400 mt-2 leading-tight">
                        www.nairobiservices.co.ke
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-3 mb-2">
                  Let&apos;s Make Nairobi Work
                </p>
              </div>

              {/* Flip Indicator */}
              {!hasFlippedOnce && (
                <div className="absolute -bottom-1 left-0 right-0 text-center text-[0.6rem] text-gray-400 dark:text-gray-400 animate-pulse">
                  Tap to view official details
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full px-6 py-3 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700">
            {/* County Header */}

            <div className="relative bg-gradient-to-r from-emerald-700 to-yellow-400 rounded-xl p-4 text-center space-y-3">
              <h2 className="text-xl font-bold text-white/95 drop-shadow-md">
                Nairobi City County
              </h2>
              <div className="mx-auto w-14 h-14 p-1.5 bg-white/20 rounded-full shadow-inner">
                <Image
                  src="/images/county.png"
                  width={56}
                  height={56}
                  alt="County Seal"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-center flex-grow mt-4">
              {/* Address Section */}
              <div className="flex flex-col items-center">
                <div className="mb-2 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-sm">
                  <LocationMarkerIcon className="w-5 h-5 text-purple-600/90 dark:text-purple-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
                  City Hall, City Hall Way
                  <br />
                  <span className="text-xs">P.O Box 30075-00100</span>
                  <br />
                  Nairobi, Kenya
                </p>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col items-center">
                <div className="mb-2 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-sm">
                  <PhoneIcon className="w-5 h-5 text-sky-600/90 dark:text-sky-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
                  +254 725 624 489
                  <br />
                  +254 738 041 292
                </p>
              </div>

              {/* Disclaimer Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200/80 dark:border-gray-600/50">
                <p className="text-xs text-gray-600/90 dark:text-gray-300/80 leading-relaxed">
                  This identification card remains property of Nairobi City
                  County.
                  <br />
                  If found, please return to any county office or contact the
                  numbers above.
                </p>
              </div>
            </div>

            {/* Subtle County URL */}
            <div className="mt-4 text-center">
              <p className="text-[0.65rem] font-medium text-emerald-700/80 dark:text-emerald-400/80">
                www.nairobiservices.co.ke
              </p>
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
