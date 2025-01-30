import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.container}>
      <p className={css.p}>Welcome, username</p>
      <button className={css.button}>Log out</button>
    </div>
  );
};

export default UserMenu;
