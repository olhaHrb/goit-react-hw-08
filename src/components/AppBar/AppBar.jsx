import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={css.nav}>
        <Navigation />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </nav>
    </div>
  );
};
export default AppBar;
