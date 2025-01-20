"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function AccountDropdown({ user }: { user: any }) {
  const dropDownRef = useRef<any>(null);

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setShowDropdown(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        if (showDropdown) setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef, showDropdown]);

  return (
    <div className="relative" ref={dropDownRef}>
      <div
        className="group cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <span className="group-hover:underline">Account</span>{" "}
        <span className="text-[10px]">▼</span>
      </div>
      <div
        className={cn(
          "absolute left-0 z-40 -ml-[100px] mt-1 origin-top-right text-sm",
          !showDropdown && "hidden"
        )}
      >
        <div className="dark:bg-black-800 flex w-[200px] flex-col justify-start space-y-0 border border-gray-100/0 bg-white p-2 shadow-md dark:border-slate-900">
          <Link
            href={`/${user.username}`}
            className="font-base text-foreground cursor-pointer px-4 py-1 hover:text-slate-500 hover:underline"
          >
            Profile
          </Link>
          <div
            onClick={() => {
              window.dispatchEvent(new Event("ribbon_create_open"));
            }}
            className="font-base text-foreground cursor-pointer px-4 py-1 hover:text-slate-500 hover:underline dark:text-white"
          >
            Create Ribbon
          </div>

          <div className="text-black-600 px-4 text-sm">· · ·</div>

          <Link
            href="/about"
            className="font-base text-foreground cursor-pointer px-4 py-1 hover:text-slate-500 hover:underline"
          >
            About
          </Link>

          <Link
            href="/settings"
            className="font-base text-foreground cursor-pointer px-4 py-1 hover:text-slate-500 hover:underline"
          >
            Settings
          </Link>
          <div className="text-black-600 px-4 text-sm">· · ·</div>

          <span
            onClick={() => {
              window.location.href = "/logout";
            }}
            className="font-base text-foreground cursor-pointer px-4 py-1 hover:text-slate-500 hover:underline"
          >
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
}
