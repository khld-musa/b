import React, { useState, Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";

function NavLinks(props) {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      <nav>
      <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
              <a href="/">Home</a>
            </li>
        {user ? (
         <>


            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link to="/me" className="nav__link">
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            {user && user.role === "admin" && (
                <Link className="nav__link" to="/dashboard">
                Dashboard
              </Link>
               )}
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link
                className="nav__link"
                to="/cart"
                style={{ textDecoration: "none" }}
              >
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span className="ml-1" id="cart_count">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link className="nav__link" to="/orders/me">
            
                <span className="profile">orders</span>
              </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link
                className="nav__link text-danger"
                to="/"
                onClick={logoutHandler}
              >
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </Link>
            </li>
         </>
        ) : (
          !loading && (
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            </li>
          )
        )}
         </ul>
      </nav>
    </Fragment>
  );
}

export default NavLinks;
