import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

import Search from "./Search";

import "../../App.css";

const Header = () => {
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
      <nav className="navbar  row">
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <i
              id="cart"
              className="fa fa-shopping-cart ml-3"
              aria-hidden="true"
            ></i>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    لوحة التحكم
                  </Link>
                )}
                <Link className="dropdown-item" to="/orders/me">
                  الطلبيات
                </Link>
                <Link className="dropdown-item" to="/me">
                  الملف الشخصي
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  تسجيل خروج
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn bg-info text-white ml-2" id="login_btn">
                تسجيل الدخول
              </Link>
            )
          )}
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Route render={({ history }) => <Search history={history} />} />
        </div>

        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              {/* <img src="/images/shopit_logo.png" /> */}
              <h1 className="text-light">السوق</h1>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
