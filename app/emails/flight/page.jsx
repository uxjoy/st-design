"use client";

import EmailCard from "@/components/EmailCard";
import Empty from "@/components/Empty";
import { filterEmailSections } from "@/utils/common";
import { useMemo, useState } from "react";
import flightEmailData from "../../../data/flightEmails";
import EmailPageLayout from "../page";

const FlightEmailList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmails = useMemo(
    () => filterEmailSections(flightEmailData, searchQuery),
    [flightEmailData, searchQuery],
  );

  // const filteredEmailData = useMemo(() => {
  //   const normalizedQuery = searchQuery.trim().toLowerCase();
  //   if (!normalizedQuery) {
  //     return flightEmailData;
  //   }

  //   return flightEmailData
  //     .map((section) => {
  //       const filteredFrames = section.frames.filter((frame) => {
  //         const name = frame.name.toLowerCase();
  //         const subject = frame.subject.toLowerCase();
  //         return (
  //           name.includes(normalizedQuery) || subject.includes(normalizedQuery)
  //         );
  //       });

  //       return { ...section, frames: filteredFrames };
  //     })
  //     .filter((section) => section.frames.length > 0);
  // }, [searchQuery]);

  return (
    <EmailPageLayout>
      <div className="main-container space-y-12 py-10 px-8 scroll-smooth">
        {filteredEmails.length > 0 ? (
          filteredEmails.map((email, i) => (
            <div
              key={email.section}
              className="w-full"
              id={`${email.section.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h2 className="text-lg font-bold uppercase flex items-center gap-2">
                {i + 1}. {email.section} Emails
                <span className="text-base font-normal text-slate-500">
                  {email.frames.length > 0 && `(${email.frames.length})`}
                </span>
              </h2>

              <div className="flex flex-col">
                {email.frames.map((frame) => (
                  <EmailCard
                    key={frame.name}
                    name={frame.name}
                    link={frame.link}
                    section={email.section}
                    subject={frame.subject}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </EmailPageLayout>
  );
};

export default FlightEmailList;

{
  /* <aside className="sticky top-0 min-w-55 max-w-55 h-full border-r border-slate-200 overflow-y-auto p-3">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name/subject..."
            className="bg-slate-50 border border-slate-200 h-11 px-3 rounded-lg w-full mb-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          {filteredEmailData.length > 0 ? (
            filteredEmailData.map((item, index) => (
              <Link
                key={index}
                href={`#${item.section.toLowerCase().replace(/\s+/g, "-")}`}
                className="block rounded-md px-2 py-2 text-sm hover:bg-slate-100 capitalize transition-all ease-in-out duration-200 hover:pl-3"
              >
                {item.section}
              </Link>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              No emails match your search.
            </p>
          )}
        </aside> */
}
