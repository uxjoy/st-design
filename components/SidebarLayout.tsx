"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface SidebarDataProps {
  data: any;
  menuText?: string;
}

const SidebarLayout = ({ data, menuText }: SidebarDataProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  return (
    <aside className="sidebar min-w-55 max-w-55 h-full overflow-y-auto p-4 no-scrollbar border-r border-slate-200 hidden sm:block">
      {menuText != null && (
        <h5 className="text-xs uppercase text-slate-500 font-medium mb-3">
          {menuText}
        </h5>
      )}

      <ul className="space-y-1.5 border-l border-slate-200">
        {data?.map((menu, index) => {
          const isDefaultIconAll =
            pathname === "/icons" &&
            !searchParams.has("category") &&
            menu.href === "/icons?category=all";
          const isActive = menu.href === currentPath || isDefaultIconAll;

          return (
            <Link
              key={index}
              href={menu.href}
              className={`block px-3.5 py-0.5 text-sm border-l transition-all ease-in-out duration-200 capitalize -ml-px ${
                isActive
                  ? " border-blue-500 font-medium text-blue-500"
                  : "text-slate-700 hover:pl-4 hover:border-slate-400/60"
              }`}
            >
              {menu.name}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default SidebarLayout;
