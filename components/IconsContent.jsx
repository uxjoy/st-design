"use client";

import { LucideSearch } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import IconCard from "./IconCard";

export default function IconsContent({ iconsByCategory }) {
  const searchParams = useSearchParams();
  const categoryNames = Object.keys(iconsByCategory);
  const allIcons = useMemo(
    () => categoryNames.flatMap((category) => iconsByCategory[category]),
    [iconsByCategory],
  );

  const categoryParam = searchParams.get("category") || "all";
  const searchParam = searchParams.get("search") || "";

  const [activeTab, setActiveTab] = useState(categoryParam);
  const [search, setSearch] = useState(searchParam);
  const topRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Sync state with URL params
  useEffect(() => {
    setActiveTab(categoryParam);
    setSearch(searchParam);
  }, [categoryParam, searchParam]);

  const currentIcons =
    activeTab === "all" ? allIcons : iconsByCategory[activeTab] || [];

  const filteredIcons = currentIcons.filter((iconPath) =>
    iconPath.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearchChange = (value) => {
    setSearch(value);
    const params = new URLSearchParams();
    if (activeTab !== "all") params.set("category", activeTab);
    if (value) params.set("search", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Scroll the icon grid to top on tab change
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className="min-h-full" ref={topRef}>
      <div className="sticky top-0 z-10 bg-white flex items-center gap-2 border-b border-slate-200 px-5">
        <LucideSearch size={20} className="text-blue-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={`Search ${filteredIcons.length} icons...`}
          className="w-full h-12 border-0  focus:outline-none "
        />

        {/* <SearchIcon
          searchValue={search}
          iconLength={filteredIcons.length}
          changeHandler={(e) => handleSearchChange(e.target.value)}
        /> */}
      </div>

      {filteredIcons.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-2 sm:gap-3 p-6">
          {filteredIcons.map((iconPath) => (
            <IconCard key={iconPath} iconName={iconPath} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
