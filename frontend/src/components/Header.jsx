import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MySvgIcon from "../assets/name-logo-favicon.svg";
import MySvgIconDark from "../assets/name-logo-white.svg";
import { useTheme } from "@/pages/DarkMode/ThemeProvider";
import { ModeToggle } from "@/pages/DarkMode/ModeToggle";
import { Button } from "./ui/button";

function Header() {
  const { theme } = useTheme();
  const location = useLocation();
  const path = location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(path);
  });

  return (
    <div className="flex justify-between items-center p-2 bg-secondary shadow-md">
      <div className="flex p-2">
        <img
          className="w-auto h-6 xs:h-10 sm:h-10"
          src={theme === "dark" ? MySvgIconDark : MySvgIcon}
          alt="logo"
        />

        <ul className="flex gap-6 sm:ml-10 xs:ml-4 items-center">
          <li
            onClick={() => navigate("/student/course")}
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/home/dashboard" ? "text-primary font-bold" : ""
            }`}
          >
            Explore
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/home/questions" ? "text-primary font-bold" : ""
            }`}
          >
            My Courses
          </li>
        </ul>
      </div>

      <div className="flex space-x-1 p-2">
        <Button className="dark:border-white border-black" variant="outline">Sign Out</Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
