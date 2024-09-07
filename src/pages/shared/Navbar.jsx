import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/dashboard/cart">
          <button className="flex items-center gap-1">
            <FaCartShopping />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar fixed z-10 bg-base-100 shadow-md">
      {/* Mobile and Small Devices */}
      <div className="navbar-start">
        <div className="dropdown">
          <button className="btn btn-ghost lg:hidden" tabIndex={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Restro Boss
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* User Profile and Auth Links */}
      <div className="navbar-end flex items-center space-x-4">
        {!user && (
          <NavLink to="/signup" className={"btn btn-ghost"}>
            SignUp
          </NavLink>
        )}
        {user ? (
          <div className="flex items-center space-x-3">
            <span className="font-semibold">{user?.displayName}</span>
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-ghost">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
