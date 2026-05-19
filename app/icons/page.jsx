import IconsContent from "@/components/IconsContent";
import { getIconsByCategory } from "@/utils/common";
import MainLayout from "@/components/MainLayout";

export default async function IconsPage() {
  const iconsByCategory = await getIconsByCategory();

  return (
    <MainLayout sidebarData={iconsByCategory}>
      <IconsContent iconsByCategory={iconsByCategory} />
    </MainLayout>
  );
}
