import Mainlayout from "@/components/MainLayout";
import { Suspense } from "react";
import designSystemRoute from "../designSystemRoute";
import tokenization from "./tokenization";

const capitalize = (value) =>
  value.replace(
    /(^|-)([a-z])/g,
    (_, prefix, char) => `${prefix}${char.toUpperCase()}`,
  );

const Tokenization = () => {
  const groups = Object.entries(tokenization.groups);

  return (
    <Suspense fallback={null}>
      <Mainlayout showSidebar={true} sidebarData={designSystemRoute}>
        <div className="content px-6 py-8">
          <div className="max-w-4xl space-y-4 pb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Design tokens
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Tokenization
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              A searchable reference for the design system token groups used by
              ShareTrip. Each token includes the name, resolved color value, and
              token reference path.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Collection</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {tokenization.collection}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Mode</p>
              <p className="mt-2 text-xl font-semibold text-slate-900 capitalize">
                {tokenization.mode}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Total variables
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {tokenization.totalvariables}
              </p>
            </div>
          </div>

          <div className="space-y-10 pt-10">
            {groups.map(([groupName, tokens]) => (
              <section key={groupName} className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {capitalize(groupName)}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {tokens.length} tokens in this group.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="grid min-w-full grid-cols-[2fr_1fr_1fr] gap-0 border-b border-slate-200 bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    <div>Token</div>
                    <div>Value</div>
                    <div>Reference</div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {tokens.map((token) => (
                      <div
                        key={token.name}
                        className="grid min-w-full grid-cols-[2fr_1fr_1fr] gap-0 px-4 py-4 text-sm text-slate-700"
                      >
                        <div className="break-words font-medium">
                          {token.name}
                        </div>
                        <div className="flex items-center gap-2 uppercase">
                          <span
                            className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full border border-slate-200"
                            style={{ backgroundColor: token.hex }}
                          />
                          <span>{token.hex}</span>
                        </div>
                        <div className="text-slate-500">{token.ref}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </Mainlayout>
    </Suspense>
  );
};

export default Tokenization;
