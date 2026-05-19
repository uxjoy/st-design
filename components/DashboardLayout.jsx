"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Home, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

function SidebarContentWrapper({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Determine sidebar content based on route
  const sidebarConfig = useMemo(() => {
    if (pathname === "/icons") {
      return {
        type: "icons",
        title: "Icons",
        activeItem: searchParams.get("category") || "all",
      };
    } else if (pathname === "/emails") {
      return {
        type: "emails",
        title: "Emails",
        activeItem: searchParams.get("section") || "all",
      };
    }
    return {
      type: "default",
      title: "Navigation",
      activeItem: null,
    };
  }, [pathname, searchParams]);

  return children({ sidebarConfig, pathname });
}

export function AppSidebar({ sidebarConfig, sidebarData }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/check");
        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setIsLoggedIn(false);
      router.push("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const renderSidebarMenu = () => {
    if (sidebarConfig.type === "icons" && sidebarData) {
      const categoryNames = Object.keys(sidebarData);
      const tabs = ["all", ...categoryNames];

      return (
        <SidebarMenu>
          {tabs.map((category) => {
            const isActive = sidebarConfig.activeItem === category;
            return (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={`/icons?category=${category}`}>
                    <span className="capitalize">
                      {category.replace("-", " ")}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      );
    }

    if (sidebarConfig.type === "emails" && sidebarData) {
      const tabs = ["all", ...sidebarData.map((s) => s.section)];

      return (
        <SidebarMenu>
          {tabs.map((tab) => {
            const isActive = sidebarConfig.activeItem === tab;
            return (
              <SidebarMenuItem key={tab}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={`/emails?section=${tab}`}>
                    <span className="capitalize">{tab === "all" ? "All" : tab}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      );
    }

    // Default navigation - always show
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/">Home</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/icons">Icons</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/emails">Emails</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-end gap-2 px-4 py-6">
          <img src="/logo.svg" alt="ShareTrip" className="h-10 w-auto" />
          <p className="text-slate-600">{sidebarConfig.title}</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>{renderSidebarMenu()}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t">
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-blue-500 text-white text-xs">
                    U
                  </AvatarFallback>
                </Avatar>
                <span>Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" className="w-56">
              <DropdownMenuItem
                onClick={() => router.push("/")}
                className="cursor-pointer"
              >
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="default" className="w-full">
            <Link href="/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </Sidebar>
  );
}

export default function DashboardLayout({ children, sidebarData }) {
  return (
    <SidebarProvider>
      <SidebarContentWrapper>
        {({ sidebarConfig }) => (
          <div className="flex h-[calc(100vh-64px)]">
            <AppSidebar
              sidebarConfig={sidebarConfig}
              sidebarData={sidebarData}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="border-b bg-white p-2 flex items-center gap-2">
                <SidebarTrigger />
                <span className="font-medium text-sm capitalize">
                  {sidebarConfig.title}
                </span>
              </div>
              <div className="flex-1 overflow-auto">{children}</div>
            </div>
          </div>
        )}
      </SidebarContentWrapper>
    </SidebarProvider>
  );
}
