import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button className={css.button} onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
