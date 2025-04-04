import React from "react";

const StaffDetailSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div
        className="relative w-full max-w-sm mx-8 p-6 rounded-2xl overflow-hidden 
        border-2 border-white/20 dark:border-gray-700/50 
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
        bg-gradient-to-br from-white/30 to-gray-50/80 dark:from-gray-800/20 dark:to-gray-900/30
        backdrop-blur-sm animate-pulse"
      >
        {/* County Header Skeleton */}
        <div className="flex flex-col items-center mb-4 space-y-2">
          <div className="p-2 bg-gray-200/80 dark:bg-gray-700/80 rounded-full shadow-lg">
            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="h-3 w-32 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>

        {/* Staff Image Skeleton */}
        <div className="relative flex justify-center my-2">
          <div
            className="w-32 h-32 rounded-xl bg-gray-300 dark:bg-gray-600 
            border-4 border-white/90 dark:border-gray-900 shadow-xl"
          />
        </div>

        {/* Profile Info Skeleton */}
        <div className="text-center mb-4">
          <div className="h-6 w-48 mx-auto bg-gray-300 dark:bg-gray-600 rounded mb-3" />
          <div className="flex justify-center space-x-1 mb-2">
            <div className="w-8 h-[2px] bg-gray-300 dark:bg-gray-600" />
            <div className="w-8 h-[2px] bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="h-5 w-32 mx-auto bg-gray-300 dark:bg-gray-600 rounded-full" />
          <div className="h-4 w-24 mx-auto bg-gray-300 dark:bg-gray-600 rounded mt-2" />
        </div>

        {/* QR Section Skeleton */}
        <div className="mt-auto px-2">
          <div className="bg-gray-200/90 dark:bg-gray-700/90 rounded-lg p-3 shadow-md">
            <div className="grid grid-cols-5 gap-3 items-center">
              <div className="col-span-2 w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="col-span-3 space-y-2">
                <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
              </div>
            </div>
          </div>
          <div className="h-3 w-48 mx-auto bg-gray-300 dark:bg-gray-600 rounded mt-3 mb-2" />
        </div>

        {/* Tap Indicator Skeleton */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <div className="h-2 w-40 mx-auto bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default StaffDetailSkeleton;
