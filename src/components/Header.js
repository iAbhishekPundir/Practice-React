import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  useEffect(()=> {
    console.log("useEffect called");
  }, [loginBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
