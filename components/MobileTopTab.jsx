import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const MobileTopTab = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Support both flat arrays and grouped arrays ({ label, items })
  const flatItems = data?.length && "items" in data[0]
    ? data.flatMap((group) => group.items)
    : data;

  return (
    <>
      {flatItems && (
        <section className="px-3 border-b border-slate-200 flex items-center overflow-x-auto no-scrollbar space-x-2.5 sm:hidden">
          {flatItems.map((item) => {
            const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : currentUrl === item.href ||
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`) ||
                  // Default "All" active state for icons page when no category is selected
                  (item.href === "/icons?category=all" &&
                    pathname === "/icons" &&
                    !searchParams.get("category"));

            return (
              <Link
                key={item.href}
                href={item.href}
                variant="outline"
                className={`inline-flex items-center px-1 text-sm text-nowrap h-12 pt-0.5 uppercase border-b-3 ${
                  isActive
                    ? "text-blue-500 font-semibold border-blue-500"
                    : "text-slate-600 border-transparent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </section>
      )}
    </>
  );
};

export default MobileTopTab;
