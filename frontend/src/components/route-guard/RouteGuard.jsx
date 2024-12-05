import { Navigate, useLocation } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "@/context/authcontext";

function RouteGuard({ element }) {
  const location = useLocation();

  const { auth } = useContext(AuthContext);

  const authenticated = auth?.authenticate ;

  const role = auth?.user?.role ;

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  if (
    authenticated &&
    role !== "instructor" &&
    (location.pathname.includes("instructor"))
  ) {
    return <Navigate to="/student" />;
  }

  if (
    authenticated &&
    role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;