import Link from "next/link";

const SidebarLayout = ({ data }) => {
  return (
    <div className="sidebar-menu p-4 px-3">
      {data?.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="block rounded-md px-3 py-2 text-sm hover:bg-slate-100 capitalize"
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default SidebarLayout;
