"use client";

import { navItems } from "@public/Data/common";
import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";

export const MenuItems = ({ router }: { router?: NextRouter }) => {
  // const isActive = router.pathname === link;

  const [open, setOpen] = useState("");
  const handleDropdownHover = (label: string) => {
    setOpen(label);
  };

  const handleDropdownLeave = () => {
    setOpen("");
  };
  console.log(navItems);
  return (
    <ul className={`px-1 flex`}>
      {navItems.map((nav, i) => (
        <MenuItem
          key={i}
          label={nav.label}
          link={nav.link}
          option={nav.option}
          setOpen={setOpen}
          open={open}
          handleDropdownHover={handleDropdownHover}
          handleDropdownLeave={handleDropdownLeave}
          // router={router}
        ></MenuItem>
      ))}
    </ul>
  );
};
