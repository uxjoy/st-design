import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Figma } from "./icons/Figma";
import { Badge } from "./ui/badge";

const EmailCard = ({ name, link, section, subject }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 py-4 border- border-slate-100 items-center hover:bg-slate-50 hover:pl-4 transition-all duration-200 ease-in-out group hover:bg-gradient-to-r from-white via-slate-50 to-white group"
    >
      <div className="p-3 bg-slate-100 rounded-full">
        {/* <LucideMailOpen size={20} /> */}
        <Figma size={28} />
      </div>

      <div className="space-y-0.5 w-full">
        <h2 className="text-md font-medium flex items-center gap-1 group-hover:text-blue-500 transition-colors duration-200">
          {subject}
          <LucideArrowUpRight />
        </h2>
        <p className="text-slate-500 text-smna">{name}</p>
      </div>

      <Badge variant="secondary">{section}</Badge>
    </Link>
  );
};

export default EmailCard;
