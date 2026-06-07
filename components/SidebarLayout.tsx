"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface SidebarItem {
  name: string;
  href: string;
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

interface SidebarDataProps {
  data: SidebarItem[] | SidebarGroup[];
  menuText?: string;
}

function isGrouped(
  data: SidebarItem[] | SidebarGroup[],
): data is SidebarGroup[] {
  return data.length > 0 && "items" in data[0] && "label" in data[0];
}

const SidebarLayout = ({ data, menuText }: SidebarDataProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPath = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  const renderLink = (menu: SidebarItem, index: number) => {
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
  };

  return (
    <aside className="sidebar min-w-55 max-w-55 h-full overflow-y-auto p-4 no-scrollbar border-r border-slate-200 hidden sm:block">
      {menuText != null && (
        <h5 className="text-xs uppercase text-slate-500 font-medium mb-3">
          {menuText}
        </h5>
      )}

      {isGrouped(data) ? (
        <div className="space-y-6">
          {data.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h6 className="text-xs uppercase text-slate-500 font-medium mb-3">
                {group.label}
              </h6>

              <ul className="space-y-1.5 border-l border-slate-200">
                {group.items.map((menu, index) => renderLink(menu, index))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-1.5 border-l border-slate-200">
          {(data as SidebarItem[]).map((menu, index) =>
            renderLink(menu, index),
          )}
        </ul>
      )}
    </aside>
  );
};

export default SidebarLayout;
