"use client";

import { Home, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/check");
        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      setIsLoggedIn(false);
      router.push("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/icons?category=all", label: "Icons" },
    { href: "/emails", label: "Emails" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 hidden md:block">
            <img src="/logo.svg" alt="ShareTrip" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="md:hidden">
          <img src="/logo.svg" alt="ShareTrip" className="h-8 w-auto" />
        </Link>

        {/* Right */}
        <div className="flex items-center space-x-2">
          {/* Loading */}
          {isLoading ? (
            <div className="h-10 w-20 animate-pulse rounded bg-slate-200" />
          ) : isLoggedIn ? (
            /* Profile Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white"
              >
                U
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                  <button
                    onClick={() => {
                      router.push("/");
                      setDropdownOpen(false);
                    }}
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-slate-100"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </button>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-slate-100"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Sign In Button */
            <Link
              href="/signin"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Sign In
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}

            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
