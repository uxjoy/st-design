"use client";

import Mainlayout from "@/components/MainLayout";
import { Suspense, useState } from "react";
import designSystemRoute from "../designSystemRoute";
import premetiveColors from "./premetiveColors";

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const Colors = () => {
  const groups = Object.entries(premetiveColors.groups);
  const [copiedHex, setCopiedHex] = useState("");

  const handleCopy = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      window.setTimeout(() => {
        setCopiedHex((current) => (current === hex ? "" : current));
      }, 1200);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <Suspense fallback={null}>
      <Mainlayout showSidebar={true} sidebarData={designSystemRoute}>
        <div className="flex-1 w-full h-full min-h-0 overflow-y-auto p-6">
          <div className="max-w-4xl space-y-4 pb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Customization
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Customizing Colors
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Tailwind includes an expertly-crafted default color palette
              out-of-the-box that is a great starting point if you don’t have
              your own specific branding in mind.
            </p>
          </div>

          <div className="space-y-10">
            {groups.map(([groupName, colors]) => (
              <section key={groupName} className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {capitalize(groupName)}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {colors.length} shades in the {groupName} palette.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-11">
                  {colors.map((color) => (
                    <div
                      key={color.scale}
                      onClick={() => handleCopy(color.hex)}
                      className="overflow-hidden cursor-pointer space-y-2 text-sm"
                    >
                      <div className="relative">
                        <div
                          className={`aspect-video rounded ${color.hex === "#ffffff" ? "border border-slate-200" : ""}`}
                          style={{ backgroundColor: color.hex }}
                        />

                        {copiedHex === color.hex ? (
                          <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-full bg-slate-950 px-3 py-1 text-xs text-white">
                            Copied
                          </div>
                        ) : null}
                      </div>

                      <div className="flex flex-col gap-">
                        <span className="font-semibold text-slate-900">
                          {color.scale}
                        </span>
                        <span className="text-slate-500 uppercase">
                          {color.hex}
                        </span>
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

export default Colors;
