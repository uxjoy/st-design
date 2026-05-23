import IconsContent from "@/components/IconsContent";
import MainLayout from "@/components/MainLayout";
import { getIconsByCategory } from "@/utils/common";

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
    <MainLayout sidebarData={categories} showSidebar={true}>
      <IconsContent iconsByCategory={iconsByCategory} />
    </MainLayout>
  );
}
