"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineFireTruck } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { Button } from "../ui/button";
import { AreaFeaturedCompanyAccordion } from "./area/area-featured-company-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useSelector } from "react-redux";

const AreaBottomSideNavbar = () => {
  let pathname: string = "";

  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  const [open, setOpen] = useState(true);

  // const collapsHandleEvent =
  return (
    <section className="flex gap-6">
      <div className={`duration-500 flex w-auto`}>
        <div
          className={`
        ${open ? "bg-white dark:bg-black " : ""} 
        h-[90vh] ml-2 mt-2
        ${open ? "w-96 mr-2" : "w-0"} 
        duration-500`}
        >
          <div className={`${open ? "py-0.1 flex flex-col" : "hidden"}`}>
            {/* <span
              className={
                open
                  ? "mx-auto text-xl font-black leading-none text-gray-800 select-none dark:text-white"
                  : "hidden"
              }
            >
              AREA MAP
            </span> */}
            <div className="ml-2 mr-2">
              <AreaFeaturedCompanyAccordion />
            </div>
            <div className="ml-2 mr-2">
              <Accordion type="single" collapsible className="w-full py-0.1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-2 flex h-10 w-full rounded-md border border-black bg-white dark:border-white dark:bg-black px-3 py-2 text-sm">
                    Companies
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative"></div>
        </div>
        <div className="w-12">
          <div className="flex flex-col gap-4 mt-2">
            <Button variant="outline" size="icon">
              <BsFillArrowLeftSquareFill
                size={26}
                className={`cursor-pointer ${open ? "" : "rotate-180"}`}
                onClick={() => setOpen(!open)}
              />
            </Button>
            <Button variant="outline" size="icon">
              <GiEarthAmerica className={`cursor-pointer h-6 w-6`} />
            </Button>
            <Button variant="outline" size="icon">
              <AiFillPlusSquare className={`cursor-pointer h-6 w-6`} />
            </Button>
            <Button variant="outline" size="icon">
              <AiFillMinusSquare className={`cursor-pointer h-6 w-6`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AreaBottomSideNavbar;
