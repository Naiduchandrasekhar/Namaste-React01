import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(true);

  const { mode, setThemeMode } = useContext(ThemeContext);

  const cartItems = useSelector((store) => store.cart.totalItemCount)


  return (
    <div className={`${mode ? "bg-[#040404] text-white": "bg-[rgb(255,255,255)] text-black"} flex justify-between items-center  shadow-lg  top-0 fixed w-[100%] overflow-hidden`}>
      <div>
        <Link to="/about">
          <img className="w-[70]" src={LOGO_URL} />
        </Link>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li onClick={() => {setThemeMode(!mode)}} className="px-4 cursor-pointer">
            <h4 className="text-2xl">{mode ? "🌞" : "🌛"}</h4>
          </li>
          <li className="px-4">
            <Link to="/" className="headerLinks">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="headerLinks">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="headerLinks">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="headerLinks">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart" >
              🛒-(Items: {cartItems})
            </Link>
          </li>
          <button
            onClick={() => {
              setLogin((prev) => {
                setLogin(!prev);
              });
            }}
            className="px-4"
          >
            {login === true ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
