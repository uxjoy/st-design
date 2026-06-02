import { getIconsByCategory } from "@/utils/getIconsByCategory";

export default async function IconLayout() {
  const iconsByCategory = await getIconsByCategory();

  return (
    <>
      {Object.entries(iconsByCategory).map(([category, icons]) => (
        <section key={category} className="mt-12">
          <h2 className="flex items-center gap-1 text-xl font-semibold capitalize mb-4">
            {category}{" "}
            <span className="font-normal text-sm text-slate-500">
              {" "}
              ({icons.length}){" "}
            </span>
          </h2>

          <div className="grid grid-cols-8 gap-3">
            {icons.map((iconPath) => (
              <IconCard key={iconPath} iconName={iconPath} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
