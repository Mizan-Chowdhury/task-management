import { Outlet } from "react-router-dom";
import Home from "../pages/home/Home";

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
