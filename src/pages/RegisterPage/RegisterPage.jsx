import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Navigation from "../../components/Navigation/Navigation";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <h1>Register your account</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
