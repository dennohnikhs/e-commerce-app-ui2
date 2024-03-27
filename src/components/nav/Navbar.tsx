import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState } from "react";
import Header from "../header/Header";

const Navbar = () => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const inputHandler = () => {
    setSearchActive(!isSearchActive);
  };

  const menuHandler = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header />
      <div>
        <div className="navbar_div">
          <div className={isSearchActive ? "input_form" : "input_form_not"}>
            <input type="text" placeholder="Search here" />
            <SearchIcon className="Search_icon_input" />
            <CloseIcon onClick={inputHandler} className="close_icon" />
          </div>
          <div className={isSearchActive ? "header" : ""}>
            <div className="navbar_main">
              <div>
                <div onClick={inputHandler}>
                  <SearchIcon className="Search_icon" />{" "}
                </div>
                <MenuIcon onClick={menuHandler} className="menu_icon" />
              </div>
              <div>
                <img
                  src="/assets/images/logo.avif"
                  className="heading_logo"
                  alt=""
                />
              </div>
              <div className="bad_search">
                <SearchIcon onClick={inputHandler} className="Search_icon2" />
                <LocalMallIcon className="bag_icon" />
              </div>
            </div>
            <div className="Nav_links">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
              <Link to="/privacy" className="link">
                Privacy
              </Link>
              <Link to="/loginform" className="link">
                Login
              </Link>
              <Link to="/signup" className="link">
                Signup
              </Link>
            </div>
            <div className={isMenuOpen ? "sidebar2" : "sidebar1"}>
              <Link to="/" className="sidebar_link">
                Home
              </Link>
              <Link to="/contact" className="sidebar_link">
                Contact
              </Link>
              <Link to="/privacy" className="sidebar_link">
                Privacy
              </Link>
              <Link to="/loginform" className="szidebar_link">
                Login
              </Link>
              <Link to="/signup" className="sidebar_link">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
