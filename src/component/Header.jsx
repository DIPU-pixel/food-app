import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LOGO from "../Assest/image/logo.png";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div>
      <Link to="/">
        <img className="p-2 h-20 bg-pink-50" src={LOGO} alt="image" />
      </Link>
    </div>
  );
};

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const cartInfo = useSelector((state) => state?.cart?.items);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const onlineData = useOnline();
  useEffect(() => {
    const handleScroll = () => {
      // Add a scroll threshold value (e.g., 100 pixels) to determine when to fix the header
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-pink-50 shadow-md ${
        isHeaderFixed ? "fixed top-0 left-0 w-full z-10" : ""
      }`}
    >
      <div className="flex justify-between items-center p-0">
        <Title />
        <button className="lg:hidden p-2" onClick={toggleMobileNav}>
          ☰
        </button>
        <div className={`lg:flex ${isMobileNavOpen ? "block" : "hidden"}`}>
          <ul className="flex py-6 lg:py-0">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about-us">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact-us">Contact</Link>
            </li>
            <li className="px-2 cursor-pointer">
              <Link to="/cart">
              Cart -{cartInfo?.length}
              </Link>
              </li>
          </ul>
        </div>
        <div>{onlineData ? "🤜" : null}</div>
        {islogin === false ? (
          <button onClick={() => setIslogin(true)}>Logout</button>
        ) : (
          <button onClick={() => setIslogin(false)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
