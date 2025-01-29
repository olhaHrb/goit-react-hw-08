import LogInForm from "../../components/LogInForm/LogInForm";
import Navigation from "../../components/Navigation/Navigation";

const LoginPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Please log in</h1>
      <LogInForm />
    </div>
  );
};

export default LoginPage;
