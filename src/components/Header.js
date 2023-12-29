import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex  justify-between bg-slate-100">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="px-2 hover:font-semibold">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-2 hover:font-semibold">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-2 hover:font-semibold">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-2 hover:font-semibold">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="px-2 hover:font-semibold">
            <Link className="link" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="px-2 hover:font-semibold">Cart</li>
          
          <li className="px-2">
          <button
            className="rounded-sm bg-amber-300 px-2 hover:bg-amber-400"
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </button>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Header;
