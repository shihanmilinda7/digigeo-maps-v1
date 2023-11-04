// "use client";

// import React, { Suspense } from "react";
// import "ol/ol.css";
// // import { Map } from "@react-ol/fiber";
// import { useRef } from "react";
// import AreaBottomSideNavbar from "../side-navbar/area-bottomsidenavbar-component";
// import { AreaMap } from "../maps/area-map";
// import Spinner from "../loading";
// import { useSelector } from "react-redux";

// export const AreaMapWorkspan = () => {

//   const isSideNavOpen = useSelector(
//     (state: any) => state.mapSelectorReducer.isSideNavOpen
//   );

//   const viewRef = useRef();
//   return (
//     <div>
//       <div className="flex flex-col">
//         <div className="fixed top-15 left-0 z-40 ">
//           <div className="mt-24">
//             <AreaBottomSideNavbar />
//           </div>
//         </div>
//       </div>
//       <div className="z-0">
//         <Suspense fallback={<Spinner />}>
//           <AreaMap />
//         </Suspense>
//       </div>
//     </div>
//   );
// };
