import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import blackberry from "../../assets/images/blackberry.png";
import logoutIcon from "../../assets/images/logoutIcon.svg";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={blackberry} alt="header logo"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button className={classes.logoutButton} onClick={props.logout}>
              <img src={logoutIcon} alt="logout"></img>
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
