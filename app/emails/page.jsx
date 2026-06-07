import MainLayout from "@/components/MainLayout";
import { Suspense } from "react";
import sidebarData from "../../data/sidebarData";

export default function EmailPageLayout({ children }) {
  const groupedSidebarData = sidebarData.map((category) => ({
    label: category.name,
    items:
      category.children?.map((child) => ({
        ...child,
        href: `/emails${child.href}`,
      })) ?? [],
  }));

  return (
    <Suspense fallback={null}>
      <MainLayout sidebarData={groupedSidebarData}>{children}</MainLayout>
    </Suspense>
  );
}
