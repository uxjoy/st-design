import MainLayout from "@/components/MainLayout";
import { Suspense } from "react";
import designSystemRoute from "./designSystemRoute";

const DesignSystemLayout = () => {
  return (
    <Suspense fallback={null}>
      <MainLayout showSidebar={true} sidebarData={designSystemRoute}>
        <div className="content"></div>
      </MainLayout>
    </Suspense>
  );
};

export default DesignSystemLayout;
