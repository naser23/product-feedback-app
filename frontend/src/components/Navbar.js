import React from "react";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import HamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-hamburger.svg";

import CategoryArea from "./CategoryArea";
import Roadmap from "./Roadmap";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);

  function onLogout() {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

  function toggleModal() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <header className="navbar">
      <section className="logoArea">
        <div className="logoText">
          <h3 className="logoHeader">Frontend Mentor</h3>
          <p className="logoSubHeader">Feedback Board</p>
        </div>

        <div className="buttonArea">
          {user ? (
            <div className="loginArea" onClick={onLogout}>
              <BiLogIn className="authButton" /> Logout
            </div>
          ) : (
            <div className="loginArea" onClick={() => navigate("/login")}>
              <BiLogIn className="authButton" /> Login
            </div>
          )}

          <div className="hamburgerMenu" onClick={toggleModal}>
            <img src={HamburgerIcon} alt="HamburgerIcon" />
          </div>
        </div>
      </section>

      <CategoryArea />
      <Roadmap />
    </header>
  );
}

export default Navbar;
