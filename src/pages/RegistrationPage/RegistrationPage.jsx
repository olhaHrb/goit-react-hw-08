import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegistrationPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h1>Register your account</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
