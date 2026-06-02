"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import DesignSystemLayout from "../page";
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
    <DesignSystemLayout>
      <div className="md:side-pattern pb-15">
        <PageHeader
          label={"Customization"}
          title={"Premetive Colors"}
          description={
            "Tailwind includes an expertly-crafted default color palette  out-of-the-box that is a great starting point if you don’t have your own specific branding in mind."
          }
        />

        <div className="main-container py-12 space-y-10">
          {groups.map(([groupName, colors]) => (
            <section key={groupName} className="space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {capitalize(groupName)}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {colors.length} shades in the {groupName} palette.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 grid-cols-4 md:grid-cols-11">
                {colors.map((color) => (
                  <div
                    key={color.scale}
                    onClick={() => handleCopy(color.hex)}
                    className="overflow-hidden cursor-pointer space-y-2 text-sm mb-3"
                  >
                    {/* <div className="relative"> */}
                    <div
                      className={`relaive flex items-center justify-center aspect-video rounded border border-black/5`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {copiedHex === color.hex ? (
                        <div className="rounded bg-slate-950 px-1 py-0.5 text-xs text-white">
                          Copied
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col font-mono">
                      <span className="font-medium text-slate-800">
                        {color.scale}
                      </span>
                      <span className="text-slate-500 uppercase font-mono text-xs">
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
    </DesignSystemLayout>
  );
};

export default Colors;
