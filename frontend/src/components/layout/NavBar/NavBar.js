import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { Route, Link } from "react-router-dom";
import Search from "../Search";
import  './Nav.css';


function NavBar() {

  

  return (
    <div className="NavBar">

        <div className="">
          <Route render={({ history }) => <Search history={history} />} />
        </div>
      <MobileNav/>
      <Navigation/>

    </div>

  );
}

export default NavBar;    