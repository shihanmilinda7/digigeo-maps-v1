"use client";

import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiTwotoneGold } from "react-icons/ai";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMap } from "@/store/map-selector/map-selector-slice";
import { useRouter } from "next/navigation";

const TopSideNavbar = () => {
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

  const dispatch = useDispatch();
  const router = useRouter();

  const [activeButton, setActiveButton] = useState("Area");

  const selectedMapWorkspan = useSelector(
    (state: any) => state.mapSelectorReducer.selectedMap
  );

  useEffect(() => {
    setActiveButton(selectedMapWorkspan);
  }, [selectedMapWorkspan]);

  const mapButtonHAndler = async (selectedValue: any) => {
    setActiveButton(selectedValue);
    router.push("?t=" + selectedValue);

    // dispatch(setSelectedMap(selectedValue));
  };

  return (
    <div className="rounded m-2 w-96 flex gap-2">
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            className={`w-full flex gap-1 ${
              activeButton === "Area"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => mapButtonHAndler("Area")}
          >
            <MdLocationOn className="h-4 w-4" />
            Area
          </Button>
          <Button
            variant="outline"
            className={`w-full flex gap-1 ${
              activeButton === "Company"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => mapButtonHAndler("Company")}
          >
            <BsFillBuildingsFill className="h-4 w-4" />
            Company
          </Button>
          <Button
            variant="outline"
            className={`w-full flex gap-1 ${
              activeButton === "Commodity"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => mapButtonHAndler("Commodity")}
          >
            <AiTwotoneGold className="h-4 w-4" />
            Commodity
          </Button>
        </div>
        <div>
          <div style={{ display: activeButton === "Area" ? "block" : "none" }}>
            <Input list="area" type="text" placeholder="Search area" />
            <datalist
              id="area"
              style={{
                position: "absolute",
                top: 0,
                left: "100%",
                marginLeft: "10px",
              }}
            >
              <option value="Area 1" />
              <option value="Area 2" />
              <option value="Area 3" />
            </datalist>
          </div>
          <div
            style={{ display: activeButton === "Company" ? "block" : "none" }}
          >
            <Input list="company" type="text" placeholder="Search company" />
            <datalist
              id="company"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <option value="Company 1" />
              <option value="Company 2" />
              <option value="Company 3" />
            </datalist>
          </div>
          <div
            style={{
              display: activeButton === "Commodity" ? "block" : "none",
            }}
          >
            <Input
              list="commodity"
              type="text"
              placeholder="Search commodity"
            />
            <datalist
              id="commodity"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <option value="commodity 1" />
              <option value="commodity 2" />
              <option value="commodity 3" />
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSideNavbar;
