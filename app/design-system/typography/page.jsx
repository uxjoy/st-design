import PageHeader from "@/components/PageHeader";
import DesignSystemLayout from "../page";
import typographyJson from "./typography";

const normalizeWeight = (weight) => {
  if (weight === "regular") return 400;
  if (weight === "semibold") return 600;
  if (weight === "bold") return 700;
  if (weight === "heavy") return 800;
  return 400;
};

const displayLineHeight = (lineHeight) => {
  if (!lineHeight) return "";
  return lineHeight.unit === "PIXELS"
    ? `${lineHeight.value}px`
    : `${lineHeight.value}%`;
};

const getGroupLabel = (name) => {
  const lastSlash = name.lastIndexOf("/");
  return lastSlash === -1 ? name : name.substring(0, lastSlash);
};

const getVariantLabel = (name) => {
  const lastSlash = name.lastIndexOf("/");
  return lastSlash === -1 ? "" : name.substring(lastSlash + 1);
};

const Typography = () => {
  const categories = Object.entries(typographyJson.categories).map(
    ([categoryName, styles]) => {
      const grouped = styles.reduce((acc, style) => {
        const groupLabel = getGroupLabel(style.name);
        if (!acc[groupLabel]) acc[groupLabel] = [];
        acc[groupLabel].push(style);
        return acc;
      }, {});

      return [
        categoryName,
        Object.entries(grouped).map(([groupLabel, variants]) => ({
          groupLabel,
          variants,
        })),
      ];
    },
  );

  const sampleText = "A curated typography scale";
  // const sampleText = "The quick brown fox jumps over the lazy dog.";

  return (
    <DesignSystemLayout>
      <div className="md:side-pattern pb-15">
        <PageHeader
          label={"Typography"}
          title={"Font system"}
          description={
            "A curated typography scale with display, heading, and body styles. Each token includes font size, line height, and font weight for consistent hierarchy."
          }
        />

        <div className="main-container py-12">
          {/* <div className="tags">
              {categories.map(([categoryName, styles]) => (
                <Link
                  href={`#${categoryName.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                  key={categoryName}
                  className="inline-flex items-center mr-2 capitalize rounded-full bg-slate-200/70 px-3 py-1 text-sm font-medium text-slate-700 mt-5"
                >
                  {categoryName}
                </Link>
              ))}
            </div> */}

          <div className=""></div>

          <div className="space-y-10 scroll-smooth">
            {categories.map(([categoryName, groups]) => (
              <section key={categoryName} className="space-y-4 scroll-smooth">
                <div
                  className="flex flex-col gap-2"
                  id={categoryName.toLowerCase().replace(/\s+/g, "-")}
                >
                  <h2 className="text-2xl font-semibold text-slate-900 capitalize">
                    {categoryName}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {groups.length} groups in this category.
                  </p>
                </div>

                <div className="space-y-4">
                  {groups.map((group) => (
                    <div
                      key={group.groupLabel}
                      className="w-full! table-auto border-collapse border border-slate-200 overflow-hidden"
                    >
                      <p className="font-medium text-base text-slate-800 lowercase! bg-slate-100 px-4 py-3">
                        {group.groupLabel.replaceAll("/", "-")}
                      </p>

                      <div className="">
                        {group.variants.reverse().map((style) => (
                          <div
                            key={style.name}
                            className="relative flex flex-col gap-3 w-full p-4 border-t border-slate-200 hover:bg-slate-50 transition-all ease-in-out duration-200"
                          >
                            <div className="absolute top-0 right-0 w-15 h-full bg-linear-to-r from-transparent via-white/80 to-white z-0"></div>

                            <h1
                              className="text-slate-900 text-nowrap w-full"
                              style={{
                                fontFamily: typographyJson.fontFamily,
                                fontSize: `${style.fontSize}px`,
                                fontWeight: style.fontWeight,
                                lineHeight:
                                  style.lineHeight?.unit === "PIXELS"
                                    ? `${style.lineHeight.value}px`
                                    : `${style.lineHeight.value}%`,
                                letterSpacing:
                                  style.letterSpacing?.unit === "PERCENT"
                                    ? `${style.letterSpacing.value / 100}em`
                                    : undefined,
                              }}
                            >
                              {sampleText}
                            </h1>

                            <span className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                              <span className="rounded-full bg-slate-100 px-2.5 py-1">
                                FS: {style.fontSize}px
                              </span>
                              <span className="rounded-full bg-slate-100 px-2.5 py-1">
                                LH: {displayLineHeight(style.lineHeight)}
                              </span>
                              <span className="rounded-full bg-slate-100 px-2.5 py-1 capitalize">
                                FW: {style.fontWeight}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </DesignSystemLayout>
  );
};

export default Typography;
