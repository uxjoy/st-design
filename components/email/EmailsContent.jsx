"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Empty from "../Empty";

export default function EmailsContent({ sections }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sectionParam = searchParams.get("section") || "all";
  const searchParam = searchParams.get("search") || "";

  const [activeTab, setActiveTab] = useState(sectionParam);
  const [search, setSearch] = useState(searchParam);
  const topRef = useRef(null);

  // Sync state with URL params
  useEffect(() => {
    setActiveTab(sectionParam);
    setSearch(searchParam);
  }, [sectionParam, searchParam]);

  const allEmails = useMemo(
    () =>
      sections.flatMap((s) =>
        s.frames.map((f) => ({ ...f, section: s.section })),
      ),
    [sections],
  );

  const currentEmails =
    activeTab === "all"
      ? allEmails
      : allEmails.filter((e) => e.section === activeTab);

  const filteredEmails = currentEmails.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tabs = ["all", ...sections.map((s) => s.section)];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const params = new URLSearchParams();
    params.set("section", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    const params = new URLSearchParams();
    if (activeTab !== "all") params.set("section", activeTab);
    if (value) params.set("search", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className="p-5 pt-2 h-full">
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={`Search ${filteredEmails.length} emails...`}
          className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredEmails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pb-6">
          {filteredEmails.map((email) => (
            <EmailCard key={email.name + email.link} email={email} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

function EmailCard({ email }) {
  const label = email.name;

  return (
    <Link
      href={email.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 bg-slate-100 p-4 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-200 ease-in-out duration-200 group"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-slate-800 group-hover:text-blue-500 leading-snug">
          {label}
        </p>
        <span className="flex-none text-slate-400 group-hover:text-blue-400 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      </div>
      <span className="text-xs text-slate-400">{email.section}</span>
    </Link>
  );
}
