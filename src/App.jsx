import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/contactsOps";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { selectError, selectLoading } from "./redux/contacts/contactsSlice";
import Header from "./components/Header/Header";
import LogInForm from "./components/LogInForm/LogInForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Header />
      <RegisterForm />
      <LogInForm />
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
