"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import SidebarLayout from "./SidebarLayout";

// interface MainLayoutProps {
//   sidebarData: any;
//   children: ReactNode;
//   menuText?: string;
// }

const MainLayout = ({ sidebarData, children, menuText }) => {
  const [isOpen, setIsOpen] = useState(false);

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

      {sidebarData ? (
        <main className="w-full flex-1 flex min-h-0 overflow-y-auto">
          <SidebarLayout data={sidebarData} menuText={menuText} />

          <div className="w-full h-full overflow-y-auto">{children}</div>
        </main>
      ) : (
        <main className="w-full h-full flex-1 overflow-y-auto">{children}</main>
      )}
    </section>
  );
};

export default MainLayout;
