import {
  FaBookmark,
  FaCalendar,
  FaCartShopping,
  FaHouse,
  FaSearchengin,
  FaStar,
  FaWallet,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-1">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHouse></FaHouse> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar> RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <FaWallet></FaWallet> PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaCartShopping></FaCartShopping> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaStar></FaStar> ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaBookmark></FaBookmark>My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHouse></FaHouse>Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaSearchengin></FaSearchengin>Home
            </NavLink>
          </li>
          
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
