"use client";

import { filterEmailSections } from "@/utils/common";
import { useMemo, useState } from "react";
import Empty from "../Empty";
import EmailCard from "./EmailCard";

interface EmailLayoutProps {
  serviceEmails: {
    section: string;
    frames: {
      name: string;
      link: string;
      subject: string;
    }[];
  }[];
}

const EmailLayout = ({ serviceEmails }: EmailLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmails = useMemo(
    () => filterEmailSections(serviceEmails, searchQuery),
    [serviceEmails, searchQuery],
  );

  return (
    <div className="main-container space-y-12 py-10 px-8 scroll-smooth min-h-full relative">
      {filteredEmails.length > 0 ? (
        filteredEmails.map((email: any, i: number) => (
          <div
            key={email.section}
            className="w-full"
            id={`${email.section?.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <h2 className="text-lg font-bold uppercase flex items-center gap-2">
              {i + 1}. {email.section}
              <span className="text-base font-normal text-slate-500">
                {email.frames?.length > 0 && `(${email.frames.length})`}
              </span>
            </h2>

            <div className="flex flex-col">
              {email.frames?.map((frame) => (
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
  );
};

export default EmailLayout;
