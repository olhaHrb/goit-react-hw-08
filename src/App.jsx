import css from "./App.module.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPade"));

export default function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading page code ...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
