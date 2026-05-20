import Navbar from "../../components/Navbar";
import SidebarLayout from "../../components/SidebarLayout";
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
    <section className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />

      <main className="w-full h-full flex overscroll-none">
        <SidebarLayout data={emailSidebarItems} />

        <div className="wrapper w-full h-full p-5 flex flex-col overflow-y-auto">
          {children}
        </div>
      </main>
    </section>
  );
}
