import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div id="navbar" className="bg-[#7D0A0A] text-white">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#7D0A0A] rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/#search">Search</a>
              </li>
              <li>
                <a href="/#testimonial">Happy Couples</a>
              </li>
              <li>
                <Link to="/create-boidata">Create Biodata</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <a className="text-xl">
            <Link to="/">LifeMateConnect.com</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#search">Search</a>
            </li>
            <li>
              <a href="/#testimonial">Happy Couples</a>
            </li>
            <li>
              <Link to="/create-biodata">Create Biodata</Link>
            </li>
            {user ? (
              <>
                <li>
                  <button onClick={handleLogout}>
                    <Link to="/">Logout</Link>
                  </button>
                </li>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
