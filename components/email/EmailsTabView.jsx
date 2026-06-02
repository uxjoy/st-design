"use client";

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
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Empty from "../Empty";

function EmailsTabViewContent({ sections }) {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const topRef = useRef(null);

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
                {tabs.map((tab) => (
                  <SidebarMenuItem key={tab}>
                    <SidebarMenuButton
                      onClick={() => {
                        setActiveTab(tab);
                        setSearch("");
                      }}
                      isActive={activeTab === tab}
                    >
                      <span className="capitalize">
                        {tab === "all" ? "All" : tab}
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
        <div className="sticky top-0 z-10 bg-gradient-to-b from-white to-90% px-5 py-4">
          <div className="flex items-center gap-6 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 rounded-lg">
            <SidebarTrigger className="sm:hidden ml-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${filteredEmails.length} emails...`}
              className="w-full h-14 border px-5 py-2 font-normal placeholder:text-slate-400 border-none focus:outline-none focus:ring-0 focus:border-none"
            />
            <img
              src="/logo.svg"
              alt="ShareTrip"
              className="h-7 pr-3 mb-0.5 sm:hidden"
            />
          </div>
        </div>

        <div className="p-5 pt-2 h-full">
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
      </div>
    </div>
  );
}

export default function EmailsTabView({ sections }) {
  return (
    <SidebarProvider>
      <EmailsTabViewContent sections={sections} />
    </SidebarProvider>
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
