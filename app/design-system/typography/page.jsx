import Mainlayout from "@/components/MainLayout";
import Link from "next/link";
import { Suspense } from "react";
import designSystemRoute from "../designSystemRoute";
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

  const sampleText = "The quick brown fox jumps over the lazy dog.";

  return (
    <Suspense fallback={null}>
      <Mainlayout showSidebar={true} sidebarData={designSystemRoute}>
        <div className="content px-6 py-8 w-full h-full min-h-0 overflow-y-auto">
          <div className="max-w-4xl space-y-4 pb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Typography
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Font system
            </h1>

            <p className="max-w-3xl text-base leading-7 text-slate-600">
              A curated typography scale with display, heading, and body styles.
              Each token includes font size, line height, and font weight for
              consistent hierarchy.
            </p>

            <div className="tags">
              {categories.map(([categoryName, styles]) => (
                <Link
                  href={`#${categoryName.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                  key={categoryName}
                  className="inline-flex items-center mr-2 capitalize rounded-full bg-slate-200/70 px-3 py-1 text-sm font-medium text-slate-700 mt-5"
                >
                  {categoryName}
                </Link>
              ))}
            </div>
          </div>

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
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-slate-700">
                          {group.groupLabel}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                          {group.variants.map((variant) => (
                            <span
                              key={variant.name}
                              className="rounded-full bg-slate-100 px-2 py-1"
                            >
                              {getVariantLabel(variant.name)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="divide-y divide-slate-200">
                        {group.variants.map((style) => (
                          <div
                            key={style.name}
                            className="border-b border-slate-200 py-4 last:border-b-0"
                          >
                            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                              <span className="rounded-full bg-slate-100 px-2 py-1">
                                {style.fontSize}px
                              </span>
                              <span className="rounded-full bg-slate-100 px-2 py-1">
                                {displayLineHeight(style.lineHeight)}
                              </span>
                              <span className="rounded-full bg-slate-100 px-2 py-1 capitalize">
                                {style.fontWeight}
                              </span>
                            </div>

                            <p
                              className="text-slate-900"
                              style={{
                                fontFamily: typographyJson.fontFamily,
                                fontSize: `${style.fontSize}px`,
                                fontWeight: normalizeWeight(style.fontWeight),
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
                            </p>
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
      </Mainlayout>
    </Suspense>
  );
};

export default Typography;
