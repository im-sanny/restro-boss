import { FaAddressBook, FaBookmark, FaCalendar, FaCartShopping, FaHouse, FaStar, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
        {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/cart"}><FaHouse></FaHouse> USER HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}><FaCalendar></FaCalendar> RESERVATION</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}><FaWallet></FaWallet> PAYMENT HISTORY</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}><FaCartShopping></FaCartShopping> My Cart</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}><FaStar></FaStar> ADD REVIEW</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}><FaBookmark></FaBookmark>My Bookings</NavLink>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
