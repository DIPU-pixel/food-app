import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../Assest/image/logo.png"
const Title = () => {
  return (
    <img
      className="logo"
      src={LOGO}
      alt="image"
    />
  );
};

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>

          <li>
            <Link to="/contact-us"> contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {islogin === false ? (
        <button onClick={() => setIslogin(true)}>logout</button>
      ) : (
        <button onClick={() => setIslogin(false)}>login</button>
      )}
    </div>
  );
};
export default Header;
