import DisplayPage from "@/components/displayPage";
import StaffDetailSkeleton from "@/components/staffDetailSkeleton";
import { Suspense } from "react";

const Page = async (props: {
  params?: Promise<{
    id?: string;
  }>;
}) => {
  const params = await props.params;
  const id = params?.id || "";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Suspense fallback={<StaffDetailSkeleton />}>
        <DisplayPage id={id} />
      </Suspense>
    </div>
  );
};
export default Page;
