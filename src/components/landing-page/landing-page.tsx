import TopSideNavbar from "../side-navbar/topsidenavbar-component";
import { WorkspanSelector } from "../map-workspans/workspan-selector";

export const LandingPage = () => {
  return (
    <div className="w-full flex">
      <div className="z-50 fixed top-15 left-0">
        <TopSideNavbar />
      </div>
      <div className="">
        <WorkspanSelector />
      </div>
    </div>
  );
};

// export const LandingPage = () => {
//   return (
//     <div className="w-full flex">
//       <div className="fixed top-15 left-0">
//         <TopSideNavbar />
//       </div>
//       <div className="z-50 flex flex-col">
//         <div className="fixed top-15 left-0">
//           <div className="mt-24">
//             <BottomSideNavbar />
//           </div>
//         </div>
//       </div>
//       <div className="z-0">
//         <Maps />
//       </div>
//     </div>
//   );
// };
