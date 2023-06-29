"use client";

import Link from "next/link";

export const Logo = () => (
  <div className="w-fit max-w-[168px]">
    <Link href="/">
      <div className="-mb-[12px] mr-[9%] flex justify-end items-end">
        <h1 className="text-[24px] text-primary font-bold">NFters</h1>
      </div>
    </Link>
  </div>
);
