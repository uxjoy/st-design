"use client";

import sidebarData from "../data/sidebarData";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
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

      {/* <main className="w-full h-full flex overscroll-none">
        <aside className="sidebar w-64 h-full border-r border-slate-200 overflow-y-auto p-2">
          <SidebarLayout data={emailSidebarItems} />
        </aside> */}

      <div className="wrapper w-full h-full p-5 flex flex-col overflow-y-auto">
        {children}
      </div>
      {/* </main> */}
    </section>
  );
};

export default MainLayout;
