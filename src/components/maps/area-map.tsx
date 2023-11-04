"use client";

import React, { Suspense } from "react";
import "ol/ol.css";
import { Map } from "@react-ol/fiber";
import { useRef } from "react";

export const AreaMap = async () => {
  const viewRef = useRef();
  // let sumPromise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     console.log("sasas");
  //     resolve("The sum of all data is 100.");
  //   }, 3000);
  // });
  // let result = await sumPromise;
  return (
    <Map style={{ width: "100vw", height: "100vh" }} controls={[]}>
      <olView ref={viewRef} initialCenter={[0, 0]} initialZoom={2} />
      <olLayerTile preload={Infinity}>
        <olSourceOSM />
      </olLayerTile>
    </Map>
  );
};
