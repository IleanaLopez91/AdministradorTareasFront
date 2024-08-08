import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>AppLayout</div>
      <Outlet />
    </>
  );
}

export default AppLayout;
