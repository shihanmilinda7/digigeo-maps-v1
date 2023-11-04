"use client";

import React, { Suspense } from "react";
import "ol/ol.css";
// import { Map } from "@react-ol/fiber";
import { useRef } from "react";
import CommodityBottomSideNavbar from "../side-navbar/commodity-bottomsidenavbar-component";
import { CommodityMap } from "../maps/commodity-map";
import Spinner from "../loading";

export const CommodityMapWorkspan = () => {
  const viewRef = useRef();
  return (
    <div>
      <div className="flex flex-col">
        <div className="fixed top-15 left-0 z-40 ">
          <div className="mt-24">
            <CommodityBottomSideNavbar />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Suspense fallback={<Spinner />}>
          <CommodityMap />
        </Suspense>
      </div>
    </div>
  );
};
