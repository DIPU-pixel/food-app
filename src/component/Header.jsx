import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../Assest/image/logo.png"
const Title = () => {
  return (
    <img
      className="p-2 h-20 bg-pink-50"
      src={LOGO}
      alt="image"
    />
  );
};

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="flex justify-between bg-pink-50 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex py-6 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about-us">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact-us"> contact</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      🤣
      {islogin === false ? (
        <button onClick={() => setIslogin(true)}>logout</button>
      ) : (
        <button onClick={() => setIslogin(false)}>login</button>
      )}
    </div>
  );
};
export default Header;
