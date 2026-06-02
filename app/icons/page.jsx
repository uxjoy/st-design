import IconsList from "@/components/icon/IconsList";
import MainLayout from "@/components/MainLayout";
import { getIconsByCategory } from "@/utils/getIconsByCategory";
import { Suspense } from "react";

export default async function IconsPage() {
  const iconsByCategory = await getIconsByCategory();

  const categories = [
    { name: "All", href: "/icons?category=all" },
    ...Object.keys(iconsByCategory).map((cat) => ({
      name: cat.replace("-", " "),
      href: `/icons?category=${cat}`,
    })),
  ];

  return (
    <Suspense fallback={null}>
      <MainLayout sidebarData={categories} menuText={"ST Icons"}>
        <IconsList iconsByCategory={iconsByCategory} />
      </MainLayout>
    </Suspense>
  );
}
