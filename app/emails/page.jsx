import MainLayout from "@/components/MainLayout";
import { Suspense } from "react";
import sidebarData from "../../data/sidebarData";

export default function EmailPageLayout({ children }) {
  const emailSidebarItems =
    sidebarData
      .find((item) => item.name === "emails")
      ?.children?.map((child) => ({
        ...child,
        href: `/emails${child.href}`,
      })) ?? [];

  return (
    <Suspense fallback={null}>
      <MainLayout sidebarData={emailSidebarItems} menuText="Email Templates">
        {children}
      </MainLayout>
    </Suspense>
  );
}
