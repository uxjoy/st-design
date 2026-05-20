"use client";

import { Loader } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function findAnchor(element) {
  while (element && element !== document.body) {
    if (element.tagName === "A") return element;
    element = element.parentElement;
  }
  return null;
}

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(null);

  const currentUrl = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const anchor = findAnchor(event.target);
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("#")
      )
        return;
      if (anchor.target === "_blank") return;
      if (href === currentUrl) return;

      setPendingUrl(href);
      setIsLoading(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [currentUrl]);

  useEffect(() => {
    if (!pendingUrl) return;
    if (pendingUrl !== currentUrl) return;

    setIsLoading(false);
    setPendingUrl(null);
  }, [currentUrl, pendingUrl]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 p-4">
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white w-40 h-40 shadow-2xl">
        {/* <div className="h-12 w-12 animate-spin"> */}
        <Loader className="animate-spin text-blue-500" size={32} />
        {/* </div> */}
        <p className="text-sm font-semibold text-slate-900">Loading page…</p>
      </div>
    </div>
  );
}
