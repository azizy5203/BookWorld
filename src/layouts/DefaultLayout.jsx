import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
  return(
    <div className="flex flex-col h-screen">
      <div className="w-40">
        dd
      </div> 
      <Outlet />
    </div>
  )
};

export default DefaultLayout;
