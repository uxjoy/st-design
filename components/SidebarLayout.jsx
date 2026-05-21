"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SidebarLayout = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  return (
    <aside className="sidebar min-w-55 max-w-55 h-full border-r border-slate-200 overflow-y-auto space-y-0.5 p-3 no-scrollbar">
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
            className={`block rounded-md px-3 py-2 text-sm transition-all ease-in-out duration-200 capitalize ${
              isActive
                ? "bg-blue-50 font-medium text-blue-500"
                : "text-slate-700 hover:bg-slate-100 hover:pl-4"
            }`}
          >
            {menu.name}
          </Link>
        );
      })}
    </aside>
  );
};

export default SidebarLayout;
