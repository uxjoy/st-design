"use client";

import { useState } from "react";
import MobileTopTab from "./MobileTopTab";
import Navbar from "./Navbar";
import SidebarLayout from "./SidebarLayout";

// interface MainLayoutProps {
//   sidebarData: any;
//   children: ReactNode;
//   menuText?: string;
// }

const MainLayout = ({ sidebarData, children, menuText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />

      <MobileTopTab data={sidebarData} />

      {/* <Drawer
        direction="left"
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full"
      >
        <DrawerContent className={"w-full max-w-2/3"}>
          <DrawerHeader className={""}>
            <DrawerTitle className={""}>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription className={""}>
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>

          <div className="no-scrollbar overflow-y-auto flex flex-col px-4">
            {routes.map((route) => {
              return (
                <div key={route.href}>
                  {!route.children && (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`block py-1.5 text-sm capitalize text-slate-800`}
                    >
                      {route.name}
                    </Link>
                  )}

                  {route.children && (
                    <div className="flex flex-col mt-4">
                      <h5 className="text-xs uppercase text-slate-500 font-medium -ml-px mb-2">
                        {route.name == "DS" ? "Design System" : route.name}
                      </h5>

                      {route.children?.map((child) => {
                        return (
                          <Link
                            key={child.href}
                            href={route.href + child.href}
                            className={`block px-3.5 py-2 text-sm border-l border-slate-200 transition-all ease-in-out duration-200 capitalize -ml-px text-slate-800`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer> */}

      {/* ///////////////////////////////// */}

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
