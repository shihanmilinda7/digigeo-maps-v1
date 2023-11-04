"use client";

import React, { Suspense } from "react";
import "ol/ol.css";
// import { Map } from "@react-ol/fiber";
import { useRef } from "react";
import CompanyBottomSideNavbar from "../side-navbar/company-bottomsidenavbar-component";
import { CompanyMap } from "../maps/company-map";
import Spinner from "../loading";

export const CompanyMapWorkspan = () => {
  const viewRef = useRef();
  return (
    <div>
      <div className="flex flex-col">
        <div className="fixed top-15 left-0 z-40 ">
          <div className="mt-24">
            <CompanyBottomSideNavbar />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Suspense fallback={<Spinner />}>
          <CompanyMap />
        </Suspense>
      </div>
    </div>
  );
};
