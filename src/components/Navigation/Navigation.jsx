import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Home
        </NavLink>
        {isLogged && (
          <NavLink
            to="/contacts"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
