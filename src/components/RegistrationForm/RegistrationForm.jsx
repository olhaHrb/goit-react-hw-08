import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const ContactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup
    .string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  const nameFieldId = useId;
  const emailFieldId = useId;
  const passwordFieldId = useId;

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <div className={css.wrap}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            ></Field>
            <ErrorMessage
              className={css.error}
              name="name"
              component="span"
            ></ErrorMessage>
          </div>

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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
