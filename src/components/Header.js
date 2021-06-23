import React from "react";
import NavBarButton from "./NavBarButton";
import style from "../components/style.css";
import Input from "./Input";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <NavBarButton esm="join / sign up" />
        </div>
        <Input />
        <div className="right">
          <NavBarButton esm="about Us" />
          <NavBarButton esm="contact us" />
          <NavBarButton esm="search" />
          <NavBarButton esm="home" />
        </div>
      </div>
    </>
  );
};

export default Header;
