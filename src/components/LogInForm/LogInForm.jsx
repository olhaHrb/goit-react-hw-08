import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "../LogInForm/LogInForm.module.css";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const ContactFormSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LogInForm = () => {
  const emailFieldId = useId;
  const passwordFieldId = useId;
  const handleSubmit = () => {};

  return (
    <div>
      <h1>Please log in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <div className={css.wrap}>
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
          </div>

          <div className={css.wrap}>
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
          </div>

          <button className={css.button} type="Submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;
