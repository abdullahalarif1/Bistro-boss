import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center items-center gap-5 md:mx-10">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-warning ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"/dashboard/home"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservations"}>
              <FaCalendarAlt></FaCalendarAlt> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/history"}>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myCart"}>
              <FaShoppingCart></FaShoppingCart> My Cart{" "}
              <span className="badge badge-secondary ">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>Home{" "}
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/menu">
              <GiHamburgerMenu></GiHamburgerMenu> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <MdFastfood></MdFastfood> Our Food{" "}
            </NavLink>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
