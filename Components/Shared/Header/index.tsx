"use client";

import { Button, Container, Logo } from "@Components/Common";
import { useIgnorePate } from "@hooks";
import { MenuItems, MobileMenuItems } from ".";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const ignorePath = useIgnorePate();

  return (
    <Container className={`${ignorePath && "hidden"}`}>
      <nav className="flex justify-between items-center px-5 py-2.5">
        <Logo />
        <div className="hidden lg:block">
          <MenuItems />
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden md:flex gap-2 justify-center items-center ">
            <SearchBox />
            <Button rounded variant="primary">
              Upload
            </Button>
            <Button rounded variant="secondary">
              {" "}
              Connect Wallet
            </Button>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-white absolute z-[100] rounded-md w-52"
            >
              <MobileMenuItems />
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export * from "./MenuItem";
export * from "./MenuItems";
export * from "./MobileMenuItem";
export * from "./SearchBox";
