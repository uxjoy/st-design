import Mainlayout from "@/components/MainLayout";
import { Suspense } from "react";
import designSystemRoute from "../designSystemRoute";
import borderRadiusData from "./borderRadius";

const BorderRadius = () => {
  return (
    <Suspense fallback={null}>
      <Mainlayout showSidebar={true} sidebarData={designSystemRoute}>
        <div className="content px-6 py-8">
          <div className="max-w-4xl space-y-4 pb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Design tokens
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Border Radius
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              A reference for the border radius scale used by the design system.
              Each token displays the radius value and a live preview of how the
              radius applies to a surface.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Collection</p>
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
          </div>

          <div className="space-y-10 pt-10">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {borderRadiusData.borderradius.map((radius) => {
                const radiusValue =
                  radius.value === 9999
                    ? "9999px"
                    : `${radius.value}${radius.unit}`;

                return (
                  <div
                    key={radius.name}
                    className="rounded-3xl border border-slate-200 bg-white p-5"
                  >
                    <div className="mb-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {radius.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-6">
                      <div
                        className="h-24 w-24 bg-blue-500"
                        style={{ borderRadius: radiusValue }}
                      />
                    </div>
                    <div className="mt-4 text-sm text-slate-600">
                      Radius:{" "}
                      <span className="font-semibold text-slate-900">
                        {radiusValue}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Mainlayout>
    </Suspense>
  );
};

export default BorderRadius;
