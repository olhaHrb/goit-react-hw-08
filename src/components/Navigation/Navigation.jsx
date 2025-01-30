import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Contacts
        </NavLink>
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
    </header>
  );
};

export default Navigation;
