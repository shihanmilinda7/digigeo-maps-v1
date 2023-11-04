"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ModeToggle } from "../theme-switcher";
import { Home } from "lucide-react";
import { Button } from "../ui/button";

const HomeNavbar = () => {
  //get pathname
  let pathname: string = "";

  try {
    pathname = window.location.href;
    // console.log("pathname1", window.location.href);
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
    // console.log("pathname", pathname);
  }

  const currentRoute = usePathname();

  const router = useRouter();

  useEffect(() => {
    const button = document.querySelector(
      "#menu-button"
    ) as HTMLButtonElement | null;
    const menu = document.querySelector("#menu") as HTMLElement | null;

    if (button && menu) {
      const clickHandler = () => {
        menu.classList.toggle("hidden");
      };

      button.addEventListener("click", clickHandler);

      // Clean up the event listener when the component unmounts
      return () => {
        button.removeEventListener("click", clickHandler);
      };
    }
  }, []);

  // styles for all links
  const commonStyles = "md:p-4 py-2 block hover:font-bold text-indigo-800";
  const activeStyle =
    // commonStyles + " rounded-t-lg bg-blue-500 text-blue-900";
    commonStyles + " overline";
  const nonActiveStyle = commonStyles;

  //style for dropdown
  const dropCommonStyle = "hover:font-bold py-2 px-4 block whitespace-no-wrap ";
  const dropActiveStyle =
    dropCommonStyle +
    "bg-white text-xs p-4 border border-gray-100 shadow-md font-bold text-xs";
  const dropNonActiveStyle =
    dropCommonStyle + "bg-white text-xs p-4 border border-gray-100 shadow-md";
  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          h-[10vh]
          text-lg text-gray-700
          bg-white p-4 border border-gray-200 shadow-md
          dark:bg-black dark:border-gray-800
        "
      >
        <div className="flex">
          <span className="pl-1 mx-auto text-xl font-black leading-none text-gray-900 dark:text-white select-none  flex items-center justify-center">
            DigiGeo<span className="text-indigo-600">Maps</span>
          </span>
          {/* <img src="../logo.png"></img> */}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0
              flex gap-6"
          >
            <li>
              <Button variant="outline" size="icon">
                <AiFillHome className="h-6 w-6 dark:text-white" />
              </Button>
              {/* <AiFillHome className="h-6 w-6" /> */}
            </li>
            <li>
              <Button variant="outline" size="icon">
                <AiFillQuestionCircle className="h-6 w-6 dark:text-white" />
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon">
                <MdEmail className="h-6 w-6 dark:text-white" />
              </Button>
            </li>

            <li>
              <Button variant="outline">
                <span className="font-semibold dark:text-white">
                  Disclaimer
                </span>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
