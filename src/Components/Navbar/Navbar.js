import React, { useState } from "react";
import logo from "./../../../src/assets/logo/logo-light.png";
// import "./../../App.css";
import "./navbar.css";
import { Nav, NavLink, useParams } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const tmp = useParams();
  // console.log("UseParams",tmp);

  return (

    
    <>
      <nav
        className="navalterbar"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="navalter_wrapper">
          <div className="logo">
            <NavLink to="/home"><img  src={logo} alt="" /></NavLink>
          </div>
          <div className="navalter_menu">
            <ul className="navalter_menu_list">
              <li className="navalter_menu_item">
                <NavLink
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/a2oj"
                >
                  A2OJ
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/leaderboard"
                >
                  Leaderboard
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/contest"
                >
                  Contest
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/roadmap"
                >
                  Roadmap
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/code-editor"
                >
                  Code Editor
                </NavLink>
              </li>
              <li className="navalter_menu_item">
                <NavLink
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
            <i
              onClick={handleMenu}
              className={`navalter_menu_icon fa-solid fa-bars`}
            />
          </div>
        </div>
      </nav>

      <ul className={menu ? "navalter_mobile" : "navalter_mobile mobile_active"}>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/a2oj"
          >
            A2OJ
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/leaderboard"
          >
            Leaderboard
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/contest"
          >
            Contest
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/roadmap"
          >
            Roadmap
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/code-editor"
          >
            Code Editor
          </NavLink>
        </li>
        <li onClick={() => setMenu(!menu)} className="mobile_menu_item">
          <NavLink
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
