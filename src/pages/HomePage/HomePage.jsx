import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={css.container}>
        <h2 className={css.subtitle}>hello,</h2>
        <p className={css.text}>this is your</p>
        <h1 className={css.title}>contact book</h1>
      </div>
    </div>
  );
};

export default HomePage;
