import React, { useState } from "react";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import MySvgIcon from "../../assets/name-logo-favicon.svg";
import MySvgIconDark from "../../assets/name-logo-white.svg";
import { ModeToggle } from "../DarkMode/ModeToggle.jsx";
import { useTheme } from "../DarkMode/ThemeProvider.jsx";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const { theme } = useTheme();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <header className="bg-gray-900 h-[100vh] pattern">
        <div className="container px-6 mx-auto">
          <nav className="flex flex-col py-6 xs:flex-row xs:justify-between sm:flex-row sm:justify-between sm:items-center">
            <a href="#">
              <img
                className="w-auto h-6 xs:h-10 sm:h-10"
                src={theme === "dark" ? MySvgIconDark : MySvgIcon}
                alt="logo"
              />
            </a>

            <div className="flex items-center mt-2 mr-1 -mx-2 sm:mt-0">
              <button
                onClick={toggleForm}
                className="px-3 py-1 h-9 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700 mr-1"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
              <ModeToggle />
            </div>
          </nav>

          <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
                Ademy - The LMS
              </h2>

              <h3 className="mt-2 text-2xl font-semibold text-gray-100">
                By{" "}
                <span className="text-blue-400 dark:text-gray-400">Aditya</span>
              </h3>

              <p className="mt-4 text-gray-100">
                Ademy is a cutting-edge Learning Management System designed to
                empower learners and educators alike. Seamlessly manage courses,
                track progress, and collaborate in a modern, user-friendly
                environment. Transform the way you learn and teach with Ademy.
              </p>
            </div>

            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              {isSignIn ? (
                <SignIn toggleForm={toggleForm} />
              ) : (
                <SignUp toggleForm={toggleForm} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AuthPage;
