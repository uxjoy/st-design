"use client";

import Navbar from "./Navbar";
import SidebarLayout from "./SidebarLayout";

const MainLayout = ({ showSidebar, sidebarData, children }) => {
  // const emailSidebarItems =
  //   sidebarData
  //     .find((item) => item.name === "emails")
  //     ?.children?.map((child) => ({
  //       ...child,
  //       href: `/emails${child.href}`,
  //     })) ?? [];

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />

      {showSidebar ? (
        <main className="w-full flex-1 flex min-h-0 overflow-y-auto">
          <SidebarLayout data={sidebarData} />

          <div className="w-full h-full overflow-y-auto">{children}</div>
        </main>
      ) : (
        <main className="w-full h-full flex-1 overflow-y-auto">{children}</main>
      )}
    </section>
  );
};

export default MainLayout;
