import { LucideArrowUpRight, LucideMailOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

const EmailCard = ({ name, link, section, subject }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-6 py-4 border-b border-slate-100 items-center hover:bg-slate-50 hover:pl-4 transition-all duration-200 ease-in-out group hover:bg-gradient-to-r from-white via-slate-50 to-white"
    >
      <div className="p-4 bg-slate-100 rounded-full">
        <LucideMailOpen size={20} />
      </div>

      <div className="space-y-1 w-full">
        <h2 className="text-lg font-semibold flex items-center gap-1">
          {subject}
          <LucideArrowUpRight />
        </h2>
        <p className="text-slate-500">{name}</p>
      </div>

      <Badge variant="secondary">{section}</Badge>
    </Link>
  );
};

export default EmailCard;
