import { useSelector } from "react-redux";
import userImg from "@/assets/img/user-img.jpg";

import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { NavLink, useLocation, useMatches } from "react-router-dom";

export default function AppHeader() {
  const appUser = useSelector((state) => state.user.appUser);
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== ""); // Remove empty segments

  let accumulatedPath = "";

  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const title = lastMatch?.handle?.title;

  return (
    <div className="flex items-center justify-between pb-8 border-b border-[#B0B0B0]">
      <div className="">
        <span className="text-2xl font-medium block">{title}</span>
        {/* Start Breadcrumb */}
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/" className="font-light">
              Shop
            </BreadcrumbLink>
            {pathSegments.length > 0 && <BreadcrumbSeparator />}
          </BreadcrumbItem>

          {pathSegments.map((pathSegment, index) => {
            accumulatedPath += `/${pathSegment}`; // Build path progressively

            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  as={NavLink}
                  to={accumulatedPath}
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-light"
                  }
                >
                  {decodeURIComponent(pathSegment)}
                </BreadcrumbLink>
                {index !== pathSegments.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
        {/* End Breadcrumb */}
      </div>

      {/* User Info */}
      <div className="flex items-center gap-2">
        <img src={userImg} alt={appUser?.name} className=" rounded-[10px]" />
        <span className="text-2xl">{appUser?.name}</span>
      </div>
    </div>
  );
}
