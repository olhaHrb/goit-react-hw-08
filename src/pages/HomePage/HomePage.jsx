import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={css.container}>
        <h2 className={css.h2}>hello,</h2>
        <p className={css.p}>this is your</p>
        <h1 className={css.h1}>contact book</h1>
      </div>
    </div>
  );
};

export default HomePage;
