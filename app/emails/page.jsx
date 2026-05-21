import { Suspense } from "react";
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

      <main className="w-full flex-1 flex min-h-0 overflow-y-auto">
        <Suspense fallback={null}>
          <SidebarLayout data={emailSidebarItems} />
        </Suspense>

        <div className="w-full h-full">
          {/* <h1 className="text-xl font-semibold p-4 bg-slate-50">
            Flight Emails
          </h1> */}

          {children}
        </div>
      </main>
    </section>
  );
}
