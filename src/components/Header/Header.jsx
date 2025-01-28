import css from "../Header/Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <p>Home</p>
      <p>Register</p>
      <p>Log In</p>
    </div>
  );
}
