import { Suspense } from "react";
import HomePage from "@/components/staffData";
import HomePageSkeleton from "@/components/homePageSkeleton";

const Page = async () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Staffs Directory
        </h1>
        <Suspense fallback={<HomePageSkeleton />}>
          <HomePage />
        </Suspense>
      </div>
    </div>
  );
};
export default Page;
