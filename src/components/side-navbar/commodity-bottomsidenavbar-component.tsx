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

const CommodityBottomSideNavbar = () => {
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

  const currentRoute = usePathname();
  const router = useRouter();

  const menus = [
    { name: "Todo ..", link: "", icon: BiPurchaseTagAlt },
    // { name: "Invoice", link: "/home/invoice", icon: LiaFileInvoiceDollarSolid },
    // {
    //   name: "Customers",
    //   link: "/home/customers",
    //   icon: CgProfile,
    //   margin: true,
    // },
    // { name: "Suppliers", link: "/home/suppliers", icon: MdOutlineFireTruck },
    // { name: "Bank Accounts", link: "/home/bankdetails", icon: BsBank },
    // { name: "Fabrics", link: "/home/fabrics", icon: GiRolledCloth },
  ];

  const navButtonHandler = async (link: string) => {
    switch (link) {
      case "/systemadmin-page/fabrics":
        window.location.href = "/home/fabrics";
        break;
      default:
        window.location.href = "/";
    }
  };

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`
        ${open ? "bg-white dark:bg-black" : ""} 
        text-gray-800 dark:text-white 
        h-[90vh] m-2
        ${open ? "w-96" : "w-12 px-1"} 
        ${open ? "w-96 pr-2" : ""} 
        duration-500`}
      >
        <div className="py-3 flex">
          <span
            className={
              open
                ? "mx-auto text-xl font-black leading-none text-gray-800 select-none dark:text-white"
                : "hidden"
            }
          >
            COMMODITY MAP
          </span>
          <div className="flex flex-col gap-4">
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
        <div className="mt-4 flex flex-col gap-4 relative">
          {/* {menus?.map((menu, i) => (
            <button
              onClick={() => navButtonHandler(menu?.link)}
              key={i}
              className={`${
                currentRoute === menu?.link ? "bg-gray-600 " : ""
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-600 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </button>
          ))} */}
        </div>
      </div>
    </section>
  );
};
export default CommodityBottomSideNavbar;
