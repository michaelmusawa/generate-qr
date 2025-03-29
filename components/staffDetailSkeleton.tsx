import React from "react";

const StaffDetailSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-sm mx-8 w-full p-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl bg-white dark:bg-gray-800 animate-pulse">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mb-4"></div>
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
          <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
          <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetailSkeleton;
