import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using useselector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex  justify-between bg-slate-100">
      <div className="logo-container">
        <Link className="link" to="/">
          <img className="w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="px-2 hover:font-semibold">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
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
          {/* <li className="px-2 hover:font-semibold">
            <Link className="link" to="/contact">
              Contact us
            </Link>
          </li> */}
          <li className="px-2 text-lg hover:font-bold font-semibold">
            <Link className="link" to="/cart">
              Cart ( {cartItems.length} )
            </Link>
          </li>

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
          <li className="font-bold mr-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
