import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Search from "../Search";
import "./Nav.css";

function NavBar(props) {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   alert.success("Logged out successfully.");
  // };

  return (
    <div className="NavBar ">
      <div className="row">
        <Route render={({ history }) => <Search history={history} />} />
        {user ? (
          <>
            <Link
              className="nav__link cart-1"
              to="/cart"
              style={{ textDecoration: "none" }}
            >
              <i class="fa fa-shopping-bag" aria-hidden="true">
                {" "}
                <span className="mr-4" id="cart_count">
                  {cartItems.length}
                </span>
              </i>
            </Link>
          </>
        ) : (
          !loading 
        )}
      </div>
      <MobileNav />
      <Navigation />
    </div>
  );
}

export default NavBar;
