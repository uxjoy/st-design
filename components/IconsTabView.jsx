"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Empty from "./Empty";
import IconCard from "./IconCard";
import SearchIcon from "./SearchIcon";

function IconsTabViewContent({ iconsByCategory }) {
  const categoryNames = Object.keys(iconsByCategory);
  const allIcons = useMemo(
    () => categoryNames.flatMap((category) => iconsByCategory[category]),
    [iconsByCategory],
  );

  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const topRef = useRef(null);

  const currentIcons =
    activeTab === "all" ? allIcons : iconsByCategory[activeTab] || [];

  const filteredIcons = currentIcons.filter((iconPath) =>
    iconPath.toLowerCase().includes(search.toLowerCase()),
  );

  const tabs = ["all", ...categoryNames];

  const handleTabClick = (category) => {
    setActiveTab(category);
    setSearch("");
  };

  // Scroll the icon grid to top on tab change
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className="flex h-full">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {tabs.map((category) => (
                  <SidebarMenuItem key={category}>
                    <SidebarMenuButton
                      onClick={handleTabClick.bind(null, category)}
                      isActive={activeTab === category}
                    >
                      <span className="capitalize">
                        {category.replace("-", " ")}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex flex-col flex-1 h-full overflow-y-auto" ref={topRef}>
        <div className="sticky top-0 z-10 bg-gradient-to-b from-white to-90% px-5 py-4 flex items-center gap-2">
          <SidebarTrigger className="sm:hidden" />
          <SearchIcon
            searchVlaue={search}
            iconLength={filteredIcons.length}
            changeHandler={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="p-5 pt-2 h-full">
          {filteredIcons.length > 0 ? (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-2 sm:gap-3 pb-6">
              {filteredIcons.map((iconPath) => (
                <IconCard key={iconPath} iconName={iconPath} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}

export default function IconsTabView({ iconsByCategory }) {
  return (
    <SidebarProvider>
      <IconsTabViewContent iconsByCategory={iconsByCategory} />
    </SidebarProvider>
  );
}
