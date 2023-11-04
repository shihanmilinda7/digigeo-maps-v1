"use client";

import React from "react";
import "ol/ol.css";
import { Map } from "@react-ol/fiber";
import { useRef } from "react";

export const CommodityMap = () => {
  const viewRef = useRef(null);
  return (
    <Map style={{ width: "100vw", height: "90vh" }} controls={[]}>
      <olView ref={viewRef} initialCenter={[0, 0]} initialZoom={2} />
      <olLayerTile preload={Infinity}>
        <olSourceOSM />
      </olLayerTile>
    </Map>
  );
};
