import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={cl.Navbar}>
      <ul>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/about">About us</NavLink> </li>
        <li><NavLink to="/tours">Tours</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
