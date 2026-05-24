import MainLayout from "@/components/MainLayout";
import { Suspense } from "react";
import designSystemRoute from "./designSystemRoute";

const DesignSystemLayout = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <MainLayout sidebarData={designSystemRoute} menuText={"Design System"}>
        {children}
      </MainLayout>
    </Suspense>
  );
};

export default DesignSystemLayout;
