// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import Loader from "./components/Loader/Loader";
// import Error from "./components/Error/Error";

// import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { selectError, selectLoading } from "./redux/contacts/contactsSlice";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPade"));

export default function App() {
  // const dispatch = useDispatch();

  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<div>Loading page code ...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

{
  /* <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />  */
}
