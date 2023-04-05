import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsBarChartFill, BsPieChartFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="lg:flex flex-col h-full p-3 bg-white shadow lg:w-40 md:hidden hidden">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 pl-4 space-y-1 text-lg">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiFillHome />
                  <span>Home</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/analysis"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BsPieChartFill />
                  <span>Analysis</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/reports"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BsBarChartFill />
                  <span>Report</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/views"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <IoLocationSharp />
                  <span>View</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/login"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaUser />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 md:w-1 w-full card px-3">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
