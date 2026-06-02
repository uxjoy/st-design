"use client";

import routes from "@/data/route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const BottomNav = ({ isLoggedIn }) => {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  // Find the active route index
  const activeIndex = routes.findIndex((route) => {
    if (route.href === "/") return pathname === "/";
    return pathname === route.href || pathname.startsWith(`${route.href}/`);
  });

  useEffect(() => {
    if (
      activeIndex !== -1 &&
      itemRefs.current[activeIndex] &&
      containerRef.current
    ) {
      const activeItem = itemRefs.current[activeIndex];
      const container = containerRef.current;

      const itemRect = activeItem.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    }
  }, [activeIndex, pathname]);

  // Don't render if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="p-3 fixed bottom-0 left-0 right-0 z-50 md:hidden bg-linear-to-t from-white to-transparent">
      <div
        ref={containerRef}
        className="p-1.5 flex gap-1 bg-slate-950/90 max-w-sm mx-auto rounded-full backdrop-blur-xs relative"
      >
        {/* Sliding indicator */}
        <div
          className="absolute top-1.5 bottom-1.5 bg-white rounded-full transition-all duration-200 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
        />

        {routes.map((route, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={route.href}
              href={route.href}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex flex-col flex-1 items-center gap-0.5 rounded-full h-full justify-center text-center p-2 py-3 cursor-pointer relative z-10 transition-all duration-200 ${
                isActive ? "text-slate-950 font-semibold" : "text-slate-300"
              }`}
            >
              <p className="text-sm uppercase text-wrap">{route.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
