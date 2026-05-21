import IconsContent from "@/components/IconsContent";
import { getIconsByCategory } from "@/utils/common";
import Navbar from "../../components/Navbar";
import SidebarLayout from "../../components/SidebarLayout";

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
    <section className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="w-full flex-1 min-h-0 flex overscroll-none">
        <SidebarLayout data={categories} />

        <IconsContent iconsByCategory={iconsByCategory} />
      </main>
    </section>
  );
}
