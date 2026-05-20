import Link from "next/link";

const SidebarLayout = ({ data }) => {
  return (
    <sidebar className="sidebar w-64 h-full border-r border-slate-200 overflow-y-auto p-3">
      {data?.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100 capitalize"
        >
          {menu.name}
        </Link>
      ))}
    </sidebar>
  );
};

export default SidebarLayout;
