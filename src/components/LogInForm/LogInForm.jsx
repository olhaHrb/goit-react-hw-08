import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "../LogInForm/LogInForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const emailFieldId = useId;
  const passwordFieldId = useId;
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailFieldId}
        ></Field>
        <ErrorMessage
          className={css.error}
          name="email"
          component="span"
        ></ErrorMessage>

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          className={css.input}
          type="text"
          name="password"
          id={passwordFieldId}
        ></Field>
        <ErrorMessage
          className={css.error}
          name="password"
          component="span"
        ></ErrorMessage>

        <button className={css.button} type="Submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LogInForm;
