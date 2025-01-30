import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Log in
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Register
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
