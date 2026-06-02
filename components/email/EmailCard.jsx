import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Figma } from "../../public/Figma";
import { Badge } from "../ui/badge";

const EmailCard = ({ name, link, section, subject }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 py-4 border- border-slate-100 items-center hover:bg-slate-50 hover:pl-4 transition-all duration-200 ease-in-out group hover:bg-linear-to-r from-white via-slate-50 to-white group"
    >
      <div className="p-2.5 bg-slate-100 rounded-full">
        {/* <LucideMailOpen size={20} /> */}
        <Figma size={24} />
      </div>

      <div className="space-y-0.5 w-full">
        <h2 className="text-md font-medium leading-tight flex items-center gap-1 group-hover:text-blue-500 transition-colors duration-200">
          {subject}
          <LucideArrowUpRight
            size={20}
            strokeWidth={2.2}
            className="hidden sm:block"
          />
        </h2>

        <div className="content">
          {/* For Search */}
          <p className="text-slate-500 text-sm hidden">{name}</p>

          {/* For Mobile Device */}
          <p className="text-slate-500 text-sm sm:hidden">
            {name.slice(0, 36) + "..."}
          </p>

          {/* For Desktop */}
          <p className="text-slate-500 text-sm hidden sm:block">{name}</p>
        </div>
      </div>

      <Badge variant="secondary" className="hidden sm:block">
        {section}
      </Badge>
      {/* <LucideArrowUpRight size={20} strokeWidth={2.2} /> */}
    </Link>
  );
};

export default EmailCard;
