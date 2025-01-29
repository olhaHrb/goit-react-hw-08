import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;
