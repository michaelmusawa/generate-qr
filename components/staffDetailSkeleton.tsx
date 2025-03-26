import React from "react";
const StaffDetailSkeleton = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="p-6 w-7/12 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 animate-pulse">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-2"></div>

        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
      </div>
    </div>
  );
};

export default StaffDetailSkeleton;
