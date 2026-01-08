import { Navigate, Outlet } from "react-router-dom";

export const GuestLayout = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
