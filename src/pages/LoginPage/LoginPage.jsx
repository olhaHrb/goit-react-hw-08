import LogInForm from "../../components/LogInForm/LogInForm";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <h1>Please log in</h1>
      <LogInForm />
    </div>
  );
};

export default LoginPage;
