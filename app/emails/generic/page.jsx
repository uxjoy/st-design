"use client";

import EmailCard from "@/components/EmailCard";
import Empty from "@/components/Empty";
import genericEmails from "@/data/genericEmails";
import { filterEmailSections } from "@/utils/common";
import { useMemo, useState } from "react";
import EmailPageLayout from "../page";

const GenericEmailList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmails = useMemo(
    () => filterEmailSections(genericEmails, searchQuery),
    [genericEmails, searchQuery],
  );

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

export default GenericEmailList;
