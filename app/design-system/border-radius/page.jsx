import PageHeader from "@/components/PageHeader";
import DesignSystemLayout from "../page";
import borderRadiusData from "./borderRadius";

const BorderRadius = () => {
  return (
    <DesignSystemLayout>
      <div className="md:side-pattern">
        <PageHeader
          label={"Design tokens"}
          title={"Border Radius"}
          description={
            "A reference for the border radius scale used by the design system. Each token displays the radius value and a live preview of how the radius applies to a surface."
          }
        />

        <div className="main-container py-12">
          {/* <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Collection
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {borderRadiusData.collection}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">Mode</p>
                <p className="mt-2 text-xl font-semibold text-slate-900 capitalize">
                  {borderRadiusData.mode}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Total tokens
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {borderRadiusData.totalvariables}
                </p>
              </div>
            </div> */}

          <div className="space-y-10">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {borderRadiusData.borderradius.map((radius) => {
                const radiusValue =
                  radius.value === 9999
                    ? "9999px"
                    : `${radius.value}${radius.unit}`;

                return (
                  <div
                    key={radius.name}
                    className="rounded border border-slate-200 bg-white p-5"
                  >
                    <div className="mb-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {radius.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-6">
                      <div
                        className="h-24 w-24 bg-slate-100 border border-black/10"
                        style={{ borderRadius: radiusValue }}
                      />
                    </div>
                    <div className="mt-4 text-sm text-slate-600">
                      Radius:{" "}
                      <span className="font-semibold text-slate-800 font-mono">
                        {radiusValue}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DesignSystemLayout>
  );
};

export default BorderRadius;
